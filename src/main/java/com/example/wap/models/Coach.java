package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name = "coaches")
public class Coach{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer team_id;
    private Integer manager_id;
    private String coach_name;
    private String strategy;
    private String practice_schedule;
    private Integer coach_payment;
    private String coach_bank;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTeam_id() {
        return team_id;
    }

    public void setTeam_id(Integer team_id) {
        this.team_id = team_id;
    }

    public Integer getManager_id() {
        return manager_id;
    }

    public void setManager_id(Integer manager_id) {
        this.manager_id = manager_id;
    }

    public String getCoach_name() {
        return coach_name;
    }

    public void setCoach_name(String coach_name) {
        this.coach_name = coach_name;
    }

    public String getStrategy() {
        return strategy;
    }

    public void setStrategy(String strategy) {
        this.strategy = strategy;
    }

    public String getPractice_schedule() {
        return practice_schedule;
    }

    public void setPractice_schedule(String practice_schedule) {
        this.practice_schedule = practice_schedule;
    }

    public Integer getCoach_payment() {
        return coach_payment;
    }

    public void setCoach_payment(Integer coach_payment) {
        this.coach_payment = coach_payment;
    }

    public String getCoach_bank() {
        return coach_bank;
    }

    public void setCoach_bank(String coach_bank) {
        this.coach_bank = coach_bank;
    }
}
