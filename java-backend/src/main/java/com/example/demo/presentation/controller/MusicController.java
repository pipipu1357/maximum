package com.example.demo.presentation.controller;

import com.example.demo.application.service.MusicService;
import com.example.demo.infrastructure.entity.MusicEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;



@RestController
@RequestMapping("/music")
public class MusicController {
    private final MusicService musicService;

    @Autowired
    public MusicController(MusicService musicService){
        this.musicService = musicService;
    }

    @PostMapping("/create")
    public ResponseEntity<MusicEntity> createMusic(@RequestBody MusicEntity music) {

        MusicEntity savedMusic = musicService.saveMusic(music);

        return ResponseEntity.ok(savedMusic);
    }
}
