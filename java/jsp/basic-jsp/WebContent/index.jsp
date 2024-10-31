<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>계산기</title>
</head>
<body>
    <h2>두 숫자의 합을 계산하세요</h2>
    <form action="calculate" method="post">
        숫자 1: <input type="text" name="num1" /><br/><br/>
        숫자 2: <input type="text" name="num2" /><br/><br/>
        <input type="submit" value="계산" />
    </form>
</body>
</html>
