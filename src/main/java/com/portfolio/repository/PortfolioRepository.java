package com.portfolio.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import com.portfolio.entity.PortfolioMessage;

@Repository
public class PortfolioRepository 
{
	private Session session;
	private Transaction transaction;
	
	public PortfolioRepository(SessionFactory factory)
	{
		session = factory.openSession();
		transaction = session.getTransaction();
	}

	public void save(PortfolioMessage message) 
	{
		transaction.begin();
		session.persist(message);
		transaction.commit();
	}
	
}
