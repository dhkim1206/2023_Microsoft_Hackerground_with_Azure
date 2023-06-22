package com.example.demo.entity.job;


import lombok.Getter;
import lombok.NoArgsConstructor;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Entity(name = "JobPublicCompany")
@NoArgsConstructor
public class JobPublicCompany {
    @Id
    private String id;
    private String companyName;
    private String title;
    private String location;
    private String career;
    private String education;
    private String payType;
    private String dday;
    private String link;

    public JobPublicCompany(Element element) {
        setCompanyName(element);
        setTitle(element);
        setInfo(element);
        setDday(element);
        setLink(element);
    }


    public void setCompanyName(Element element) {
        this.companyName = element.select("b").first().text();
    }

    public void setTitle(Element element) {
        this.title = element.select("a").first().text();
    }

    public void setInfo(Element element) {
        Elements elements = element.select("li");
        this.location = elements.get(0).text();
        this.career = elements.get(1).text();
        this.education = elements.get(2).text();
        this.payType = elements.get(3).text();

    }

    public void setDday(Element element) {
        this.dday = element.select(".search_dday").first().text();
    }

    public void setLink(Element element) {
        this.id = element.select("button").first().id();
        this.link = "https://job.daegu.go.kr/daegujob/searchJobView?" + id;
    }
}
