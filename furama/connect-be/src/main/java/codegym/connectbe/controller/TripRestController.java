package codegym.connectbe.controller;

import codegym.connectbe.model.Trip;
import codegym.connectbe.service.ITripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "trips")
public class TripRestController {
    @Autowired
    private ITripService iTripService;

    @GetMapping("")
    public ResponseEntity<Page<Trip>> getTripList(@PageableDefault(size = 5) Pageable pageable){
        Page<Trip> trips = this.iTripService.getAll(pageable);
        if (!trips.hasContent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(trips, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Trip> findById(@PathVariable Integer id){
        Trip trip = this.iTripService.findById(id);
        if (trip != null){
            return new ResponseEntity<>(trip, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id){
        this.iTripService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Void> create(@RequestBody Trip trip){
        this.iTripService.save(trip);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Integer id, @RequestBody Trip trip){
        this.iTripService.update(trip);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}