package com.collegesearch.collegesearch.service;

import com.collegesearch.collegesearch.Util.SecurityManager;
import com.collegesearch.collegesearch.entity.CollegeEntity;
import com.collegesearch.collegesearch.repository.CollegeRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Transactional
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;
    private SecurityManager securityManager;
    public List<CollegeEntity> getAllColleges() {
        return collegeRepository.findAll();
    }
    public List<CollegeEntity> getCollegesByState(String state) {
        // Implement the logic to fetch colleges by state from your repository
        return collegeRepository.findByState(state);
    }
public List<CollegeEntity> getCollegesByCityAndCourse(String city, String course) {
    return collegeRepository.findByCityAndCourse(city, course);
}
    public List<CollegeEntity> getCollegesByCourse(String course) {
        return collegeRepository.findByCourse(course);
    }
    public int getNumberOfCollegesByCourse(String courseName) {
        List<CollegeEntity> colleges = collegeRepository.findByCourse(courseName);
        return colleges.size();
    }

    public Optional<CollegeEntity> getCollegeById(int collegeId) {
        return collegeRepository.findById(collegeId);
    }

    public void saveCollege(CollegeEntity college) {
        college.setPassword(securityManager.encryptPassword(college.getPassword()));
        collegeRepository.save(college);
    }

    public void deleteCollege(int collegeId) {
        collegeRepository.deleteById(collegeId);
    }
}
