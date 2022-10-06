package codegym.connectbe.repository;

import codegym.connectbe.model.BusType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBusTypeRepository extends JpaRepository<BusType, Integer> {
}
