import { View, Text, FlatList,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useAxios from '../hooks/useAxios'
import ShowNews from '../components/ShowNews'

const Home = (props) => {

  let apiUrl = `/top-headlines/category/general/in.json`
  const{response, isLoading} = useAxios(apiUrl)

  // console.log(response)
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

export default Home
