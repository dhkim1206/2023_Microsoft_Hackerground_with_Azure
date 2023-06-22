package com.example.crawling.controller;

import com.example.crawling.dto.SubscribeDTO;
import com.example.crawling.dto.TokenDTO;
import com.example.crawling.service.SubscribeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SubscribeController {
    private final SubscribeService subscribeService;

    //토큰 저장
    @PostMapping("/subscribe")
    public void subscribe(@RequestBody SubscribeDTO subscribeDTO){
        subscribeService.save(subscribeDTO.getToken(), subscribeDTO.getTopic());
    }

    //토픽 업데이트
    @PutMapping("/topic")
    public void updateTopic(@RequestBody SubscribeDTO subscribeDTO){
        subscribeService.update(subscribeDTO.getToken(), subscribeDTO.getTopic());
    }

    @DeleteMapping("/subscribe")
    public void removeTopic(@RequestParam TokenDTO tokenDTO){
        subscribeService.delete(tokenDTO.getToken());
    }

    @GetMapping("/subscribe")
    public List<String> findSubscribe(@RequestParam TokenDTO tokenDTO){
        return subscribeService.find(tokenDTO.getToken());
    }
}
