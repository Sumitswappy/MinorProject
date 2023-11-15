package com.collegesearch.collegesearch.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="city")
public class CityEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String cityName;
}
