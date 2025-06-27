import { useState } from 'react'
import { usePostCommentCreate } from '../../../../domain/PostComment/useCases/usePostCommentCreate'
import { TextMessage } from '../../../../components/TextMessage/TextMessage'
import { Keyboard } from 'react-native'



interface Props {
    postId: number,
}
export function PostCommentTextMessage({ postId }: Props) {
    const [message, setMessage] = useState('') 
    const { createComment } = usePostCommentCreate(postId,{onSuccess:()=>{
        setMessage('')
        Keyboard.dismiss()
    }}) // hook que faz a chamada da api

  

    return (
        <TextMessage
            value={message}
            onChangeText={setMessage}
            onPressSend={createComment}
            placeholder="Adicione um comentario"
        />
    )
}
