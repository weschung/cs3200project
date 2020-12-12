package com.example.wap.daos;

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
}

