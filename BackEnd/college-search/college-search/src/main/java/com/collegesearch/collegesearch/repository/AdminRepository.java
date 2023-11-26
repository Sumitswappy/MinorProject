package com.collegesearch.collegesearch.repository;

import com.collegesearch.collegesearch.entity.AdminEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface AdminRepository extends JpaRepository<AdminEntity,Integer> {
    List<AdminEntity>findByEmail(String Email);
}
