import React, {useEffect, useState} from 'react';

import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';

//import {  Text } from '@components';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Post} from '../../../domain/Post/types';
import {postService} from '../../../domain/Post/postService';
import {  FlatList, ListRenderItemInfo } from 'react-native';
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
  <Screen>
    <FlatList 
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
    />

  </Screen>
  )
}
