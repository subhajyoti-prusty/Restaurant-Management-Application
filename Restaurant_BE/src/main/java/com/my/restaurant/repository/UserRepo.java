package com.my.restaurant.repository;

import com.my.restaurant.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    /**
     * Finds a user by their email address.
     *
     * @param email the email address of the user
     * @return the User entity if found, otherwise null
     */
    User findByEmail(String email);

}
