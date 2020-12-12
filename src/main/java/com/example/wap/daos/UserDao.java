package com.example.wap.daos;

import com.example.wap.models.User;
import com.example.wap.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserDao {
    @Autowired
    UserRepository userRepository;
    @GetMapping("/findAllUsers")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }
    @GetMapping("/findUserById/{id}")
    public User findUserById(
            @PathVariable("id") Integer id) {
        return userRepository.findById(id).get();
    }
    @GetMapping("/deleteUser/{id}")
    public void deleteUser(
            @PathVariable("id") Integer id) {
        userRepository.deleteById(id);
    }
    @GetMapping("/createUser")
    public User createUser() {
        User user = new User();
        user.setUsername("New User");
        return userRepository.save(user);
    }
    @GetMapping("/renameUser/{id}/{newUsername}")
    public User renameUser(
            @PathVariable("id") Integer id,
            @PathVariable("newUsername") String newUsername) {
        User user = userRepository.findById(id).get();
        user.setUsername(newUsername);
        return userRepository.save(user);
    }

    @GetMapping("/changePassword/{id}/{newPassword}")
    public User changePassword(
            @PathVariable("id") Integer id,
            @PathVariable("newPassword") String newPassword) {
        User user = userRepository.findById(id).get();
        user.setPassword(newPassword);
        return userRepository.save(user);
    }

    @GetMapping("/changeDob/{id}/{newDob}")
    public User changeDob(
            @PathVariable("id") Integer id,
            @PathVariable("newDob") String newDob) {
        User user = userRepository.findById(id).get();
        user.setDob(newDob);
        return userRepository.save(user);
    }

    @GetMapping("/changeFirst/{id}/{newFirst}")
    public User changeFirst(
            @PathVariable("id") Integer id,
            @PathVariable("newFirst") String newFirst) {
        User user = userRepository.findById(id).get();
        user.setFirst_name(newFirst);
        return userRepository.save(user);
    }

    @GetMapping("/changeLast/{id}/{newLast}")
    public User changeLast(
            @PathVariable("id") Integer id,
            @PathVariable("newLast") String newLast) {
        User user = userRepository.findById(id).get();
        user.setLast_name(newLast);
        return userRepository.save(user);
    }

    @GetMapping("/changeEmail/{id}/{newEmail}")
    public User changeEmail(
            @PathVariable("id") Integer id,
            @PathVariable("newEmail") String newEmail) {
        User user = userRepository.findById(id).get();
        user.setEmail(newEmail);
        return userRepository.save(user);
    }
}
