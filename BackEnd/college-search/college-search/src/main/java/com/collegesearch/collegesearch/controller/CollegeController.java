package com.collegesearch.collegesearch.controller;

import com.collegesearch.collegesearch.entity.CollegeEntity;
import com.collegesearch.collegesearch.entity.UserEntity;
import com.collegesearch.collegesearch.service.CollegeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("College")
@CrossOrigin(maxAge = 500)
public class CollegeController {
   private CollegeService collegeService;
   @GetMapping("get")
   public List<CollegeEntity> getCollege(){
       return collegeService.getCollege();
   }

   @PostMapping("add")
    public void addCollege(@RequestBody CollegeEntity college){
       collegeService.addCollege(college);
   }
   @GetMapping("get-filtered")
    public List<CollegeEntity> getFilterCollege(@RequestParam (value="cityName") String cityName, @RequestParam (value="courseName") String courseName)
   {
       return collegeService.filterCollege(cityName,courseName);
   }
   @GetMapping("get/{id}")
   public CollegeEntity getCollegeById(@PathVariable int id){
       return collegeService.getCollegeById(id)
               .orElseThrow(() -> {
                   throw new RuntimeException("College not found");
               });

   }
   @DeleteMapping("delete/{id}")
   public void deleteCollege(@PathVariable int id){collegeService.deleteCollege(id);}
}
