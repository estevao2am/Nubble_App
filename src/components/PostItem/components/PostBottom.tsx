import {Text} from '../../../components/Text/Text';
import {Post} from '../../../domain/Post/postTypes';
import {Box} from '../../../components/Box/Box';

type Props = Pick<Post, 'author' | 'text' | 'commentCount'>;

export function PostBottom({author, text, commentCount}: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box marginTop="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text preset="paragraphSmall" color="primary" bold marginTop="s8">
          Ver {commentCount} Comentarios
        </Text>
      )}
    </Box>
  );
}

// criar função para renderizar a descrição do post

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'Ver Comentario '
  } else {
    return `ver ${commentCount} comentarios`;
  }
}
