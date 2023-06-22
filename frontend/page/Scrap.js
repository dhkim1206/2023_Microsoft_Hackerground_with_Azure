import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Font from '../components/Font';
import { WithLocalSvg } from 'react-native-svg';
import Bookmark from '../assets/bookmark.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Back from '../assets/back.svg';
import { data } from './Nav/Dash';
const Scrap = ({ navigation }) => {
  // let arr = [];

  const onFetch = async () => {
    try {
      // const response = await fetch('', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // console.log('POST 성공 : ' + response);
    } catch (error) {
      console.error('POST 실패 : ' + error);
    }
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
          <Font text={'스크랩한 글'} />
        </Text>
      </View>
      <ScrollView style={styles.list}>
        {data.map((item, idx) => (
          <TouchableOpacity style={styles.item} key={idx}>
            <View style={[styles.itemRow, styles.itemHeader]}>
              <View style={styles.itemTitle}>
                <Text style={styles.itemTag}>
                  <Font text={item.kind} />
                </Text>
                <Text style={styles.itemMainTitle}>
                  <Font text={item.title} />
                </Text>
              </View>
              <TouchableOpacity>
                <WithLocalSvg asset={Bookmark} />
              </TouchableOpacity>
            </View>
            <View style={styles.itemMiddle}>
              <Text style={styles.itemMiddleText}>
                <Font text={item.dept} />
              </Text>
              <Text style={styles.itemMiddleText}>
                <Font text={item.target} />
              </Text>
            </View>
            <View style={[styles.itemRow, styles.itemFooter]}>
              <Text style={styles.itemPeriod}>
                <Font text={item.period} />
              </Text>
              <Text style={styles.itemDday}>
                <Font text={item.dday} />
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  list: {
    paddingVertical: 5,
  },
  item: {
    backgroundColor: '#ffffff',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemHeader: {
    paddingVertical: 5,
  },
  itemMiddle: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  itemFooter: {
    paddingVertical: 5,
    alignItems: 'flex-end',
  },
  itemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTag: {
    color: '#3F86F8',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#3F86F8',
    fontSize: 12,
    paddingHorizontal: 6,
    paddingVertical: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    marginRight: 10,
  },
  itemMainTitle: {
    fontSize: 20,
  },
  itemMiddleText: {
    fontSize: 13,
  },
  itemPeriod: {
    fontSize: 12,
  },
  itemDday: {
    color: '#ffffff',
    backgroundColor: '#3F86F8',
    borderRadius: 50,
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Scrap;
