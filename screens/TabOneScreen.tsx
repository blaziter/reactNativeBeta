import { Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Entypo, MaterialCommunityIcons  } from '@expo/vector-icons';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.navbar}>
            <Entypo name="camera" size={24} color="black" />
            <Entypo name="mail" style={styles.mail} size={24} color="black" />
          </View>
          <View style={styles.body}>
            <View style={styles.list}>
              <View style={styles.item}>
                <Text style={styles.name}>Hello</Text>
                <MaterialCommunityIcons style={styles.menu} name="dots-vertical" size={24} color="black" />
              </View>
              <View style={styles.item}>
                <Text style={styles.name}>Hello</Text>
                <MaterialCommunityIcons style={styles.menu} name="dots-vertical" size={24} color="black" />
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
  },
  mail: {
    marginLeft: 'auto',
  },
  body: {
    top: 20,
    flex: 24,
    width: '95%',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  item: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    width: '100%',
    height: 350,
    marginBottom: 10,
  },
  menu: {
    right: 25,
    marginLeft: 'auto',
  },
  name: {
    top: 25,
    left: 50,
    fontSize: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
