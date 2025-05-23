import React, {useEffect, useState} from 'react';

import {Screen} from '../../../components/Screen/Screen';

//import {  Text } from '@components';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Post} from '../../../domain/Post/types';
import {postService} from '../../../domain/Post/postService';
import {  FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { PostItem } from '../../../components/PostItem/PostItem';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  // chamada da api
  const [postList, setPostList] = useState<Post[]>([]);
  useEffect(() => {
    postService.getList().then(list => setPostList(list));
  }, []);

  function renderItem({item}:ListRenderItemInfo<Post>){
    return <PostItem post={item}/>
  }
   
  return (
  <Screen style={$screen}>  {/*  paddingBottom:0 para evitar o padding do bottom tab bar */}
    <FlatList 
    showsVerticalScrollIndicator={false}
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />

  </Screen>
  )
}

const $screen:StyleProp<ViewStyle>={
  paddingHorizontal:0,
  paddingBottom:0,
  paddingTop:0
}
