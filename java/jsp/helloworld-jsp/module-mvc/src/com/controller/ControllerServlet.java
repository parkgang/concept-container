package com.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;

import com.model.LoginBean;

import javax.servlet.annotation.WebServlet;

@WebServlet(name = "myController", urlPatterns = "/ControllerServlet")
public class ControllerServlet extends HttpServlet
{
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        response.setContentType("text/html; charset=UTF-8");

        String id = request.getParameter("id");
        String password = request.getParameter("passwd");

        LoginBean bean = new LoginBean();
        bean.setId(id);
        bean.setPassword(password);
        request.setAttribute("bean", bean);

        boolean status = bean.validate();

        RequestDispatcher rd;
        if (status == true)
            rd = request.getRequestDispatcher("mvc_success.jsp");
        else
            rd = request.getRequestDispatcher("mvc_error.jsp");
        rd.forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
        doPost(req, resp);
    }
}
