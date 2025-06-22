import { Text } from '@components'
import { Box } from '../../../../components/Box/Box'
import { PostComment } from '../../../../domain/PostComment/postCommentTypes'
import { ProfileAvatar } from '../../../../components/ProfileAvatar/ProfileAvatar'
import { usePostCommentRemove } from '../../../../domain/PostComment/useCases/usePostCommentRemove'
import { Alert, Pressable } from 'react-native'
import { postCommentService } from '../../../../domain/PostComment/PostCommentService'

interface Props {
    postComment: PostComment,
    userId:number;
    postAuthorId:number
    onRemoveComment:() => void
}
export function PostCommentItem({ postComment ,onRemoveComment, postAuthorId,userId}: Props) {
    const { mutate } = usePostCommentRemove({onSuccess:onRemoveComment})
    const isAllowToDelete = postCommentService.isAllowToDelete(postComment,userId,postAuthorId)

    function confirmRemove() {
        Alert.alert('Deseja excluir o comentario?', 'Precione confirmar', [
            {
                text: 'confirmar',
                onPress: () => mutate({ postCommentId: postComment.id }),
            },
            {
                text: 'Cancelar',
                style: 'cancel',
            },
        ])
    }

    return (
        <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
            <Box flexDirection="row" alignItems="center" marginBottom="s16">
                <ProfileAvatar imageURL={postComment.author.profileURL} />
                <Box marginLeft="s12" flex={1}>
                    <Text preset="paragraphSmall" bold>
                        {postComment.author.userName}
                    </Text>
                    <Text preset="paragraphSmall" color="gray1">
                        {postComment.message} - {postComment.createdAtRelative}
                    </Text>
                </Box>
            </Box>
        </Pressable>
    )
}
