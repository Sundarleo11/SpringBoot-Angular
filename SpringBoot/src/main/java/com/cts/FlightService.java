package com.cts;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class FlightService {
public static List<FlightBean> listOfFlights=new ArrayList<FlightBean>();
	public static int idCounter=0;
	static
	{
		
		listOfFlights.add(new FlightBean(++idCounter, "Indigo",7500.00,new Date(),true));
		listOfFlights.add(new FlightBean(++idCounter, "JetAirways",8500.00,new Date(),false));
		listOfFlights.add(new FlightBean(++idCounter, "AirIndia",9500.00,new Date(),true));
		listOfFlights.add(new FlightBean(++idCounter, "GoAir",3000.00,new Date(),true));
	}

	public List<FlightBean> findAll()
	{
		return listOfFlights;
	}
	
	public FlightBean deleteById(int id)
	{
		FlightBean bean=findById(id);
		if(bean==null)
		
			return null;
		listOfFlights.remove(bean);
		return bean;
	}
	public FlightBean Save(FlightBean bean)
	{
	if(bean.getId()==-1)
	{
		bean.setId(++idCounter);
		listOfFlights.add(bean);
	}
	else
	{
		deleteById(bean.getId());
		listOfFlights.add(bean);
	}
		return bean;
		
	}
	
	public FlightBean findById(int id)
	{
		for(FlightBean bean: listOfFlights)
		{
			if(bean.getId()==id)
			{
				return bean;
			}
			
		}
		return null;
		
	}
}
