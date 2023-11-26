package com.collegesearch.collegesearch.service;

import com.collegesearch.collegesearch.Util.SecurityManager;
import com.collegesearch.collegesearch.entity.AdminEntity;
import com.collegesearch.collegesearch.repository.AdminRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminService {
    private AdminRepository adminRepository;
    private SecurityManager securityManager;
    public void addAdmin(AdminEntity admin){
        admin.setPassword(securityManager.encryptPassword(admin.getPassword()));
        adminRepository.save(admin);
    }
}
