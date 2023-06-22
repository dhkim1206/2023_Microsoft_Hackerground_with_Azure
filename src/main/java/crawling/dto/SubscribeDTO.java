package crawling.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class SubscribeDTO {
    String token;
    List<String> topic;
}
