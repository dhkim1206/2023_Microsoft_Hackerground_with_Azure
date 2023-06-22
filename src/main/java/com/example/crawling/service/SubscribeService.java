package com.example.crawling.service;

import com.example.crawling.repository.fcm.MemorySubscribeRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SubscribeService implements MemorySubscribeRepository {
    private Map<String, List<String>> subscribeMap = new HashMap<>();

    @Override
    public void save(String key, List<String> topic) {
        subscribeMap.put(key, topic);
    }

    @Override
    public void update(String key, List<String> topic) {
        subscribeMap.replace(key, topic);
    }

    @Override
    public void delete(String key) {
        subscribeMap.remove(key);
    }

    @Override
    public List<String> find(String key) {
        return subscribeMap.get(key);
    }
}
