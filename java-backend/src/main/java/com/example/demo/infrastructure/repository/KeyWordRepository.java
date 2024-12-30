package com.example.demo.infrastructure.repository;

import com.example.demo.infrastructure.entity.KeyWordEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyWordRepository extends CrudRepository<KeyWordEntity,Long> {
}
