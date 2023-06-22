package com.example.crawling;

import com.example.crawling.service.dash.DashAnnouncementService;
import com.example.crawling.service.dash.DashSpaceService;
import com.example.crawling.service.job.JobCompanyService;
import com.example.crawling.service.job.JobPublicCompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling
@RequiredArgsConstructor
public class CrawlingApplication {
	private final DashAnnouncementService dashAnnouncementService;
	private final DashSpaceService dashSpaceService;
	private final JobCompanyService jobCompanyService;
	private final JobPublicCompanyService jobPublicCompanyService;

	public static void main(String[] args) {
		SpringApplication.run(CrawlingApplication.class, args);
		System.setProperty("webdriver.http.factory", "jdk-http-client");
		System.setProperty("webdriver.chrome.driver", "src/main/resources/driver/chromedriver");
		//서버 실행 시 무조건 한번 전체 사이트에 대한 크롤링 진행
	}

	@Scheduled(fixedDelay = 36000000) // Run every 1 hour
	public void executeTask() {
		dashAnnouncementService.crawlingTask();
		dashSpaceService.crawlingTask();
		jobCompanyService.crawlingTask();
		jobPublicCompanyService.crawlingTask();
	}
}

