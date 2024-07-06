package com.takeyounext.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.takeyounext.entity.UserDetails;
import com.takeyounext.repository.UserRepository;

@RestController
public class UserController {
	
	@Autowired
	private UserRepository repo;
	
	@GetMapping("/")
	public ModelAndView login() {
		return new ModelAndView("redirect:/login");
	}
	
	@GetMapping("/login")
	public ModelAndView home() {
		return new ModelAndView("index");
	}
	
	@GetMapping("/register")
	public ModelAndView register(ModelAndView modelandview) {
		modelandview.setViewName("views/register");
		modelandview.addObject("UserDetails", new UserDetails());
		return modelandview;
	}
	
	@PostMapping("/register")
	public String register(@ModelAttribute UserDetails user) {
		repo.save(user);
		return "SUCCESS";
	}
}
