
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Font from './../components/Font';
import { WithLocalSvg } from 'react-native-svg';
import Back from './../assets/back.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = ({ navigation }) => {
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
  const [token, setToken] = useState('');

  useEffect(() => {
    onGetInfo();
  }, [onGetInfo]);

  const onGetInfo = useCallback(async () => {
    const getToken = await AsyncStorage.getItem('token');
    const getTopicList = JSON.parse(await AsyncStorage.getItem('topicList'));

    setToken(getToken);
    if (getTopicList.length > 0) setIsAlert(true);

    getTopicList.map(topic => {
      setTopicCheck(current => {
        let newTopicCheck = { ...current };
        newTopicCheck[topic] = !newTopicCheck[topic];
        return newTopicCheck;
      });
    });
  }, []);

  const onCheck = text => {
    setTopicCheck(current => {
      let newTopicCheck = { ...current };
      newTopicCheck[text] = !newTopicCheck[text];
      return newTopicCheck;
    });
  };

  const onFetch = async () => {
    try {
      let arr = [];
      Object.keys(topicCheck).map(item => topicCheck[item] && arr.push(item));
      await AsyncStorage.setItem('topicList', JSON.stringify(arr));
      const data = { [token]: arr };
      console.log(data);
      // const response = await fetch('', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(data),
      // });
      // console.log('POST 성공 : ' + response);
    } catch (error) {
      console.error('POST 실패 : ' + error);
    }
  };

  const [isAlert, setIsAlert] = useState(false);
  const [isNightAlert, setIsNightAlert] = useState(false);

  const toggleSwitch = async text => {
    if (text === 'alert') {
      setIsAlert(previousState => !previousState);
      setTopicCheck({
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
      if (isAlert === false) {
        await AsyncStorage.setItem('topicList', JSON.stringify([]));
      }
    } else setIsNightAlert(previousState => !previousState);
  };

  const onBack = () => {
    onFetch();
    navigation.navigate('Nav', { screen: 'Setting' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <WithLocalSvg asset={Back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>
          <Font text={'알림 설정'} />
        </Text>
      </View>
      <View>
        <View style={styles.alert}>
          <View style={styles.doAlert}>
            <Text>
              <Font text="알람 여부" />
            </Text>
            <Switch
              trackColor={{ false: '#767577', true: '#3F86F8' }}
              thumbColor={isAlert ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch('alert')}
              value={isAlert}
            />
          </View>
          <View style={styles.nightAlert}>
            <View style={styles.nightAlertMessage}>
              <Font text="방해 금지 모드" />
              <Font text="(23시 ~ 8시)" />
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#3F86F8' }}
              thumbColor={isNightAlert ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch('night')}
              value={isNightAlert}
            />
          </View>
        </View>
        <View>
          <View
            style={[
              styles.topicItem,
              !isAlert ? styles.topicItemDisable : null,
            ]}>
            <Text style={styles.topicTitle}>
              <Font text={'Dash : 대구 기술창업의 모든 것'} />
            </Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                disabled={!isAlert}
                onPress={() => onCheck('지역사업공고')}
                style={[
                  styles.topicButton,
                  topicCheck['지역사업공고']
                    ? styles.checkButton
                    : styles.disabledButton,
                ]}>
                <Text
                  style={[
                    styles.topicText,
                    topicCheck['지역사업공고']
                      ? styles.checkText
                      : styles.topicText,
                  ]}>
                  <Font text={'지원 사업 공고'} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!isAlert}
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
                    topicCheck['입주공간']
                      ? styles.checkText
                      : styles.topicText,
                  ]}>
                  <Font text={'입주 공간'} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.topicItem,
              !isAlert ? styles.topicItemDisable : null,
            ]}>
            <Text style={styles.topicTitle}>
              <Font text={'일자리 포털 : 채용 정보'} />
            </Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                disabled={!isAlert}
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
                disabled={!isAlert}
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
                disabled={!isAlert}
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
          <View
            style={[
              styles.topicItem,
              !isAlert ? styles.topicItemDisable : null,
            ]}>
            <Text style={styles.topicTitle}>
              <Font text={'청년 정책 : 대구 청년들을 위한 정책'} />
            </Text>
            <View style={styles.topicButtonList}>
              <TouchableOpacity
                disabled={!isAlert}
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
                disabled={!isAlert}
                onPress={() => onCheck('주거')}
                style={[
                  styles.topicButton,
                  topicCheck['주거']
                    ? styles.checkButton
                    : styles.disabledButton,
                ]}>
                <Text
                  style={[
                    styles.topicText,
                    topicCheck['주거'] ? styles.checkText : styles.topicText,
                  ]}>
                  <Font text={'주거'} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!isAlert}
                onPress={() => onCheck('교육')}
                style={[
                  styles.topicButton,
                  topicCheck['교육']
                    ? styles.checkButton
                    : styles.disabledButton,
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
                disabled={!isAlert}
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
                    topicCheck['복지문화']
                      ? styles.checkText
                      : styles.topicText,
                  ]}>
                  <Font text={'복지 문화'} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.ms}>
          <Font text={'@Microsoft 2023 HakersGround "Whrer are you going"'} />
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignContent: 'center',
    padding: 20,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderColor: '#7F7F7F',
  },
  back: {
    marginTop: 5,
  },
  mainTitle: {
    fontSize: 24,
    color: '#3F86F8',
    marginLeft: 10,
    textAlignVertical: 'center',
  },
  alert: {
    marginVertical: '5%',
  },
  doAlert: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: '5%',
  },
  nightAlert: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: '5%',
  },
  topicItemDisable: {
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  topicItem: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: '5%',
    padding: 20,
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
    flexDirection: 'row',
  },
  checkButton: {
    backgroundColor: '#3F86F8',
    borderColor: '#3F86F8',
  },
  checkText: {
    color: '#fff',
  },
  disabledButton: {
    borderColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'transparent',
  },
  ms: {
    marginTop: '25%',
    marginLeft: '10%',
  },
});

export default Notification;
