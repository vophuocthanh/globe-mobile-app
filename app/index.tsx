

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import GetStart from './getstart/getstart';
import { View } from 'react-native';

export default function Page() {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <GetStart  />
        </View>
    </SafeAreaView>
  );
}
