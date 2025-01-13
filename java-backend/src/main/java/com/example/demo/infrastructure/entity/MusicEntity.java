package com.example.demo.infrastructure.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "music")
public class MusicEntity {
    @Id
    private Long id;

    private Long albumId; // アルバムへの外部キー

    private String title; // 曲タイトル

    private String time; // 再生時間

    private boolean music_video; // あり:1,なし:0

    private boolean live_video; // あり:1,なし:0

}