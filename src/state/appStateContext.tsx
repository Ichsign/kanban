import {
  createContext, Dispatch, useContext, useEffect,
} from 'react';
import { useImmerReducer } from 'use-immer';
import { Action } from './actions';
import {
  Task, List, AppState, appStateReducer,
} from './appStateReducer';
import { DragItem } from '../dragItem';
import { withInitialState } from '../withInitialState';
import { save } from '../api';

type AppStateContextProps = {
  draggedItem: DragItem | null
  lists: List[]
  getTasksByListId(id: string): Task[]
  dispatch: Dispatch<Action>
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
);

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
};

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const [state, dispatch] = useImmerReducer(
      appStateReducer,
      initialState,
    );

    useEffect(() => {
      save(state);
    }, [state]);

    const { draggedItem, lists } = state;
    const getTasksByListId = (id: string) => lists.find((list) => list.id === id)?.tasks || [];

    return (
      <AppStateContext.Provider
        value={{
          draggedItem, lists, getTasksByListId, dispatch,
        }}
      >
        {children}
      </AppStateContext.Provider>
    );
  },
);

export const useAppState = () => useContext(AppStateContext);

/* const appData: AppState = {
    draggedItem: null,
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{id: "c0", text: "Generate app scaffold"}]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{id: "c2", text: "Learn TypeScript"}]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{id: "c3", text: "Begin to use static typing"}]
        }
    ]
} */
