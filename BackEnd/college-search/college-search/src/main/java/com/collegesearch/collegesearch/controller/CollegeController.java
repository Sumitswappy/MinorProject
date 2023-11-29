package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.CollegeEntity;
import com.collegesearch.collegesearch.service.CollegeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("College")
@CrossOrigin(maxAge=500)
public class CollegeController {

    @Autowired
    private CollegeService collegeService;

    @GetMapping("get")
    public List<CollegeEntity> getAllColleges() {
        return collegeService.getAllColleges();
    }

    @GetMapping("get/{collegeId}")
    public ResponseEntity<CollegeEntity> getCollegeById(@PathVariable int collegeId) {
        return collegeService.getCollegeById(collegeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("byCourse/{course}")
    public List<CollegeEntity> getCollegesByCourse(@PathVariable String course) {
        return collegeService.getCollegesByCourse(course);
    }

    @GetMapping("byState/{state}")
    public List<CollegeEntity> getCollegesByState(@PathVariable String state) {
        return collegeService.getCollegesByState(state);
    }
@GetMapping("/get-filtered")
public List<CollegeEntity> getCollegesByCityAndCourse(
        @RequestParam(name = "city", required = false) String city,
        @RequestParam(name = "course", required = false) String course) {

    return collegeService.getCollegesByCityAndCourse(city, course);
}
    @PostMapping("add")
    public void saveCollege(@RequestBody CollegeEntity college) {
        collegeService.saveCollege(college);
    }

    @DeleteMapping("delete/{collegeId}")
    public ResponseEntity<Void> deleteCollege(@PathVariable int collegeId) {
        collegeService.deleteCollege(collegeId);
        return ResponseEntity.noContent().build();
    }
}
