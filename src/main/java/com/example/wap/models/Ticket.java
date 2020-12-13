package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "game_id")
    private Game ticket_game;

    @Column(name = "game_id", updatable = false, insertable = false)
    private Integer ticket_game_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "fan_id")
    private Fan ticket_fan;

    @Column(name = "fan_id", updatable = false, insertable = false)
    private Integer ticket_fan_id;

    private Float price;
    private String seat;
    private String date;
    private String time;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Game getTicket_game() {
        return ticket_game;
    }

    public void setTicket_game(Game ticket_game) {
        this.ticket_game = ticket_game;
    }

    public Integer getTicket_game_id() {
        return ticket_game_id;
    }

    public void setTicket_game_id(Integer ticket_game_id) {
        this.ticket_game_id = ticket_game_id;
    }

    public Fan getTicket_fan() {
        return ticket_fan;
    }

    public void setTicket_fan(Fan ticket_fan) {
        this.ticket_fan = ticket_fan;
    }

    public Integer getTicket_fan_id() {
        return ticket_fan_id;
    }

    public void setTicket_fan_id(Integer ticket_fan_id) {
        this.ticket_fan_id = ticket_fan_id;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getSeat() {
        return seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}