package com.example.repository;

import com.example.entity.AccCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccCodeRepository extends JpaRepository<AccCode, Long> {
    List<AccCode> findByIdOrg(String idOrg);
} 