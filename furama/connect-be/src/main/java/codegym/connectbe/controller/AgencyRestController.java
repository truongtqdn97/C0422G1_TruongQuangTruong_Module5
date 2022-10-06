package codegym.connectbe.controller;

import codegym.connectbe.model.Agency;
import codegym.connectbe.service.IAgencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "agencies")
public class AgencyRestController {
    @Autowired
    private IAgencyService iAgencyService;

    @GetMapping(value = "")
    public ResponseEntity<List<Agency>> getAgencyList(){
        List<Agency> agencies = this.iAgencyService.getAll();
        if (agencies.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(agencies, HttpStatus.OK);
    }
}
