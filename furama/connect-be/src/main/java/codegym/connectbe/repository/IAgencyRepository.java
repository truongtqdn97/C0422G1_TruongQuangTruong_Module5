package codegym.connectbe.repository;

import codegym.connectbe.model.Agency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAgencyRepository extends JpaRepository<Agency, Integer> {
}
