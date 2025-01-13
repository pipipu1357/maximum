package com.example.demo.infrastructure.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "album")
public class AlbumEntity {
    @Id
    private Long id;

    private String title; // アルバムのタイトル

    private String price; // アルバムの価格

    private LocalDate releaseDate; // アルバムリリース日

    //test

}