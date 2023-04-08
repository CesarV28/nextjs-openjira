import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';


export interface EntriesState {
    entries: Entry[];
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
}


export const EntriesProvider:FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE);
  
  const addNewEntry = ( description: string ) => {
    const newEntry: Entry = {
        _id: uuidv4(),
        description,
        createdAt: Date.now(),
        status: 'pending'
    }

    dispatch({ type: '[Entry] Add-entry', payload: newEntry });
  }

  const updateEntry = ( entry: Entry ) => {
    dispatch({ type: '[Entry] updated-entry', payload: entry });
  }

  return (
      <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
      }}>
            { children }
      </EntriesContext.Provider>
    )
}