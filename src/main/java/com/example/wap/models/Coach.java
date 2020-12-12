package com.example.wap.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "coaches")
public class Coach{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String coach_name;
    private String strategy;
    private String practice_schedule;
    private Integer coach_payment;
    private String coach_bank;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "team_id")
    private Team team_coach;

    @Column(name = "team_id", updatable = false, insertable = false)
    private String team_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "manager_id")
    private Manager manager_coach;

    public String getTeam_id() {
        return team_id;
    }

    public void setTeam_id(String team_id) {
        this.team_id = team_id;
    }

    public void setManager_coach(Manager manager_coach) {
        this.manager_coach = manager_coach;
    }

    public void setTeam_coach(Team team_coach) {
        this.team_coach = team_coach;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
