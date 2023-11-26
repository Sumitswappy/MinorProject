package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.AdminEntity;
import com.collegesearch.collegesearch.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("admin")
@CrossOrigin(maxAge = 500)
public class AdminController {
    private AdminService adminService;
    @PostMapping("add")
    public void addUser(@RequestBody AdminEntity admin){
        adminService.addAdmin(admin);
    }
}
