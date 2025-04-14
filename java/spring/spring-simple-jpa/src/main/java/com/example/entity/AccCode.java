package com.example.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ACC_CODE")
public class AccCode implements Serializable {
    
    @Id
    @Column(name = "SEQNO")
    private Long seqno;
    
    @Column(name = "ID_ORG", nullable = false, length = 8)
    private String idOrg;
    
    @Column(name = "ID_ACCCD", nullable = false, length = 7)
    private String idAcccd;
    
    @Column(name = "FL_ACCCD", length = 1)
    private String flAcccd;
    
    @Column(name = "TTL_ACCCD", length = 30)
    private String ttlAcccd;
    
    @Column(name = "TTL_ACCCD_E", length = 50)
    private String ttlAcccdE;
    
    @Column(name = "ON_DR_CR", length = 1)
    private String onDrCr;
    
    @Column(name = "ON_BS_PL", length = 1)
    private String onBsPl;
    
    @Column(name = "ON_CODE", length = 1)
    private String onCode;
    
    @Column(name = "FL_OPTN_S", length = 15)
    private String flOptnS;
    
    @Column(name = "ON_CNCT_S", length = 10)
    private String onCnctS;
    
    @Column(name = "ID_ACCCD_U", length = 7)
    private String idAcccdU;
    
    @Column(name = "TP_BALANCE", length = 1)
    private String tpBalance;
    
    @Column(name = "ON_SEL", length = 1)
    private String onSel;
    
    @Column(name = "ID_ACCCD_O", length = 7)
    private String idAcccdO;
    
    @Column(name = "ON_IMPR", length = 1)
    private String onImpr;
    
    @Column(name = "ID_ACCCD_IM", length = 7)
    private String idAcccdIm;
    
    @Column(name = "ON_CIO", length = 1)
    private String onCio;
    
    @Column(name = "ON_EX", length = 1)
    private String onEx;
    
    @Column(name = "CIO_DR_CR", length = 1)
    private String cioDrCr;
    
    @Column(name = "TP_CIO", length = 1)
    private String tpCio;
    
    @Column(name = "ASSIGN_CODE1", length = 6)
    private String assignCode1;
    
    @Column(name = "ASSIGN_CODE2", length = 6)
    private String assignCode2;
    
    @Column(name = "ASSIGN_CODE3", length = 3)
    private String assignCode3;
    
    @Column(name = "TP_INOUT", length = 2)
    private String tpInout;

    // Getters and Setters
    public Long getSeqno() {
        return seqno;
    }

    public void setSeqno(Long seqno) {
        this.seqno = seqno;
    }

    public String getIdOrg() {
        return idOrg;
    }

    public void setIdOrg(String idOrg) {
        this.idOrg = idOrg;
    }

    public String getIdAcccd() {
        return idAcccd;
    }

    public void setIdAcccd(String idAcccd) {
        this.idAcccd = idAcccd;
    }

    public String getFlAcccd() {
        return flAcccd;
    }

    public void setFlAcccd(String flAcccd) {
        this.flAcccd = flAcccd;
    }

    public String getTtlAcccd() {
        return ttlAcccd;
    }

    public void setTtlAcccd(String ttlAcccd) {
        this.ttlAcccd = ttlAcccd;
    }

    public String getTtlAcccdE() {
        return ttlAcccdE;
    }

    public void setTtlAcccdE(String ttlAcccdE) {
        this.ttlAcccdE = ttlAcccdE;
    }

    public String getOnDrCr() {
        return onDrCr;
    }

    public void setOnDrCr(String onDrCr) {
        this.onDrCr = onDrCr;
    }

    public String getOnBsPl() {
        return onBsPl;
    }

    public void setOnBsPl(String onBsPl) {
        this.onBsPl = onBsPl;
    }

    public String getOnCode() {
        return onCode;
    }

    public void setOnCode(String onCode) {
        this.onCode = onCode;
    }

    public String getFlOptnS() {
        return flOptnS;
    }

    public void setFlOptnS(String flOptnS) {
        this.flOptnS = flOptnS;
    }

    public String getOnCnctS() {
        return onCnctS;
    }

    public void setOnCnctS(String onCnctS) {
        this.onCnctS = onCnctS;
    }

    public String getIdAcccdU() {
        return idAcccdU;
    }

    public void setIdAcccdU(String idAcccdU) {
        this.idAcccdU = idAcccdU;
    }

    public String getTpBalance() {
        return tpBalance;
    }

    public void setTpBalance(String tpBalance) {
        this.tpBalance = tpBalance;
    }

    public String getOnSel() {
        return onSel;
    }

    public void setOnSel(String onSel) {
        this.onSel = onSel;
    }

    public String getIdAcccdO() {
        return idAcccdO;
    }

    public void setIdAcccdO(String idAcccdO) {
        this.idAcccdO = idAcccdO;
    }

    public String getOnImpr() {
        return onImpr;
    }

    public void setOnImpr(String onImpr) {
        this.onImpr = onImpr;
    }

    public String getIdAcccdIm() {
        return idAcccdIm;
    }

    public void setIdAcccdIm(String idAcccdIm) {
        this.idAcccdIm = idAcccdIm;
    }

    public String getOnCio() {
        return onCio;
    }

    public void setOnCio(String onCio) {
        this.onCio = onCio;
    }

    public String getOnEx() {
        return onEx;
    }

    public void setOnEx(String onEx) {
        this.onEx = onEx;
    }

    public String getCioDrCr() {
        return cioDrCr;
    }

    public void setCioDrCr(String cioDrCr) {
        this.cioDrCr = cioDrCr;
    }

    public String getTpCio() {
        return tpCio;
    }

    public void setTpCio(String tpCio) {
        this.tpCio = tpCio;
    }

    public String getAssignCode1() {
        return assignCode1;
    }

    public void setAssignCode1(String assignCode1) {
        this.assignCode1 = assignCode1;
    }

    public String getAssignCode2() {
        return assignCode2;
    }

    public void setAssignCode2(String assignCode2) {
        this.assignCode2 = assignCode2;
    }

    public String getAssignCode3() {
        return assignCode3;
    }

    public void setAssignCode3(String assignCode3) {
        this.assignCode3 = assignCode3;
    }

    public String getTpInout() {
        return tpInout;
    }

    public void setTpInout(String tpInout) {
        this.tpInout = tpInout;
    }
} 