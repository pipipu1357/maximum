package com.example.demo.infrastructure.repository;

import com.example.demo.infrastructure.entity.CommentEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends CrudRepository<CommentEntity,Long> {
}
