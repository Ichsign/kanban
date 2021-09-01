import React, {FC} from "react";
import { CardContainer } from "../styles";

interface CardProps {
    text: string
}

export const Card: FC<CardProps> = ({ text }: CardProps) => {
    return (
        <CardContainer>{text}</CardContainer>
    )
}
