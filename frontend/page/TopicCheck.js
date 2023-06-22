import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Font from './../components/Font';
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TopicCheck = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    onCheckToken();

    messaging().onMessage(handleForegroundNotification);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const onCheckToken = async () => {
    const getToken = await AsyncStorage.getItem('token');
    if (getToken) {
      setIsLogin(true);
      navigation.navigate('Nav');
    } else {
      setIsLogin(false);
    }
  };

  const requestPermissions = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getToken();
    }
  };

  const getToken = async () => {
    await setToken(await messaging().getToken());
    await AsyncStorage.setItem('token', await messaging().getToken());
    await setIsLogin(true);
    console.log('Device Token:', await messaging().getToken());
  };

  const handleForegroundNotification = async remoteMessage => {
    console.log('Foreground Notification:', remoteMessage);

    PushNotification.localNotification({
      title: remoteMessage.notification.title,
      message: remoteMessage.notification.body,
    });
  };

  const [topicCheck, setTopicCheck] = useState({
    지원사업공고: false,
    입주공간: false,
    공기업: false,
    공무원: false,
    사기업: false,
    일자리: false,
    주거: false,
    교육: false,
    복지문화: false,
  });

  const onCheck = text => {
    setTopicCheck(current => {
      let newTopicCheck = { ...current };
      newTopicCheck[text] = !newTopicCheck[text];
      return newTopicCheck;
    });
    requestPermissions();
  };

  const onFetch = async () => {
    try {
      if (isLogin) {
        let arr = [];
        Object.keys(topicCheck).map(item => topicCheck[item] && arr.push(item));
        await AsyncStorage.setItem('topicList', JSON.stringify(arr));
        const data = { [token]: arr };
        // const response = await fetch('', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data),
        // });
        // console.log('POST 성공 : ' + response);
        navigation.navigate('Nav');
      }
    } catch (error) {
      console.error('POST 실패 : ' + error);
    }
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
              onPress={() => onCheck('지원사업공고')}
              style={[
                styles.topicButton,
                topicCheck['지원사업공고']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['지원사업공고']
                    ? styles.checkText
                    : styles.topicText,
                ]}>
                <Font text={'지원 사업 공고'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('입주공간')}
              style={[
                styles.topicButton,
                topicCheck['입주공간']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['입주공간'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'입주 공간'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'일자리 포털 : 채용 정보'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck('공무원')}
              style={[
                styles.topicButton,
                topicCheck['공무원']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['공무원'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'공무원'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('공기업')}
              style={[
                styles.topicButton,
                topicCheck['공기업']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['공기업'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'공기업'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('사기업')}
              style={[
                styles.topicButton,
                topicCheck['사기업']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['사기업'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'사기업'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topicItem}>
          <Text style={styles.topicTitle}>
            <Font text={'청년 정책 : 대구 청년들을 위한 정책'} />
          </Text>
          <View style={styles.topicButtonList}>
            <TouchableOpacity
              onPress={() => onCheck('일자리')}
              style={[
                styles.topicButton,
                topicCheck['일자리']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['일자리'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'일자리'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('주거')}
              style={[
                styles.topicButton,
                topicCheck['주거'] ? styles.checkButton : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['주거'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'주건'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('교육')}
              style={[
                styles.topicButton,
                topicCheck['교육'] ? styles.checkButton : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['교육'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'교육'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onCheck('복지문화')}
              style={[
                styles.topicButton,
                topicCheck['복지문화']
                  ? styles.checkButton
                  : styles.disabledButton,
              ]}>
              <Text
                style={[
                  styles.topicText,
                  topicCheck['복지문화'] ? styles.checkText : styles.topicText,
                ]}>
                <Font text={'복지 문화'} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onFetch} style={styles.nextButton}>
        <Text style={styles.nextText}>
          <Font text={'다음'} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flex: 2,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 15,
    paddingVertical: 20,
  },
  mainTitle: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 16,
  },
  topicContainer: {
    flex: 20,
    padding: 20,
  },
  topicItem: {
    marginVertical: '10%',
  },
  topicTitle: {
    marginBottom: 10,
  },
  topicButton: {
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 20,
  },
  topicButtonList: {
    flex: 1,
    flexDirection: 'row',
  },
  nextButton: {
    flex: 3,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#3F86F8',
  },
  checkButton: {
    backgroundColor: '#3F86F8',
    borderColor: '#3F86F8',
    color: '#fff',
  },
  disabledButton: {
    backgroundColor: '#fff',
    borderColor: '#B6B6B6',
  },
  nextText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default TopicCheck;
