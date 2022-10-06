package codegym.connectbe.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Agency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String busNumber;
    private String name;
    private String phone;
    private String email;

    @ManyToOne
    @JoinColumn(name = "busType", referencedColumnName = "id")
    private BusType busType;

    @JsonIgnore
    @OneToMany(mappedBy = "agency")
    private List<Trip> tripList;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBusNumber() {
        return busNumber;
    }

    public void setBusNumber(String busNumber) {
        this.busNumber = busNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public BusType getBusType() {
        return busType;
    }

    public void setBusType(BusType busType) {
        this.busType = busType;
    }

    public List<Trip> getTripList() {
        return tripList;
    }

    public void setTripList(List<Trip> tripList) {
        this.tripList = tripList;
    }

    public Agency(Integer id, String busNumber, String name, String phone, String email, BusType busType, List<Trip> tripList) {
        this.id = id;
        this.busNumber = busNumber;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.busType = busType;
        this.tripList = tripList;
    }

    public Agency() {
    }
}
