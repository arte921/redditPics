import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View>
      <Text/>
      <Text> {text1}</Text>
      <Text> {text2}</Text>
    </View>
  );
}

var text1 = "helo"
var text2 = "moon"

function getJson(subreddit, callback){
  let xhr = new XMLHttpRequest()
  xhr.open("GET","https://www.reddit.com/r/${sub}/top/.json?limit=10",true)
  xhr.responseType = "json"
  xhr.onLoad = function(){
    let status = xhr.status
    let response = xhr.response
    if(status == 200){
      callback(response)
    }else{
      Alert.alert(status, response)
    }
  }
}

getJson("memes",function(response){
  Alert.alert("yayy",response)
})
