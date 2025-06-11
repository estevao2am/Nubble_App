import { Text } from "@components";
import { Pressable } from "react-native";

interface Props {
    fetchNextPage: () => void;
    hasNextPage:boolean
}

export function PostComentBottom({fetchNextPage,hasNextPage}:Props){

    if (hasNextPage){ 
  return(
        <Pressable onPress={fetchNextPage}>
            <Text color="primary" bold textAlign="center"> Ver mais</Text>
        </Pressable>
    )
    }
    else 
    return null
  
}