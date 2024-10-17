import { Text } from "react-native";

//arquivos internos
import { Product } from "../types/product";


type Props = {
    data: Product;
}

export const ProductItem = ({data}:Props)=>{
    return (
        <Text>{data.title}</Text>
    )
}