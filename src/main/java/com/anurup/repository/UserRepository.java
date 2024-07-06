package com.anurup.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.anurup.entity.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Integer> {
		
}
