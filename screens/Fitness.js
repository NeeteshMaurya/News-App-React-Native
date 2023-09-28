import {ScrollView, View, Text, FlatList,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import ShowNews from '../components/ShowNews'

const Fitness = () => {

  let apiUrl = `/top-headlines/category/health/in.json`
  const{response, isLoading} = useAxios(apiUrl)

  return (
      <View style={{backgroundColor:'#000033'}}>
        {response!== null ?
         <FlatList
         data={response}
         renderItem={({item}) =>(
           <View>
             <ShowNews 
             navigate={()=>props.navigation.navigate('FullArticle',
             {
              title: item.title,
              imageUrl: item.urlToImage,
              date: item.publishedAt,
              content: item.content
             })} 
             url={item.url}
             title={item.title} imageUrl={item.urlToImage} date={item.publishedAt} content={item.content} />
           </View>
         )}
         /> :
         <ActivityIndicator />
        }
      </View>
  )
}

export default Fitness
