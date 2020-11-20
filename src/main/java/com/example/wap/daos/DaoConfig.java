package com.example.wap.daos;

public class DaoConfig {
    private String host;
    private String schema;
    private String username;
    private String password;

    public DaoConfig() {
    }

    public DaoConfig(String host, String schema, String username, String password) {
        this.host = host;
        this.schema = schema;
        this.username = username;
        this.password = password;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public String getSchema() {
        return schema;
    }

    public void setSchema(String schema) {
        this.schema = schema;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
