package com.portfolio.service;

import org.springframework.stereotype.Service;

import com.portfolio.entity.PortfolioMessage;
import com.portfolio.repository.PortfolioRepository;

@Service
public class PortfolioService 
{
	private PortfolioRepository repository;
	
	public PortfolioService(PortfolioRepository repository) 
	{
		this.repository = repository;
	}

	public void saveMessage(PortfolioMessage message) 
	{
		repository.save(message);
	}
}
