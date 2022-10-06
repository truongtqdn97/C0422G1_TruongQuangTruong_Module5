package codegym.connectbe.service.impl;

import codegym.connectbe.model.Agency;
import codegym.connectbe.repository.IAgencyRepository;
import codegym.connectbe.service.IAgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AgencyService implements IAgencyService {
    @Autowired
    private IAgencyRepository iAgencyRepository;

    @Override
    public List<Agency> getAll() {
        return this.iAgencyRepository.findAll();
    }

    @Override
    public Agency findById(int id) {
        return this.iAgencyRepository.findById(id).orElse(null);
    }
}
