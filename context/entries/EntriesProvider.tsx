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
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: Complete - Support for RFC4122 version 1, 3, 4, and 5 UUIDs',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'In-progress: Secure - Cryptographically-strong random values',
            status: 'in-progress',
            createdAt: Date.now() - 10000,
        },
        {
            _id: uuidv4(),
            description: 'Finished: Upgrading from uuid@3? Your code is probably okay, but check out Upgrading From uuid@3 for details.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ],
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