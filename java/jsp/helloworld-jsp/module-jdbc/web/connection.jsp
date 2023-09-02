<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.sql.*" %>
<html>
<head>
    <title>Database Connection</title>
</head>
<body>
<%
    Connection conn = null;
    try
    {
        String url = "jdbc:mysql://localhost:3306/";
        String user = "";
        String password = "";

        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection(url, user, password);
        out.print("JDBC Success");
        System.out.println("JDBC Success");
    }
    catch (SQLException ex)
    {
        out.print("JDBC Fail");
        System.out.println("JDBC Fail");
        System.out.println("SQLException: " + ex.getMessage());
    }
    finally
    {
        if (conn != null)
            conn.close();
    }
%>
</body>
</html>