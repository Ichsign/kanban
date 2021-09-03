import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/appStateContext";
import {Card} from "./Card";
import {addTask} from "./state/actions";

type ColumnProps = {
    text: string
    id: string
}

export const Column: FC<ColumnProps> = ({ text, id }: ColumnProps) => {
    const { getTasksByListId, dispatch } = useAppState();
    const tasks = getTasksByListId(id);

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {
                tasks.map((task) => (
                    <Card text={task.text} key={task.id} id={task.id}/>
                ))
            }
            <AddNewItem
                onAdd={text => dispatch(addTask(text, id))}
                toggleButtonText="+ Add another task"
                dark
            />
        </ColumnContainer>
    )
}
