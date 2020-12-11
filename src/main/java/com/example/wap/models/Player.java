package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name = "players")
public class Player{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer team_id;
    private Integer manager_id;
    private String player_name;
    private Integer age;
    private Double height;
    private Integer player_payment;
    private String player_bank;
    private String statistic;

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

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
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
