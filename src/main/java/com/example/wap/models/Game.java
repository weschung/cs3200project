package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="games")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String opponent;
    private String score;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "team", nullable = false)
    private Team team_game;

    @JsonManagedReference
    @OneToMany(mappedBy = "game")
    private List<Ticket> tickets;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public Team getTeam_game() {
        return team_game;
    }

    public void setTeam_game(Team team_game) {
        this.team_game = team_game;
    }

    public String getOpponent() {
        return opponent;
    }

    public void setOpponent(String opponent) {
        this.opponent = opponent;
    }

    public String getScore() { return score; }

    public void setScore(String score) { this.score = score; }
}

