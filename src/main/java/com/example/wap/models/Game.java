package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer team;
    private Integer opponent;
    private String score;
    @JsonManagedReference
    @OneToMany(mappedBy = "fan")
    private List<Ticket> fans;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Ticket> getFans() {
        return fans;
    }

    public void setFans(List<Ticket> fans) {
        this.fans = fans;
    }

    public Integer getTeam() { return team; }

    public void setTeam(Integer team) { this.team = team; }

    public Integer getOpponent() { return opponent; }

    public void setOpponent(Integer opponent) { this.opponent = opponent; }

    public String getScore() { return score; }

    public void setScore(String score) { this.score = score; }
}

