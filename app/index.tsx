

import 'react-native-gesture-handler';

import GetStart from './getstart/getstart';
import { View,SafeAreaView } from 'react-native';


export default function Page() {
  return (
    <SafeAreaView style={{flex: 1}}>
          <View>
            <GetStart  />
          </View>
    </SafeAreaView>
  );
}
