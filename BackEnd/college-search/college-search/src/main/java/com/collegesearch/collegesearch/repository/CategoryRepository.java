package com.collegesearch.collegesearch.repository;

import com.collegesearch.collegesearch.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity, Integer> {
    @Query("SELECT COUNT(c) FROM CategoryEntity c " +
            "JOIN c.categoryCourses cc " +
            "JOIN cc.college co " +
            "WHERE c.category = :categoryName")
    int countCollegesByCategoryName(@Param("categoryName") String categoryName);

}

