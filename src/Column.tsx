import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import {Card} from "./Card";

interface ColumnProps {
    text: string
    index: number
    id: string
}

export const Column: FC<ColumnProps> = ({ text, index, id }: ColumnProps) => {
    const { state, dispatch } = useAppState();

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            { state.lists[index].tasks.map((task, i) => (
                <Card text={task.text} key={task.id} index={i} />
            ))}
            <AddNewItem
                onAdd={text => dispatch({ type: "ADD_TASK", payload: { text, taskId: id}})}
                toggleButtonText="+ Add another task"
                dark
            />
        </ColumnContainer>
    )
}
