import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";

interface ColumnProps {
    text: string
}

export const Column: FC<ColumnProps> = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                onAdd={console.log}
                toggleButtonText="+ Add another task"
                dark
            />
        </ColumnContainer>
    )
}
