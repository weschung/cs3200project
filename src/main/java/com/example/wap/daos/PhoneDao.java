package com.example.wap.daos;

import com.example.wap.models.Phone;
import com.example.wap.models.User;
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
    @GetMapping("/createPhoneForUser/{uid}")
    public Phone createPhoneForUser(
            @PathVariable("uid") Integer uid) {
        User user = userRepository.findById(uid).get();
        Phone phone = new Phone();
        phone.setUserid(user);
        phone.setPrimary_p(false);
        phoneRepository.save(phone);
        return phone;
    }
    @GetMapping("/changePhoneNum/{pid}/{num_phone}")
    public Phone changePhoneNum(
            @PathVariable("pid") Integer pid,
            @PathVariable("num_phone") String num_phone){
        Phone phone = phoneRepository.findById(pid).get();
        phone.setPhone(num_phone);
        phoneRepository.save(phone);
        return phone;
    }
    @GetMapping("/changePrimaryP/{pid}/{primary_p}")
    public Phone changePrimaryP(
            @PathVariable("pid") Integer pid,
            @PathVariable("primary_p") Boolean primary_p){
        Phone phone = phoneRepository.findById(pid).get();
        phone.setPrimary_p(primary_p);
        phoneRepository.save(phone);
        return phone;
    }
}
