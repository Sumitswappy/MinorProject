package com.collegesearch.collegesearch.entity;

import jakarta.persistence.*;
import lombok.Data;
@Data
@Entity
@Table(name = "course")
public class CourseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String courseName;
}
