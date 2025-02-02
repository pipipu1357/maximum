package com.example.demo.application.service;
import com.example.demo.infrastructure.entity.MusicEntity;
import com.example.demo.infrastructure.repository.MusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MusicService {

    private final MusicRepository musicRepository;

    @Autowired
    public MusicService(MusicRepository musicRepository){
        this.musicRepository = musicRepository;
    }

    public MusicEntity saveMusic(MusicEntity music){
        return musicRepository.save(music);
    }
}
