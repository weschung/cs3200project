package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String team_name;
    private Integer yr_founded;
    private String conference;
    private String record;
    private String standing;
    private String game_schedule;

    @OneToMany(mappedBy = "team_player")
    @JsonManagedReference
    private List<Player> players;

    @OneToMany(mappedBy = "team_coach")
    @JsonManagedReference
    private List<Coach> coaches;

    @OneToMany(mappedBy = "team_fan")
    @JsonManagedReference
    private List<Fan> fans;

    @OneToMany(mappedBy = "team_game")
    @JsonManagedReference
    private List<Game> games;

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

    public List<Fan> getFans() {
        return fans;
    }

    public void setFans(List<Fan> fans) {
        this.fans = fans;
    }

    public List<Game> getGames() {
        return games;
    }

    public void setGames(List<Game> games) {
        this.games = games;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public Integer getYr_founded() {
        return yr_founded;
    }

    public void setYr_founded(Integer yr_founded) {
        this.yr_founded = yr_founded;
    }

    public String getConference() {
        return conference;
    }

    public void setConference(String conference) {
        this.conference = conference;
    }

    public String getRecord() {
        return record;
    }

    public void setRecord(String record) {
        this.record = record;
    }

    public String getStanding() {
        return standing;
    }

    public void setStanding(String standing) {
        this.standing = standing;
    }

    public String getGame_schedule() {
        return game_schedule;
    }

    public void setGame_schedule(String game_schedule) {
        this.game_schedule = game_schedule;
    }
}
