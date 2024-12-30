package com.example.demo.infrastructure.repository;

import com.example.demo.infrastructure.entity.AlbumEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumRepository extends CrudRepository<AlbumEntity,Long> {
}
