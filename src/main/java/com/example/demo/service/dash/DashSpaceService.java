package com.example.demo.service.dash;

import com.example.demo.constant.URLs;
import com.example.demo.entity.dash.DashSpace;
import com.example.demo.repository.dash.DashSpaceRepository;
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

@Service
public class DashSpaceService {
    private DashSpaceRepository repository;
    private List<DashSpace> dashSpaces;
    private WebDriver driver;
    private int maxPageIndex = 0;

    public DashSpaceService(DashSpaceRepository repository) {
        this.repository = repository;
        dashSpaces = new ArrayList<>();
    }

    //++알림 추가하기
    public void crawlingTask() {
        this.driver = new ChromeDriver();

        int pageIndex = 1;  //페이지 번호 = 첫 페이지

        //웹 연결
        driver.get(URLs.dashSpace);

        //정렬 기준을 리스트로 변경
        WebElement listButton = driver.findElement(By.cssSelector(".btn_l"));
        listButton.click();

        //페이지 최대 인덱스 구하기
        String pageSource = driver.getPageSource();
        Document doc = Jsoup.parse(pageSource);
        Elements aTags = doc.select("div.normal_pagination a");

        for (Element aTag : aTags) {
            String href = aTag.attr("href");
            String pageIndexStr = href.replaceAll("[^0-9]", "");
            if (!pageIndexStr.isEmpty()) {
                int index = Integer.parseInt(pageIndexStr);
                if (index > maxPageIndex) {
                    maxPageIndex = index;
                }
            }
        }
        // 갤러리형에서 6개 리스트에서 10개를 보여줌으로 페이지 인덱스를 줄인다.
        double tmpIndex =  maxPageIndex * 0.6;

        if (tmpIndex % 1 > 0) {
            maxPageIndex = (int) Math.ceil(tmpIndex);
        } else {
            maxPageIndex = (int) tmpIndex;
        }

        //각 페이지를 이동하면서 마감 공고 이전까지 크롤링
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

            saveSpace(doc);

            //=========================다음 페이지 이동=========================//
            WebElement nextPageButton;
            //10 페이지 단위로 다음 페이지 버튼으로 이동
            if (pageIndex % 10 == 0) {
                nextPageButton = driver.findElement(By.className("page_next"));
                pageIndex++;
            }
            //일반 경우 다음 페이지로 이동
            else {
                pageIndex++;
                //마지막 페이지가 넘어가면 종료
                if(pageIndex > maxPageIndex)
                    break;

                nextPageButton = driver.findElement(By.linkText(String.valueOf(pageIndex)));
            }
            nextPageButton.click();
        }
        //DB의 모든 데이터 삭제
        repository.deleteAll();
        //DB에 새로운 데이터 저장
        Iterable<DashSpace> dashSpacesIterable = dashSpaces;
        repository.saveAll(dashSpacesIterable);
        //브라우저 종료
        driver.quit();
    }

    public void saveSpace(Document document) {
        //전체 크롤링 후 저장
        Elements elements = document.select("tbody tr");

        //크롤링 된 데이터를 DashSpace foreach를 사용해 객체로 변환
        for (Element element : elements) {
            DashSpace dashSpace = new DashSpace(element);
            dashSpaces.add(dashSpace);
        }
    }
}
