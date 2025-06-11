import { Text } from "@components"
import { Box } from "../../../../components/Box/Box"
import { PostComment } from "../../../../domain/PostComment/postCommentTypes"
import { ProfileAvatar } from "../../../../components/ProfileAvatar/ProfileAvatar"




interface Props {
    postComment: PostComment
}
export function PostCommentItem({postComment}:Props){
    return(
        <Box flexDirection="row" alignItems="center" marginBottom="s16">
            <ProfileAvatar imageURL={postComment.author.profileURL}/>
            <Box marginLeft="s12" flex={1}>
            <Text preset="paragraphSmall" bold>{postComment.author.userName}</Text>
            <Text preset="paragraphSmall"color="gray1">{postComment.message} - {postComment.createdAtRelative}</Text>

            </Box>
        </Box>
    )
}