package com.cts;

import java.util.Date;

public class FlightBean {
	
	private  int id;
	private String type;
	private double price;
	private String customerName;
	private Date journeyDate;
	private boolean status;
	public FlightBean(int id, String type, double price, Date journeyDate, boolean status) {
		super();
		this.id = id;
		this.type = type;
		this.price = price;
		this.journeyDate = journeyDate;
		this.status = status;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FlightBean other = (FlightBean) obj;
		if (id != other.id)
			return false;
		return true;
	}

	public FlightBean()
	{
		
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Date getJourneyDate() {
		return journeyDate;
	}
	public void setJourneyDate(Date journeyDate) {
		this.journeyDate = journeyDate;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	
	
}
