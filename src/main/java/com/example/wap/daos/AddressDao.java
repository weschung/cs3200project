package com.example.wap.daos;

import com.example.wap.models.Address;
import com.example.wap.models.User;
import com.example.wap.repositories.AddressRepository;
import com.example.wap.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AddressDao {
    @Autowired
    AddressRepository addressRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping("/findAllAddresses")
    public Iterable<Address> findAllAddresses() {
        return addressRepository.findAll();
    }
    @GetMapping("/findAddressById/{id}")
    public Address findAddressById(
            @PathVariable("id") Integer id) {
        return addressRepository.findById(id).get();
    }
    @GetMapping("/findAddressByUserId/{user_id}")
    public List<Address> findAddressByUserId(
            @PathVariable("user_id") Integer user_id) {
        return userRepository.findById(user_id).get().getAddresses();
    }
    @GetMapping("/deleteAddress/{id}")
    public void deleteAddress(
            @PathVariable("id") Integer id) {
        addressRepository.deleteById(id);
    }
    @GetMapping("/createAddressForUser/{uid}")
    public Address createAddressForUser(
            @PathVariable("uid") Integer uid) {
        User user = userRepository.findById(uid).get();
        Address address = new Address();
        address.setUserid(user);
        address.setPrimary_p(false);
        addressRepository.save(address);
        return address;
    }
    @GetMapping("/changeAddressStreet/{aid}/{street_name}")
    public Address changeAddressStreet(
            @PathVariable("aid") Integer aid,
            @PathVariable("street_name") String street_name){
        Address address = addressRepository.findById(aid).get();
        address.setStreet(street_name);
        addressRepository.save(address);
        return address;
    }
    @GetMapping("/changeAddressApartment/{aid}/{apartment_name}")
    public Address changeAddressApartment(
            @PathVariable("aid") Integer aid,
            @PathVariable("apartment_name") String apartment_name){
        Address address = addressRepository.findById(aid).get();
        address.setApartment(apartment_name);
        addressRepository.save(address);
        return address;
    }
    @GetMapping("/changeAddressCity/{aid}/{city_name}")
    public Address changeAddressCity(
            @PathVariable("aid") Integer aid,
            @PathVariable("city_name") String city_name){
        Address address = addressRepository.findById(aid).get();
        address.setCity(city_name);
        addressRepository.save(address);
        return address;
    }
    @GetMapping("/changeAddressZip/{aid}/{zip}")
    public Address changeAddressZip(
            @PathVariable("aid") Integer aid,
            @PathVariable("zip") String zip){
        Address address = addressRepository.findById(aid).get();
        address.setZip(zip);
        addressRepository.save(address);
        return address;
    }
    @GetMapping("/changeAddressPrimaryP/{aid}/{primary_p}")
    public Address changeAddressPrimaryP(
            @PathVariable("aid") Integer aid,
            @PathVariable("primary_p") Boolean primary_p){
        Address address = addressRepository.findById(aid).get();
        address.setPrimary_p(primary_p);
        addressRepository.save(address);
        return address;
    }
}
