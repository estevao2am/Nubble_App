
import {Screen} from '../../Screen';

//import {  Text } from '@components';
import {AppTabScreenProps} from '../../../routes/navigationType';
import {Post} from '../../../domain/Post/postTypes';
import {  FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle } from 'react-native';
import { PostItem } from '../../../components/PostItem/PostItem';
import { HomeHeader } from './components/HomeHeader';
import { HomeEmpty } from './components/HomeEmpty';
import { usePostList } from '../../../domain/Post/useCases/usePostList';
import React from 'react';
import { useScrollToTop } from '@react-navigation/native';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
 
const {list:postList,error,loading,refresh,fetchNextPage} = usePostList()

// go to top function after must be used in the flatList area
const flatListRef = React.useRef<FlatList<Post>>(null)
useScrollToTop(flatListRef)
 
  function renderItem({item}:ListRenderItemInfo<Post>){
    return <PostItem post={item}/>
  }
   
  return (
  <Screen style={$screen}>  
    <FlatList 
    ref={flatListRef} // permite retonar no inicio quando é clicado no icon home
    showsVerticalScrollIndicator={false}
       data={postList}
              //data={[]}

        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onEndReached={fetchNextPage} // função que é chamada quando chegar no limite da pagina
        onEndReachedThreshold={0.5}// percemtagem do scrool
        contentContainerStyle={{flex: postList.length === 0 ? 1 : undefined}}
        refreshing={loading}
        ListHeaderComponent={<HomeHeader/>}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh}/> }

        ListEmptyComponent={<HomeEmpty refetch={refresh} error={error} loading={loading}/>}
    />

  </Screen>
  )
}

const $screen:StyleProp<ViewStyle>={
  paddingHorizontal:0,
  paddingBottom:0,
  paddingTop:0,
  flex:1
}
