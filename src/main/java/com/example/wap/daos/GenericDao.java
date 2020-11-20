package com.example.wap.daos;

import java.sql.*;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class GenericDao {
    final static String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    String host = "localhost:3306";
    String schema = "YOUR_SCHEMA";
    final static String CONFIG = "serverTimezone=UTC";
    String dbUrl = "jdbc:mysql://"+ host +"/"+ schema +"?"+CONFIG;

    String username = "a3";
    String password = "a3";

    String findAllSql = "SELECT * FROM TABLE";
    String findByIdSql = null;
    String createSql = null;
    String deleteSql = null;
    String updateSql = null;

    Connection connection = null;
    PreparedStatement findAllStmt = null;
    PreparedStatement findByIdStmt = null;
    PreparedStatement createStmt = null;
    PreparedStatement deleteStmt = null;
    PreparedStatement updateStmt = null;

    public Connection getConnection(
            String host,
            String schema,
            String username,
            String password) {
        if(connection != null)
            return connection;
        dbUrl = "jdbc:mysql://"+host+"/"+schema+"?"+CONFIG;
        try {
            Class.forName(JDBC_DRIVER);
            connection = DriverManager.getConnection(dbUrl, username, password);
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public String getSchema(DaoConfig config) throws SQLException {
        Connection connection = getConnection(
                config.getHost(), config.getSchema(), config.getUsername(), config.getPassword());
        return connection.getSchema();
    }

    public JSONArray findAll(
            DaoConfig config,
            String table) throws SQLException {
        Connection connection = getConnection(
                config.getHost(), config.getSchema(), config.getUsername(), config.getPassword());
        if(findAllStmt == null)
            findAllStmt = connection.prepareStatement(findAllSql.replace("TABLE", table));
        ResultSet resultSet = findAllStmt.executeQuery();
        ResultSetMetaData resultSetMetaData = resultSet.getMetaData();
        JSONArray array = new JSONArray();
        while(resultSet.next()) {
            int numberOfColumns = resultSetMetaData.getColumnCount();
            JSONObject object = new JSONObject();
            for(int i=1; i <= numberOfColumns; i++) {
                String columnName = resultSetMetaData.getColumnName(i);
                int columnType = resultSetMetaData.getColumnType(i);
                switch (columnType) {
                    case Types.VARCHAR:
                        String value = resultSet.getString(columnName);
                        object.put(columnName, value);
                        break;
                    case Types.INTEGER:
                        Integer intValue = resultSet.getInt(columnName);
                        object.put(columnName, intValue);
                        break;
                    case Types.FLOAT:
                        Float floatValue = resultSet.getFloat(columnName);
                        object.put(columnName, floatValue);
                        break;
                    case Types.DOUBLE:
                        Double doubleValue = resultSet.getDouble(columnName);
                        object.put(columnName, doubleValue);
                        break;
                    case Types.DATE:
                        Date dateValue = resultSet.getDate(columnName);
                        object.put(columnName, dateValue);
                        break;
                    case Types.TIMESTAMP:
                        Timestamp timestampValue = resultSet.getTimestamp(columnName);
                        object.put(columnName, timestampValue);
                        break;
                }
            }
            array.add(object);
        }
        return array;
    }
}
