package com.example.service;

import com.example.entity.AccCode;
import com.example.repository.AccCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccCodeService {
    
    @Autowired
    private AccCodeRepository accCodeRepository;
    
    public List<AccCode> getAccCodesByOrgId(String orgId) {
        return accCodeRepository.findByIdOrg(orgId);
    }
} 