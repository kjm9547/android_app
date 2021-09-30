import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}> 
            <View style={styles.profile}/>
            <Text style={styles.name}> hi </Text>
            <View style={styles.ms}/>
            
        </View>
        <View style={styles.footer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  header: {
    flex:1,
    backgroundColor: 'green',
  },
  content: {
    flex:8,
    backgroundColor: 'white',
    flexDirection:'column',
  },
  footer: {
    flex:1,
    backgroundColor: 'yellow',
  },
  profile:{
    width:50,
    height:50,
    margin:8,
    borderRadius:25,
    backgroundColor:'orange'
  },
  ms: {
    width:'70%',
    alignItems:'flex-end',
    backgroundColor:'yellow',
  }
});
