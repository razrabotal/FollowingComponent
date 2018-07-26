import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  closeButton: {
    width: "40px",
    height: "40px",
    backgroundColor: red[50]
  },
  typeSelect: {
    marginRight: "16px", 
    width: "120px"
  },
  sizeInput: {
    width: "50px",
    marginRight: "8px"
  }
});

const InputsGroup = ( props ) => (
  <div>
    <Select
      className={props.classes.typeSelect}
      value={props.item.type}
      onChange={e => props.change(e, props.item.id)}
      name="type">
      { props.selectValues.map((item) => (
        <MenuItem value={item.value}>{item.text}</MenuItem>
      ))}
    </Select>

    <TextField
      id="number"
      value={props.item.size || ''}
      onChange={e => props.change(e, props.item.id)}
      type="number"
      name="size"
      className={classNames(props.classes.textField, props.classes.sizeInput)}
      margin="normal"
    />
  
    <IconButton 
      color="secondary" 
      className={classNames(props.classes.button, props.classes.closeButton)} 
      aria-label="Delete" 
      onClick={() => props.delete(props.item.id)}>
      <CloseIcon />
    </IconButton>
  </div>
)

export default withStyles(styles)(InputsGroup);