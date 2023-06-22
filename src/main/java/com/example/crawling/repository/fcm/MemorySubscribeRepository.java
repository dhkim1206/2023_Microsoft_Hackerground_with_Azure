package com.example.crawling.repository.fcm;

import java.util.List;

public interface MemorySubscribeRepository {
    public void save(String key, List<String> topic);
    public void update(String key, List<String> topic);
    public void delete(String key);
    public List<String> find(String key);
}
