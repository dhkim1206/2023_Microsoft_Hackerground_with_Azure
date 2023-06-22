package com.example.crawling.entity.dash;

import lombok.Getter;
import lombok.NoArgsConstructor;
import org.jsoup.nodes.Element;

import javax.persistence.Entity;
import javax.persistence.Id;

//지원사업 공고
@Getter
@NoArgsConstructor
@Entity(name = "DashAnnouncement")
public class DashAnnouncement {
    @Id
    private Integer projectId;
    private String kind;
    private String title;
    private String dept;
    private String period;
    private String target;
    private String dday;
    private String link;

    public DashAnnouncement(Element element){
        setProjectId(element);
        setKind(element);
        setTitle(element);
        setDept(element);
        setPeriod(element);
        setTarget(element);
        setDday(element);
    };

    public void setProjectId(Element element){
        //첫 번째 공고의 아이디 가져오기
        Element button = element.select("button").first();
        String buttonId = button.id();
        this.projectId = Integer.parseInt(buttonId.substring(18, 25)); //예시: favorite_PROJECT_00003365
        this.link = "https://startup.daegu.go.kr/index.do?menu_id=00002552&menu_link=/front/project/projectFrontDetail.do?project_id=PROJECT_" + projectId;
    }

    public void setKind(Element element){
        Element kind = element.select(".kind").first();
        this.kind = kind.text();
    }

    public void setTitle(Element element){
        Element title = element.select(".tit").first();
        this.title = title.ownText();
    }

    public void setDept(Element element){
        Element dept = element.select(".n1 .hidden").first();
        this.dept = dept.text();
    }

    public void setPeriod(Element element){
        Element period = element.select(".n2 .hidden").first();
        this.period = period.text();
    }

    public void setTarget(Element element){
        Element target = element.select(".n3 .hidden").first();
        this.target = target.text();
    }

    public void setDday(Element element){
        Element dday = element.select(".deadline").first();
        this.dday = dday.text();
    }
}