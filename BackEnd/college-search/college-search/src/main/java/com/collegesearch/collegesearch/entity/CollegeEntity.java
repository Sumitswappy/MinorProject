package com.collegesearch.collegesearch.entity;

import java.util.Set;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "college")
public class CollegeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String contactName;
    private Long phoneNumber;
    private String email;
    private String password;
    private String city;
    private String state;
    private String affiliation;
    private String certification;
    private Long establishmentYear;

    @ManyToMany
    @JoinTable(
            name = "college_course",
            joinColumns = @JoinColumn(name = "college_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<CourseEntity> collegeCourses;

    // getters and setters
}
