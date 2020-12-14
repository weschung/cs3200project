package com.example.wap.daos;

import com.example.wap.models.Phone;
import com.example.wap.repositories.PhoneRepository;
import com.example.wap.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PhoneDao {
    @Autowired
    PhoneRepository phoneRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/findAllPhones")
    public Iterable<Phone> findAllPhones() {
        return phoneRepository.findAll();
    }
    @GetMapping("/findPhoneById/{id}")
    public Phone findPhoneById(
            @PathVariable("id") Integer id) {
        return phoneRepository.findById(id).get();
    }
    @GetMapping("/findPhoneByUserId/{user_id}")
    public List<Phone> findPhoneByUserId(
            @PathVariable("user_id") Integer user_id) {
        return userRepository.findById(user_id).get().getPhones();
    }
    @GetMapping("/deletePhone/{id}")
    public void deletePhone(
            @PathVariable("id") Integer id) {
        phoneRepository.deleteById(id);
    }
    @GetMapping("/createPhone")
    public Phone createPhone() {
        Phone phone = new Phone();
        phone.setPhone("000000000");
        return phoneRepository.save(phone);
    }
}
