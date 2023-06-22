package com.example.demo.repository.dash;


import com.example.demo.entity.dash.DashSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DashSpaceRepository extends JpaRepository<DashSpace, Long> {
}
