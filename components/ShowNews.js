import { View, Text,Image, Linking, TouchableOpacity,Share } from 'react-native'
import React from 'react'
import styles from '../Style'
import { AntDesign } from '@expo/vector-icons';

const ShowNews = ({navigate,imageUrl,date,title,url}) => {

  const onShare = async ()=>{
    try {
      const result = await Share.share({
        message:('Share News: '+'\n' + url),
      })
      if(result.action === Share.sharedAction){
        if(result.activityType){
          console.log(result.activityType)
        }
        else{
          console.log('shared')
        }
      } else if(result.action === Share.dismissedAction){
        console.log('Dismissed')
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <View style={styles.newsCard}>
      <Image style={styles.newsImg} source={{uri:`${imageUrl}`}} />
      <View style={{flexDirection:'row',marginTop:8}}>
        <Text style={styles.newsDate}>{date}</Text>
        <AntDesign onPress={onShare} style={{marginLeft:144}} name="sharealt" size={30} color="white" />
      </View>
      
      <TouchableOpacity onPress={() => {
              Linking.openURL(url);}} >
        <Text numberOfLines={2}  style={styles.newsText}>{title}</Text>
      </TouchableOpacity>


      {/* <TouchableOpacity onPress={navigate} >
        <Text numberOfLines={1}  style={styles.newsText}>{title}</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default ShowNews

