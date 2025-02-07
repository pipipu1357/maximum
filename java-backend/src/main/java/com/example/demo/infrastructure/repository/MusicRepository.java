package com.example.demo.infrastructure.repository;

import com.example.demo.infrastructure.entity.MusicEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  MusicRepository extends CrudRepository<MusicEntity,Long> {
}
