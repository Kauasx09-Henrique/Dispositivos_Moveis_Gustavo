
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home.jsx';
import Post from '../Post.jsx';
import Feed from '../Feed.jsx';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
    <Stack.Screen name='Post' component={Post} />
    <Stack.Screen name='Feed' component={Feed} />

   </Stack.Navigator>
  )
}

