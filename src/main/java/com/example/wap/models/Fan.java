package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name = "fans")
public class Fan extends User{

    @Column(name = "team_id")
    private Integer team_id;

    @Column(name = "season_pass")
    private Boolean season_pass;

    public Integer getTeam_id() {
        return team_id;
    }

    public void setTeam_id(Integer team_id) {
        this.team_id = team_id;
    }

    public Boolean getSeason_pass() {
        return season_pass;
    }

    public void setSeason_pass(Boolean season_pass) {
        this.season_pass = season_pass;
    }

}
