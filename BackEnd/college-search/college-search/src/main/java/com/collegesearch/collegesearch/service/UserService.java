package com.collegesearch.collegesearch.service;

import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private UserRepository userRepository;
    public void addUser(UserEntity user){
        userRepository.save(user);
    }
    public List<UserEntity> getUser(){
        List<UserEntity> usrdet=new ArrayList<UserEntity>(userRepository.findAll());
        return usrdet;
    }
    public Optional<UserEntity> getUserById(int id) {
        return userRepository.findById(id);
    }
    public void deleteUser(int id){ userRepository.deleteById(id);}
    public void updateUser(int id,UserEntity user){
        if(userRepository.existsById(id)){
            user.setId(id);
            userRepository.save(user);
        }
    }

}
