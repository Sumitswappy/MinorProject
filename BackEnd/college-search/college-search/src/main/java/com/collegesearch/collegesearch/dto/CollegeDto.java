package com.collegesearch.collegesearch.dto;

import com.collegesearch.collegesearch.entity.CityEntity;
import com.collegesearch.collegesearch.entity.CourseEntity;
import lombok.Data;
@Data
public class CollegeDto {
    int id;
    String College;
    CourseEntity courseEntity;
    CityEntity cityEntity;
}
