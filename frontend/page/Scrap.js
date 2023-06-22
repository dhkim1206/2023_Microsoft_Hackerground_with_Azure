import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Font from './../components/Font';
import { WithLocalSvg } from 'react-native-svg';
import Back from './../assets/back.svg';

const Scrap = ({ navigation }) => {
  const onBack = () => {
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
});

export default Scrap;
