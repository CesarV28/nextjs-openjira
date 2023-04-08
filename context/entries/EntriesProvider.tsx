import { FC, useEffect, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces/entry';
import { entriesApi } from '@/api';


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
  
  const addNewEntry = async( description: string ) => {
    
    try {

      const { data } = await entriesApi.post<Entry>('/entries', { description } );

      dispatch({ type: '[Entry] Add-entry', payload: data });

    } catch (error) {
      console.log( error );
    }
  }

  const updateEntry = async( { _id, description, status }: Entry ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`,  { description, status });
      
      dispatch({ type: '[Entry] updated-entry', payload: data });
    } catch (error) {
      console.log(error);
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries');

    dispatch({ type: '[Entry] refresh-dataEntries', payload: data });

  }

  useEffect(() => {
    refreshEntries();
  }, [])
  

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