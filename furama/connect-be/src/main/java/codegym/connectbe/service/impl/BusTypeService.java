package codegym.connectbe.service.impl;

import codegym.connectbe.model.BusType;
import codegym.connectbe.repository.IBusTypeRepository;
import codegym.connectbe.service.IBusTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BusTypeService implements IBusTypeService {
    @Autowired
    private IBusTypeRepository iBusTypeRepository;

    @Override
    public List<BusType> getAll() {
        return this.iBusTypeRepository.findAll();
    }

    @Override
    public BusType findById(int id) {
        return this.iBusTypeRepository.findById(id).orElse(null);
    }
}
