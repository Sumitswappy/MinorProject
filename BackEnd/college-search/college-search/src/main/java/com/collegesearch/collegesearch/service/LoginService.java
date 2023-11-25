package com.collegesearch.collegesearch.service;

import com.collegesearch.collegesearch.Model.LoginModel;
import com.collegesearch.collegesearch.Util.SecurityManager;
import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@AllArgsConstructor
public class LoginService {
    UserService userService;
    UserRepository userRepository;
    SecurityManager securityManager;

    public Boolean checkLogin(LoginModel loginModel){
        UserEntity user=userRepository.findByEmail(loginModel.getUserName()).stream().findFirst().orElseThrow();
        return securityManager.checkPassword(loginModel.getPassword(),user.getPassword());
    }
}
