package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("user")
@CrossOrigin(maxAge = 500)
public class UserController {
    private UserService userService;
    @PostMapping("add")
    public void addUser(@RequestBody UserEntity user){
        userService.addUser(user);
    }

    @GetMapping("get")
    public List<UserEntity> getUser(){
       return userService.getUser();
    }

    @GetMapping("get/{id}")
    public UserEntity getUserById(@PathVariable int id){
        return userService.getUserById(id)
                .orElseThrow(() -> {
                    throw new RuntimeException("User not found");
                });

    }

    @DeleteMapping("delete/{id}")
    public void deleteUser(@PathVariable int id){userService.deleteUser(id);}

    @PutMapping("update/{id}")
    public void updateUser(@PathVariable int id, @RequestBody UserEntity user){userService.updateUser(id,user);}
}
