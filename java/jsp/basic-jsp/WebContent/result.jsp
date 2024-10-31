<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>계산 결과</title>
</head>
<body>
    <h2>계산 결과</h2>
    <%
        String error = (String) request.getAttribute("error");
        if (error != null) {
    %>
        <p style="color:red;"><%= error %></p>
    <%
        } else {
            int num1 = (Integer) request.getAttribute("num1");
            int num2 = (Integer) request.getAttribute("num2");
            int sum = (Integer) request.getAttribute("sum");
    %>
        <p><%= num1 %> + <%= num2 %> = <strong><%= sum %></strong></p>
    <%
        }
    %>
    <a href="index.jsp">다시 계산하기</a>
</body>
</html>
