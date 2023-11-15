package com.collegesearch.collegesearch.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "college")
public class CollegeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String College;
    @ManyToOne
    CourseEntity courseEntity;
    @ManyToOne
    CityEntity cityEntity;
}
