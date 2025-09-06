package com.my.restaurant.repository;

import com.my.restaurant.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {

    List<Category> findAllByNameContaining(String title);
}
