package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("get-user")
    public List<UserEntity> getUser(){
       return userService.getUser();
    }
}
