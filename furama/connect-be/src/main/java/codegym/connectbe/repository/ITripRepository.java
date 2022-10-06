package codegym.connectbe.repository;

import codegym.connectbe.model.Trip;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface ITripRepository extends JpaRepository<Trip, Integer> {

    @Query(value = "select * " +
            "from agency a " +
            "join bus_type b on a.bus_type = b.id " +
            "join trip t on a.id = t.agency", nativeQuery = true)
    Page<Trip> getAll(Pageable pageable);

    @Query(value = "update trip set trip.status = 0 where trip.id = ?1", nativeQuery = true)
    void delete(Integer id);

    @Transactional
    @Modifying
    @Query(value = "insert into trip (arrival, arrival_time, departure, departure_time, agency) " +
            "value (?1,?2,?3,?4,?5)", nativeQuery = true)
    void create(String arrival, String arrivalTime, String departure, String departureTime, Integer agency);

    @Transactional
    @Modifying
    @Query(value = "update trip set trip.arrival=?1, " +
            "trip.arrival_time = ?2, " +
            "trip.departure = ?3 " +
            "trip.departure_time = ?4 " +
            "trip.agency = ?5 " +
            "where trip.id = ?6", nativeQuery = true)
    void update(String arrival, String arrivalTime, String departure, String departureTime, Integer agency, Integer id);
}
