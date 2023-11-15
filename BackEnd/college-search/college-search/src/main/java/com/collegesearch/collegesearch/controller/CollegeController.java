package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.CollegeEntity;
import com.collegesearch.collegesearch.service.CollegeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(maxAge = 500)
public class CollegeController {
   private CollegeService collegeService;
   @GetMapping("get-college")
   public List<CollegeEntity> getCollege(){
       return collegeService.getCollege();
   }

   @PostMapping("add-college")
    public void addCollege(@RequestBody CollegeEntity college){
       collegeService.addCollege(college);
   }
   @GetMapping("get-filtered-college")
    public List<CollegeEntity> getFilterCollege(@RequestParam (value="cityName") String cityName, @RequestParam (value="courseName") String courseName)
   {
       return collegeService.filterCollege(cityName,courseName);
   }
}
