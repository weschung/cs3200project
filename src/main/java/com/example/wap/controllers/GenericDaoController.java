package com.example.wap.controllers;

import com.example.wap.daos.DaoConfig;
import com.example.wap.daos.GenericDao;
import net.minidev.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class GenericDaoController {
    @Autowired
    GenericDao dao;
    @PostMapping("/api/generic/{table}")
    public JSONArray findAll(
            @PathVariable("table") String table,
            @RequestBody DaoConfig config
    ) throws SQLException {
        return dao.findAll(config, table);
    }
}
