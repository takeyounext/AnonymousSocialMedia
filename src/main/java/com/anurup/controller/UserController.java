package com.anurup.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.anurup.entity.UserDetails;
import com.anurup.repository.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository repo;
	
	
	@GetMapping("/")
	public ModelAndView home(ModelAndView modelandview) {
		modelandview.setViewName("index");
		return modelandview;
	}
	
	@GetMapping("/register")
	public ModelAndView register(ModelAndView modelandview) {
		modelandview.setViewName("views/register");
		modelandview.addObject("login", new UserDetails());
		return modelandview;
	}
	
	@PostMapping("/user")
	public void user(@RequestBody UserDetails user) {
		repo.save(user);
	}
}
