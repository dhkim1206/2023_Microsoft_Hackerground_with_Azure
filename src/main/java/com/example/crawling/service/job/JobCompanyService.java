package com.example.crawling.service.job;

import com.example.crawling.constant.URLs;
import com.example.crawling.entity.job.JobCompany;
import com.example.crawling.repository.job.JobCompanyRepository;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JobCompanyService {
    private final JobCompanyRepository repository;
    private List<JobCompany> jobCompanies = new ArrayList<>();
    private WebDriver driver;

    public void crawlingTask() {
        this.driver = new ChromeDriver();

        int pageIndex = 1;

        //웹 연결
        driver.get(URLs.JobPrivateCompany);

        //====================최신 공고 체크====================/
        String pageSource = driver.getPageSource();
        Document doc = Jsoup.parse(pageSource);

        if (notiCheck(doc))
            System.out.println("알림 메소드 호출");

        while (true) {
            //============================크롤링=============================//
            //크롤링에 사용할 페이지 정보 받기
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            pageSource = driver.getPageSource();
            doc = Jsoup.parse(pageSource);
            List<WebElement> buttons = driver.findElements(By.cssSelector(".page_num"));

            saveJob(doc);

            //=========================다음 페이지 이동=========================//
            pageIndex++;

            if (pageIndex > buttons.size()) break;

            buttons.get(pageIndex - 1).click();
        }
        //크롤링 종료 후
        //DB의 모든 데이터 삭제
        repository.deleteAll();
        //DB에 새로운 데이터 저장
        Iterable<JobCompany> jobCompanyIterable = jobCompanies;
        repository.saveAll(jobCompanyIterable);

        //브라우저 종료
        driver.quit();
    }

    public boolean notiCheck(Document document) {
        //크롤링으로 첫 번째 공고 데이터 가져오기
        Element element = document.select("#searchJobList tr").first();
        //첫 번째 공고의 아이디 가져오기
        String projectId = element.select("button").first().id();

        //최신 공고에서 첫 번째 데이터를 DB에서 조회
        Optional<JobCompany> jobCompany = repository.findById(projectId);
        //값이 없다면 새로운 공고가 있음
        if (jobCompany.isEmpty()) {
            return true;
        }
        return false;
    }

    public void saveJob(Document document) {
        Elements elements = document.select("#searchJobList tr");

        //크롤링 된 데이터를 DashAnnouncement foreach를 사용해 객체로 변환
        for (Element element : elements) {
            JobCompany jobCompany = new JobCompany(element);
            jobCompanies.add(jobCompany);
        }
    }
}
