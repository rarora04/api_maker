import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Chef Owl </Text>
        <Image
          source={{
            uri: 'https://www.kroger.com/product/images/large/front/0068687862238',
          }}
          style={{width: 300, height: 300}}
        />
      <Button
        title="Press me"
        color="#645452"
        onPress={() => Alert.alert('Hello Chef Owl')}
      />
      </View>
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff33',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    alignItems: 'center',
    fontWeight:'bold',
    fontFamily:'Georgia',
    fontSize: 100,
  },
});
