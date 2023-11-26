package com.collegesearch.collegesearch.entity;

import jakarta.persistence.*;
import java.util.Date;
import lombok.Data;

@Data
@Entity
@Table(name="placement")
public class PlacementEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String companyName;
    private String jobRole;
    private double salary;
    private Date placementDate;
    private double placementPercentage;

}
