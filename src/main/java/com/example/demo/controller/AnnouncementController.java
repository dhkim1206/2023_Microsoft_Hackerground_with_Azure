package com.example.demo.controller;


import com.example.demo.entity.dash.DashAnnouncement;
import com.example.demo.entity.dash.DashSpace;
import com.example.demo.entity.job.JobCompany;
import com.example.demo.entity.job.JobPublicCompany;
import com.example.demo.repository.dash.DashAnnouncementRepository;
import com.example.demo.repository.dash.DashSpaceRepository;
import com.example.demo.repository.job.JobCompanyRepository;
import com.example.demo.repository.job.JobPublicCompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class AnnouncementController {
    private final DashAnnouncementRepository dashAnnouncementRepository;
    private final DashSpaceRepository dashSpaceRepository;
    private final JobPublicCompanyRepository jobPublicCompanyRepository;
    private final JobCompanyRepository jobCompanyRepository;

    @GetMapping("/dash/announcement")
    public List<DashAnnouncement> findDashAnnouncement(){
        return dashAnnouncementRepository.findAll();
    }
    @GetMapping("/dash/space")
    public List<DashSpace> findDashSpace(){
        return dashSpaceRepository.findAll();
    }
    @GetMapping("/job/private")
    public List<JobPublicCompany> findPublicCompany(){
        return jobPublicCompanyRepository.findAll();
    }
    @GetMapping("/job/public")
    public List<JobCompany> findPrivateCompany(){
        return jobCompanyRepository.findAll();
    }
}
