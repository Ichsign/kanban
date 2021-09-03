import React from 'react';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/appStateContext";
import { addList } from "./state/actions";

const App = () => {
    const {lists, dispatch} = useAppState();
    return (
        <AppContainer>
            {lists.map((list) => (
                <Column id={list.id} text={list.text} key={list.id}/>
            ))}
            <AddNewItem
                onAdd={text => dispatch(addList(text))}
                toggleButtonText="+ Add another list"
            />
        </AppContainer>
    );
}

export default App;
