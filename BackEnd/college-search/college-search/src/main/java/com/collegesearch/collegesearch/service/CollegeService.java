package com.collegesearch.collegesearch.service;

import com.collegesearch.collegesearch.entity.CollegeEntity;
import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.repository.CollegeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CollegeService {
    private CollegeRepository collegeRepository;
    public List<CollegeEntity> getCollege(){
        List<CollegeEntity> clgdet=new ArrayList<CollegeEntity>(collegeRepository.findAll());
        return clgdet;
    }

    public List<CollegeEntity> filterCollege(String cityName, String courseName){
        return collegeRepository.findByCityEntityCityNameAndCourseEntityCourseName(cityName,courseName);
    }
    public Optional<CollegeEntity> getCollegeById(int id) {
        return collegeRepository.findById(id);
    }
    public void addCollege(CollegeEntity college){
        collegeRepository.save(college);
    }
    public void deleteCollege(int id){ collegeRepository.deleteById(id);}
}
