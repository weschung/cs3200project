package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "managers")
public class Manager extends User{
    private String meeting_schedule;

    @OneToMany(mappedBy = "manager_player")
    @JsonManagedReference
    private List<Player> players;

    @OneToMany(mappedBy = "manager_coach")
    @JsonManagedReference
    private List<Coach> coaches;

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Coach> getCoaches() {
        return coaches;
    }

    public void setCoaches(List<Coach> coaches) {
        this.coaches = coaches;
    }

    public String getMeeting_schedule() {
        return meeting_schedule;
    }

    public void setMeeting_schedule(String meeting_schedule) {
        this.meeting_schedule = meeting_schedule;
    }

}

