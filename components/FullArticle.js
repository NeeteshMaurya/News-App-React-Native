import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'
import styles from '../Style'


//this screen works good but we are not getting full length data in content field from api so we will not
// use this screen,but its functionality will be commented so if i want to use this again just 
// "uncomment the touchable opacity button in show news component which will take you on this screen."

const FullArticle = ({ route, navigation }) => {
  const {title,imageUrl,date,content} = route.params
  console.log(title)
  return (
    <ScrollView style={styles.newsFullCard}>
      <Text>Hiiii</Text>
      <Image style={styles.newsImg} source={{uri:`${imageUrl}`}} />
      <Text style={styles.newsDate}>{date}</Text>
      <Text numberOfLines={1}  style={styles.newsText}>{title}</Text>
      <Text>{content}</Text>
    </ScrollView>
  )
}

export default FullArticle