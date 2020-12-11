package com.example.wap.repositories;

import com.example.wap.models.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository
        extends CrudRepository<Ticket, Integer> {
}
