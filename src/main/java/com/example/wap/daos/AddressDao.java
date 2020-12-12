package com.example.wap.daos;

import com.example.wap.models.Address;
import com.example.wap.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressDao {
    @Autowired
    AddressRepository addressRepository;
    @GetMapping("/findAllAddresses")
    public Iterable<Address> findAllAddresses() {
        return addressRepository.findAll();
    }
    @GetMapping("/findAddressById/{id}")
    public Address findAddressById(
            @PathVariable("id") Integer id) {
        return addressRepository.findById(id).get();
    }
    @GetMapping("/deleteAddress/{id}")
    public void deleteAddress(
            @PathVariable("id") Integer id) {
        addressRepository.deleteById(id);
    }
    @GetMapping("/createAddress")
    public Address createAddress() {
        Address address = new Address();
        return addressRepository.save(address);
    }
}
