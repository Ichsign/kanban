import React, {FC} from "react";
import { CardContainer } from "./styles";

interface CardProps {
    text: string
    index: number
}

export const Card: FC<CardProps> = ({ text, index }: CardProps) => {
    return (
        <CardContainer>{text}</CardContainer>
    )
}
