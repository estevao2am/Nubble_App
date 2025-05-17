import { Box } from "../Box/Box"
import { Post } from '../../domain/Post/types';
import { PostHeader } from "./components/PostHeader";
import { PostImage } from "./components/PostImage";
import { PostActions } from "./components/PostActions";


interface Props {
    post:Post
}

export function PostItem({post}:Props) {
    return(
        <Box marginBottom='s24'>
            <PostHeader author={post.author}/>
            <PostImage imageURL={post.imageURL}/>
            <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
         </Box>
         )
       }
     
    
