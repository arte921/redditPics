import React, {useState} from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

export default function App() {

  const [text, setText] = useState("ghelo")

  let subreddit = "memes"
  let amount = 10
  let url = "https://www.reddit.com/r/" + subreddit + "/hot/.json?limit=" + amount
  console.log(url)
  getJson(url,function(response){
    let postarray = response["data"]["children"]
    postarray.forEach((post, index) => {
        let body = post["data"]
        console.log(body["title"])
    });
    console.log("success")
    setText("hi")
  })


  return (
    <View>
      <Text/>
      <Text>{text}</Text>
    </View>
  )
}


function getJson(url, callback){
  let xhr = new XMLHttpRequest()
  xhr.open("GET",url,true)
  xhr.responseType = "json"
  xhr.onload = function(){
    let status = xhr.status
    let response = xhr.response
    if(status == 200){
      callback(response)
    }else{
      console.log("fail")
      console.log(status)
    }
  }
  xhr.send()
}
