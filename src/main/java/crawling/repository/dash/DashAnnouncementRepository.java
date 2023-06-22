package crawling.repository.dash;


import com.example.crawling.entity.dash.DashAnnouncement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DashAnnouncementRepository extends JpaRepository<DashAnnouncement, Integer> {

}
