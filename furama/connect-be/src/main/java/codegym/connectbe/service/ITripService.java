package codegym.connectbe.service;

import codegym.connectbe.model.Trip;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITripService {
    Page<Trip> getAll(Pageable pageable);
    Trip findById(int id);
    void deleteById(int id);
    void save(Trip trip);
    void update(Trip trip);
}
