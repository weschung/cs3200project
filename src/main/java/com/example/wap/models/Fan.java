package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "fans")
public class Fan extends User{
    private Integer team_id;
    private Boolean season_pass;
    @JsonManagedReference
    @OneToMany(mappedBy = "fan")
    private List<Ticket> games;

    public List<Ticket> getGames() { return games; }

    public void setGames(List<Ticket> games) {
        this.games = games;
    }

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
