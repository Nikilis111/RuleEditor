import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import "./RuleDialog.scss";
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function RuleDialog({ onClose, onSave, onDelete, rule }) {
  
  const [activeRule, setActiveRule] = React.useState(rule);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    onSave(activeRule); 
    onClose();
  };

  const handleDelete = () => {
    onDelete(activeRule); 
    onClose();
  };

  const handleRuleChange = (event) => {
    const newActiveRule = {
      id: activeRule.id,
      rule: event.target.value,
      description: activeRule.description
    };
    setActiveRule(newActiveRule);
  }

  const handleDescriptionChange = (event) => {
    const newActiveRule = {
      id: activeRule.id,
      rule: activeRule.rule,
      description: event.target.value
    };
    setActiveRule(newActiveRule);
  }

  return (
    <Dialog open={true} onClose={handleClose} className='rule-dialog'>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Rule"
          type="text"
          fullWidth
          variant="standard"
          value={activeRule.rule}
          onChange={handleRuleChange}
        />
        <TextField
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={activeRule.description}
          onChange={handleDescriptionChange}
        />
      </DialogContent>
      <DialogActions className='action-buttons'>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
        {rule.rule && <Button onClick={handleClickOpen} className='delete-button' color="error">Delete</Button>}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClickClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Deleting the rule"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              This action will permanently delete this rule.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClickClose}>
              cancel
            </Button>
            <Button onClick={handleDelete} autoFocus>
              delete
            </Button>
          </DialogActions>
          </Dialog>
          </DialogActions>
        </Dialog>
  );
}

  export default RuleDialog;