import React, {FC} from "react";
import { CardContainer } from "./styles";

type CardProps = {
    text: string
    id: string
}

export const Card: FC<CardProps> = ({ text, id }: CardProps) => {
    return (
        <CardContainer>{text}</CardContainer>
    )
}
