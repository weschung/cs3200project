package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name = "managers")
public class Manager extends User{

    @Column(name = "team_id")
    private Integer team_id;

    @Column(name = "meeting_schedule")
    private String meeting_schedule;

    public Integer getTeam_id() {
        return team_id;
    }

    public void setTeam_id(Integer team_id) {
        this.team_id = team_id;
    }

    public String getMeeting_schedule() {
        return meeting_schedule;
    }

    public void setMeeting_schedule(String meeting_schedule) {
        this.meeting_schedule = meeting_schedule;
    }

}

