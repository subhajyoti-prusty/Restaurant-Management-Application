package com.my.restaurant.repository;

import com.my.restaurant.entity.User;
import com.my.restaurant.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    /**
     * Finds a user by their email address.
     *
     * @param email the email address of the user
     * @return the User entity if found, otherwise null
     */
    User findByEmail(String email);

    /**
     * Finds the first user with the specified email address.
     *
     * @param email the email address of the user
     * @return an Optional containing the User entity if found, otherwise empty
     */
    Optional<User> findFirstByEmail(String email);


    User findByUserRole(UserRole userRole);
}
