package com.example.demo.infrastructure.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table("music")
public class MusicEntity {
    @Id
    private Long id;

    @Column("album_id")
    private Long album_id;

    private String title;

    private String time;

    @Column("music_video")
    private boolean musicVideo;

    @Column("live_video")
    private boolean liveVideo;
}