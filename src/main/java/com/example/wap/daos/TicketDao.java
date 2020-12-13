package com.example.wap.daos;

import com.example.wap.models.Coach;
import com.example.wap.models.Ticket;
import com.example.wap.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TicketDao {
    @Autowired
    TicketRepository ticketRepository;
    @GetMapping("/findAllTickets")
    public Iterable<Ticket> findAllTickets() {
        return ticketRepository.findAll();
    }
    @GetMapping("/findTicketById/{id}")
    public Ticket findTicketById(
            @PathVariable("id") Integer id) {
        return ticketRepository.findById(id).get();
    }
    @GetMapping("/deleteTicket/{id}")
    public void deleteTicket(
            @PathVariable("id") Integer id) {
        ticketRepository.deleteById(id);
    }
    @GetMapping("/createTicket")
    public Ticket createTicket() {
        Ticket ticket = new Ticket();
        return ticketRepository.save(ticket);
    }

    @GetMapping("/changePrice/{id}/{newPrice}")
    public Ticket changePrice(
            @PathVariable("id") Integer id,
            @PathVariable("newPrice") Float newPrice) {
        Ticket ticket = ticketRepository.findById(id).get();
        ticket.setPrice(newPrice);
        return ticketRepository.save(ticket);
    }

    @GetMapping("/changeSeat/{id}/{newSeat}")
    public Ticket changeSeat(
            @PathVariable("id") Integer id,
            @PathVariable("newSeat") String newSeat) {
        Ticket ticket = ticketRepository.findById(id).get();
        ticket.setSeat(newSeat);
        return ticketRepository.save(ticket);
    }

    @GetMapping("/changeDate/{id}/{newDate}")
    public Ticket changeDate(
            @PathVariable("id") Integer id,
            @PathVariable("newDate") String newDate) {
        Ticket ticket = ticketRepository.findById(id).get();
        ticket.setDate(newDate);
        return ticketRepository.save(ticket);
    }

    @GetMapping("/changeTime/{id}/{newTime}")
    public Ticket changeTime(
            @PathVariable("id") Integer id,
            @PathVariable("newTime") String newTime) {
        Ticket ticket = ticketRepository.findById(id).get();
        ticket.setTime(newTime);
        return ticketRepository.save(ticket);
    }
}

