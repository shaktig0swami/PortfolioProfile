package com.portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.portfolio.entity.PortfolioMessage;
import com.portfolio.service.PortfolioService;

@Controller
public class HomeController 
{
	private PortfolioService service;
	public HomeController(PortfolioService service) 
	{
		this.service = service;
	}
	@GetMapping("/")
    public String home() 
	{
        return "home";
    }
	@GetMapping("/cv")
	public String getCv()
	{
		return "cv";
	}
	@PostMapping("/contact")
	public String getContact(PortfolioMessage message)
	{
		service.saveMessage(message);
		return "redirect:/";
	}
}
