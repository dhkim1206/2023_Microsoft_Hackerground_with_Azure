package com.example.demo.repository.dash;


import com.example.demo.entity.dash.DashAnnouncement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DashAnnouncementRepository extends JpaRepository<DashAnnouncement, Integer> {

}
