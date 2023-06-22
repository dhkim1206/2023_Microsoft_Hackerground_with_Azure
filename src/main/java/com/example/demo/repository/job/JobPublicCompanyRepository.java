package com.example.demo.repository.job;

import com.example.demo.entity.job.JobPublicCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobPublicCompanyRepository extends JpaRepository<JobPublicCompany, String> {
}
