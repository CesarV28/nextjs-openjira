import { Button, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import { Box } from "@mui/system";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';


export const NewEntry = () => {

  const { addNewEntry } = useContext( EntriesContext );
  const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );

  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const onTextFieldChanges = ( e: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( e.target.value );
  }

  const onSave = () => {
    if( inputValue.length === 0 ) return;
    
    addNewEntry( inputValue );
    setInputValue('');
    setIsAddingEntry( false );
    setIsTouched( false );
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
        
        {isAddingEntry 
            ? (<>
                <TextField
                    fullWidth
                    sx={{ marginTop: 2, marginBottom: 1 }}
                    placeholder='New entry'
                    autoFocus
                    multiline
                    label='New entry'
                    helperText={ (inputValue.length <= 0 && isTouched) && 'Add some text'}
                    error={ inputValue.length <= 0 && isTouched }
                    value={ inputValue }
                    onChange={ onTextFieldChanges }
                    onBlur={ () => setIsTouched( true ) }
                />

                <Box display='flex' justifyContent={'space-between'}>
                    <Button
                        variant="text"
                        color="warning"
                        onClick={ () => setIsAddingEntry( false )}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="outlined"
                        color="secondary"
                        endIcon={ <SaveIcon/> }
                        onClick={ onSave }
                    >
                        Save
                    </Button>
                </Box>
              </>)
            :   <Button
                    startIcon={ <AddCircleOutlineIcon/> }
                    fullWidth
                    variant="outlined"
                    onClick={ () => setIsAddingEntry( true )}
                >
                    Add new Task
                </Button>
        }

    </Box>
  )
}
