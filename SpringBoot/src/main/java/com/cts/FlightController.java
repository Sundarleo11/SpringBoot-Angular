package com.cts;

import java.net.URI;
import java.util.List;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins="http://localhost:4200")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class FlightController {
	
	@Autowired
	private FlightService service;
	/*@GetMapping(path="/flight-bean")
	public FlightBean getFlight()
	{
		FlightBean bean=new FlightBean();
		bean.setId(1);
		bean.setType("Indigo");
		bean.setPrice(15000.00);
		
		return bean;
		//return new FlightBean(2, "AirAsia", 15000.00);
		//throw new RuntimeException("Some Error......contact with support team");
	}*/
	/*@GetMapping(path="/flight-bean/path-var/{name}")
	public FlightBean getFlight(@PathVariable String name)
	{
		FlightBean bean=new FlightBean();
		bean.setId(1);
		bean.setType("Indigo");
		bean.setPrice(15000.00);
		bean.setCustomerName(name);
		System.out.println(bean.getCustomerName());
		return bean;
		//return new FlightBean(2, "AirAsia", 15000.00);
		//throw new RuntimeException("Some Error......contact with support team");
	}*/
@GetMapping(path="/user/{username}/flights")
	public List<FlightBean> getFlight(@PathVariable String username)
	{
	System.out.println("Showing detials to "+ ""+username);
		return service.findAll();
	}
	 
@DeleteMapping("/user/{username}/flights/{id}")
public ResponseEntity<Void> deleteFlight(@PathVariable String username, @PathVariable int id)
{
FlightBean bean=service.deleteById(id);
if(bean!=null)
{
	return ResponseEntity.noContent().build();
}
return ResponseEntity.notFound().build();
}
 
@GetMapping(path="/user/{username}/flights/{id}")
public FlightBean getFlight(@PathVariable String username, @PathVariable int id)
{
System.out.println("Showing detials to "+ ""+username);
	return service.findById(id);
}
@PutMapping(path="/user/{username}/flights/{id}")
public ResponseEntity<FlightBean> getUpdatedFlight(@PathVariable String username, @PathVariable int id, 

		@RequestBody FlightBean bean)
{
FlightBean Fbean=service.Save(bean);
 return new ResponseEntity<FlightBean>(bean, HttpStatus.OK);

}
@PostMapping(path="/user/{username}/flights")
public ResponseEntity<Void> getFinalUpdateFlight(@PathVariable String username, @PathVariable int id, 

		@RequestBody FlightBean bean)
{
FlightBean Fbean=service.Save(bean);
//Now give location
//give current url
///user/{username}/flights/{id}
URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(Fbean.getId()).toUri();

 return ResponseEntity.created(uri).build();

}
	

}
