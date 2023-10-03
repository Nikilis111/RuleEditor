import * as React from 'react';
import "./Action.scss"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ActionsTypes = [
    { label: '1'},
    { label: '2'},
    { label: '3'},
    { label: '4'},
  ];

function Action() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
      <div className="action">
        <Autocomplete
            className='auto-complete'
            disablePortal
            id="combo-box-demo"
            options={ActionsTypes}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Object" />}
        />
        <Box sx={{ minWidth: 120 }} className='action'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Action</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
            >
                    <MenuItem value={10}>Assign</MenuItem>
                    <MenuItem value={20}>Call</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box
            className='Value'
            component="form"
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Value" variant="outlined" />
        </Box>
        <IconButton aria-label="delete" size="large">
            <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
    );
  }
  
  export default Action;