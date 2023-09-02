<%@ page import="com.model.LoginBean" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>MVC-Success</title>
</head>
<body>
<p>로그인 성공했습니다</p>
<%
    LoginBean bean = (LoginBean) request.getAttribute("bean");
    out.print("아이디: " + bean.getId());
%>
</body>
</html>
