package com.example.controller;

import com.example.entity.AccCode;
import com.example.service.AccCodeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/api/acc-codes")
public class AccCodeController {
    
    private static final Logger logger = LoggerFactory.getLogger(AccCodeController.class);
    
    @Autowired
    private AccCodeService accCodeService;
    
    @RequestMapping(value = "/org/{orgId}", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<List<AccCode>> getAccCodesByOrgId(@PathVariable String orgId) {
        logger.info("Request received for orgId: {}", orgId);
        try {
            List<AccCode> accCodes = accCodeService.getAccCodesByOrgId(orgId);
            logger.info("Found {} acc codes for orgId: {}", accCodes.size(), orgId);
            return new ResponseEntity<List<AccCode>>(accCodes, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error occurred while fetching acc codes", e);
            return new ResponseEntity<List<AccCode>>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
} 