import { View, ActivityIndicator,FlatList } from 'react-native'
import React from 'react'
import useAxios from '../hooks/useAxios'
import ShowNews from '../components/ShowNews'

const Sports = () => {
  let apiUrl = `/top-headlines/category/sports/in.json`
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

export default Sports