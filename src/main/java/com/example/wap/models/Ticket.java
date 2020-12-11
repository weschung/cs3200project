package com.example.wap.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="tickets")
@IdClass(TicketId.class)
public class Ticket {
    @Id
    @JsonBackReference
    @ManyToOne
    @JoinColumn
            (name="fan_id", referencedColumnName="id")
    private Fan fan;

    @Id
    @JsonBackReference
    @ManyToOne
    @JoinColumn
            (name="game_id", referencedColumnName="id")
    private Game game;

    private Float price;
    private String seat;
    private String date;
    private String time;

    public Fan getFan() {
        return fan;
    }

    public void setFan(Fan fan) {
        this.fan = fan;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
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