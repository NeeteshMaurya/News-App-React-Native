import { View, Share } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Entertainment from '../screens/Entertainment';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Sports from '../screens/Sports';
import Fitness from '../screens/Fitness';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    const shareUrl = "https://github.com/NeeteshMaurya/News-App-React-Native"

  const onShare = async ()=>{
    try {
      const result = await Share.share({
        message:('Share News: '+'\n' + shareUrl),
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
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        // tabBarActiveBackgroundColor:'red',
        // headerTitle:'',

        headerRight: ()=> <AntDesign onPress={onShare} style={{marginRight:30}} name="sharealt" size={30} color="white" />,
        headerTitleAlign:'left',
        headerTitleStyle:{
            color:'white',
            fontSize:25
        },
        headerStyle:{
            backgroundColor:'#000033',
            // height:40,
        },
        tabBarShowLabel:false,
        tabBarStyle:{
            backgroundColor:'#D0D3D4',
            position:'absolute',
            
            height: 60,
            borderRadius:0,
            elevation:15        }
      }}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:({focused})=>{
                return(
                    <View>
                      <FontAwesome name="home" size={focused?45:35} color={focused? 'blue':'black'} />
                   </View>
                )
            }
        }}/>
        <Tab.Screen name="Entertainment" component={Entertainment} options={{
            tabBarIcon:({focused})=>{
                return(
                    <View>
                      <MaterialIcons name="local-movies" size={focused?45:35}  color={focused? 'blue':'black'} />
                   </View>
                )
            }
        }} />
        <Tab.Screen name="Sports" component={Sports} options={{
            tabBarIcon:({focused})=>{
                return(
                    <View>
                      <Ionicons name="football" size={focused?45:35}  color={focused? 'blue':'black'} />
                   </View>
                )
            }
        }} />
        <Tab.Screen name="Fitness" component={Fitness} options={{
            tabBarIcon:({focused})=>{
                return(
                    <View>
                      <Ionicons name="fitness" size={focused?45:35}  color={focused? 'blue':'black'} />
                   </View>
                )
            }
        }} />
     </Tab.Navigator>
  )
}

export default BottomTab