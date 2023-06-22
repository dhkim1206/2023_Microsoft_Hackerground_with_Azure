package com.example.demo.entity;


import java.util.List;

//청년 정책
public class YouthPolicy {
    //일자리
    private List<Post> jobs;
    //교육
    private List<Post> educations;
    //주거
    private List<Post> residence;
    //복지
    private List<Post> welfare;

    public class Post {
        String title;
        String summary;
        boolean latest;
    }
}
