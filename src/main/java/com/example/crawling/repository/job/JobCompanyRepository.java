package com.example.crawling.repository.job;

import com.example.crawling.entity.job.JobCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobCompanyRepository extends JpaRepository<JobCompany, String> {
}
