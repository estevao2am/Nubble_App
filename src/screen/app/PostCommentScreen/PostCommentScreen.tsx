import { Screen } from '../../Screen'
import { AppScreenProps } from '../../../routes/navigationType'
import { usePostCommentList } from '../../../domain/PostComment/useCases/usePostCommentList'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { PostComment } from '../../../domain/PostComment/postCommentTypes'
import { PostCommentItem } from './components/PostCommentItem'
import { PostComentBottom } from './components/PostComentBottom'
import { useAppSafeArea } from '../../../components/hooks/useAppSafeArea'
import { Box } from '../../../components/Box/Box'
import { PostCommentTextMessage } from './components/PostCommentTextMessage'

export function PostCommentScreen ({route}:AppScreenProps<'PostCommentScreen'>){
const postId = route.params.postId; // eu recebo este id la na definicao do meu routes ,como paramenr´trp
const {list,fetchNextPage,hasNextPage,refresh} = usePostCommentList(postId)
const {bottom} = useAppSafeArea()
 function renderItem({item}:ListRenderItemInfo<PostComment>){
    return (
    <PostCommentItem postComment={item}/>
    ) 
    }



    return (
        <Screen flex={1} canGoBack title="Comentarios">
            <Box justifyContent='space-between' flex={1}>
            <FlatList
                contentContainerStyle={{ paddingBottom: bottom }} //TODO: implement bottom fix
                showsVerticalScrollIndicator={false}
                data={list}
                renderItem={renderItem}
                ListFooterComponent={
                    <PostComentBottom
                        fetchNextPage={fetchNextPage}
                        hasNextPage={hasNextPage}
                    />
                }
            />
            <PostCommentTextMessage postId={postId} onAddComment={refresh}/>
                </Box>
        </Screen>
    )
}
