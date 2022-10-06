package codegym.connectbe.service;

import codegym.connectbe.model.Agency;

import java.util.List;

public interface IAgencyService {
    List<Agency> getAll();
    Agency findById(int id);
}
