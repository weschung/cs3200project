package com.example.wap.models;

import java.io.Serializable;
import java.util.Objects;

public class TicketId implements Serializable {
    private Integer fan;
    private Integer game;

    public Integer getFan() {
        return fan;
    }

    public void setFan(Integer fan) {
        this.fan = fan;
    }

    public Integer getGame() {
        return game;
    }

    public void setGame(Integer game) {
        this.game = game;
    }

    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TicketId ticketId = (TicketId) o;
        return Objects.equals(fan, ticketId.fan) && Objects.equals(game, ticketId.game);
    }

    public int hashCode() {
        return Objects.hash(fan, game);
    }
}


