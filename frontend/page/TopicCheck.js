import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Font from './../components/Font';

const TopicCheck = ({ navigation }) => {
  const [topicCheck, setTopicCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onCheck = index => {
    const newCheck = [...topicCheck];

    newCheck[index] = !newCheck[index];
    setTopicCheck(newCheck);
  };

  const onNext = () => {
    navigation.navigate('Dash');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>
          <Font text={'관심 주제 설정'} />
        </Text>
        <Text style={styles.subTitle}>
          <Font text={'관심이 가는 주제를 선택해주세요'} />
        </Text>
      </View>
      <View style={styles.topicContainer}>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'Dash : 대구 기술창업의 모든 것'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck(0)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>지원 사업 공고</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(1)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>입주 공간</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            청년 정책 : 대구 청년들을 위한 정책
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck(2)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>일자리</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(3)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>추가</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(4)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>교육</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck(5)}
              style={styles.topicButton}>
              <Text style={styles.topicText}>복지 문화</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            일자리 포털 : 대구일자리포털, 채용정보, 인재정보, 교육/훈련정보,
            지원정책 등 대구시의 다양한 일자리정보 제공
          </Text>
          <View style={styles.topicSubItem}>
            <Text>채용 정보</Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                onPress={() => onCheck(6)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>공기업</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onCheck(7)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>공무원</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onCheck(8)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>사기업</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topicSubItem}>
            <Text>교육 훈련 정보</Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                onPress={() => onCheck(9)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>교육 훈련 정보</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.topicSubItem}>
            <Text>지원 정책</Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                onPress={() => onCheck(10)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>사업자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onCheck(11)}
                style={styles.topicButton}>
                <Text style={styles.topicText}>구직자</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onNext}>
        <Text>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    paddingVertical: 16,
  },
  mainTitle: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 16,
  },
  topicContainer: {
    padding: 20,
  },
  topicItem: {
    marginBottom: 10,
  },
  topicTitle: {},
});

export default TopicCheck;
