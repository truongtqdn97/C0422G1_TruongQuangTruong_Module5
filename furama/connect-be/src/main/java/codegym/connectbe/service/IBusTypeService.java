package codegym.connectbe.service;

import codegym.connectbe.model.BusType;

import java.util.List;

public interface IBusTypeService {
    List<BusType> getAll();
    BusType findById(int id);
}
