package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "fans")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Fan extends User{

    private Boolean season_pass;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "team_id")
    private Team team_fan;

    @Column(name = "team_id", updatable = false, insertable = false)
    private String team_id;

    @JsonManagedReference
    @OneToMany(mappedBy = "ticket_fan")
    private List<Ticket> tickets;

    public Boolean getSeason_pass() {
        return season_pass;
    }

    public void setSeason_pass(Boolean season_pass) {
        this.season_pass = season_pass;
    }

    public Team getTeam_fan() {
        return team_fan;
    }

    public void setTeam_fan(Team team_fan) {
        this.team_fan = team_fan;
    }

    public String getTeam_id() {
        return team_id;
    }

    public void setTeam_id(String team_id) {
        this.team_id = team_id;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }
}
