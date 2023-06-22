import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export const data = [
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
  {
    kind: '사업화',
    title: '제목입니다',
    dept: '계명대학교',
    period: '2023/06/22 ~ 2023/07/22',
    target: '창업가',
    dday: '마감 9일전',
  },
];
const Dash = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Dash</Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Job')}>
            <Text>지원 사업 공고</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>입주 공간</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {data.map((item, idx) => (
          <TouchableOpacity key={idx}>
            <View>
              <View>
                <Text>{item.kind}</Text>
                <Text>{item.title}</Text>
              </View>
              <TouchableOpacity>
                <Text>저장</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>{item.dept}</Text>
              <Text>{item.target}</Text>
            </View>
            <View>
              <Text>{item.period}</Text>
              <Text>{item.dday}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dash;
