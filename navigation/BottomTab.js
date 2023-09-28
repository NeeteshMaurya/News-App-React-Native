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
    const shareUrl = ""
  return (
      <Tab.Navigator initialRouteName='Home' screenOptions={{
        // tabBarActiveBackgroundColor:'red',
        // headerTitle:'',

        headerRight: ()=> <AntDesign  style={{marginRight:30}} name="sharealt" size={30} color="white" />,
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
            backgroundColor:'white',
            position:'absolute',
            bottom: 10,
            right:15,
            left:15,
            height: 60,
            borderRadius:15,
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