package com.example.wap.daos;

import com.example.wap.models.Phone;
import com.example.wap.repositories.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhoneDao {
    @Autowired
    PhoneRepository phoneRepository;
    @GetMapping("/findAllPhones")
    public Iterable<Phone> findAllPhones() {
        return phoneRepository.findAll();
    }
    @GetMapping("/findPhoneById/{id}")
    public Phone findPhoneById(
            @PathVariable("id") Integer id) {
        return phoneRepository.findById(id).get();
    }
    @GetMapping("/deletePhone/{id}")
    public void deletePhone(
            @PathVariable("id") Integer id) {
        phoneRepository.deleteById(id);
    }
    @GetMapping("/createPhone")
    public Phone createPhone() {
        Phone phone = new Phone();
        return phoneRepository.save(phone);
    }
}
