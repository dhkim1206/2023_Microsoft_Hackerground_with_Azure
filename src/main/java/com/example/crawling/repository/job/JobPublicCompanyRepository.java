package com.example.crawling.repository.job;

import com.example.crawling.entity.job.JobCompany;
import com.example.crawling.entity.job.JobPublicCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPublicCompanyRepository extends JpaRepository<JobPublicCompany, String> {
}
