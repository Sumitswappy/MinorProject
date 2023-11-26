package com.collegesearch.collegesearch.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
//@Table(name="admin-details")
public class AdminEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String firstName;
    String lastName;
    long phone;
    String email;
    String city;
    String state;
    String password;
}
