package codegym.connectbe.service.impl;

import codegym.connectbe.model.Trip;
import codegym.connectbe.repository.ITripRepository;
import codegym.connectbe.service.ITripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TripService implements ITripService {
    @Autowired
    private ITripRepository iTripRepository;

    @Override
    public Page<Trip> getAll(Pageable pageable) {
        return this.iTripRepository.getAll(pageable);
    }

    @Override
    public Trip findById(int id) {
        return this.findById(id);
    }

    @Override
    public void deleteById(int id) {
        this.iTripRepository.delete(id);
    }

    @Override
    public void save(Trip trip) {
        this.iTripRepository.create(trip.getArrival(), trip.getArrivalTime(),
                trip.getDeparture(), trip.getDepartureTime(),
                trip.getAgency().getId());
    }

    @Override
    public void update(Trip trip) {
        this.iTripRepository.update(trip.getArrival(), trip.getArrivalTime(),
                trip.getDeparture(), trip.getDepartureTime(),
                trip.getAgency().getId(), trip.getId());
    }
}
