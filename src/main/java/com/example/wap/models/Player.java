package com.example.wap.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String player_name;
    private Integer age;
    private String height;
    private Integer player_payment;
    private String player_bank;
    private String statistic;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "team_id")
    private Team team_player;

    @Column(name = "team_id", updatable = false, insertable = false)
    private String team_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    @JoinColumn(name = "manager_id")
    private Manager manager_player;

    public String getTeam_id() {
        return team_id;
    }

    public void setTeam_id(String team_id) {
        this.team_id = team_id;
    }

    public void setManager_player(Manager manager_player) {
        this.manager_player = manager_player;
    }

    public void setTeam_player(Team team_player) {
        this.team_player = team_player;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPlayer_name() {
        return player_name;
    }

    public void setPlayer_name(String player_name) {
        this.player_name = player_name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public Integer getPlayer_payment() {
        return player_payment;
    }

    public void setPlayer_payment(Integer player_payment) {
        this.player_payment = player_payment;
    }

    public String getPlayer_bank() {
        return player_bank;
    }

    public void setPlayer_bank(String player_bank) {
        this.player_bank = player_bank;
    }

    public String getStatistic() {
        return statistic;
    }

    public void setStatistic(String statistic) {
        this.statistic = statistic;
    }
}
