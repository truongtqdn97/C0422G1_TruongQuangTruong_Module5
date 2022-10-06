package codegym.connectbe.controller;

import codegym.connectbe.model.BusType;
import codegym.connectbe.service.IBusTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "bustypes")
public class BusTypeRestController {
    @Autowired
    private IBusTypeService iBusTypeService;

    @GetMapping("")
    public ResponseEntity<List<BusType>> getBusTypeList(){
        List<BusType> busTypes = this.iBusTypeService.getAll();
        if (busTypes.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(busTypes, HttpStatus.OK);
    }
}
