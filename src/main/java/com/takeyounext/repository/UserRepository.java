package com.takeyounext.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.takeyounext.entity.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Integer> {
		
}
