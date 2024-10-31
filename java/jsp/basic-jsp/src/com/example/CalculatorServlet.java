package com.example;

import java.io.IOException;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/calculate")
public class CalculatorServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public CalculatorServlet() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");

        String num1Str = request.getParameter("num1");
        String num2Str = request.getParameter("num2");

        int num1 = 0;
        int num2 = 0;
        int sum = 0;

        try {
            num1 = Integer.parseInt(num1Str);
            num2 = Integer.parseInt(num2Str);
            sum = num1 + num2;
        } catch (NumberFormatException e) {
            request.setAttribute("error", "유효한 숫자를 입력하세요.");
        }

        request.setAttribute("num1", num1);
        request.setAttribute("num2", num2);
        request.setAttribute("sum", sum);

        RequestDispatcher dispatcher = request.getRequestDispatcher("result.jsp");
        dispatcher.forward(request, response);
    }
}
