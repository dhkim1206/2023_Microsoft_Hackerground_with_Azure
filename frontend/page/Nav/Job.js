import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { data } from './Dash';

const Job = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 22 }}>Job</Text>
        <View>
          <TouchableOpacity>
            <Text>채용정보</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>교육훈련정보</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>지원정책</Text>
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

export default Job;
