package crawling.repository.dash;

import com.example.crawling.entity.dash.DashSpace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface DashSpaceRepository extends JpaRepository<DashSpace, Long> {
}
