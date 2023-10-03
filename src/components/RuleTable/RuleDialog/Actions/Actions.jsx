import * as React from 'react';
import "./Actions.scss"
import BorderedSection from "../../../BorderedSection";
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import AddCircle from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Action from './Action/Action'

 function Actions() {
    
    return (
      <BorderedSection className='actions' title="Actions">
        <div className='description-and-add'>
          <span>Execute the following actions (top to bottom)</span>
          <Button className='add-button' variant="outlined" startIcon={<AddCircle/>}>Add action</Button>
        </div>
        <Divider className='divider'/>
        <div>
          <Action></Action>
        </div>
      </BorderedSection>
    );
  }
  
  export default Actions;