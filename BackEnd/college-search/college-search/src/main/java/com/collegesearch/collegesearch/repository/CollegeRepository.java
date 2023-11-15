package com.collegesearch.collegesearch.repository;

import com.collegesearch.collegesearch.entity.CollegeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface CollegeRepository extends JpaRepository<CollegeEntity,Integer> {
    List<CollegeEntity>findByCityEntityCityNameAndCourseEntityCourseName(String cityName,String courseName);

}
