import React, { Component } from 'react';
import FollowingComponent from '../FollowingComponent/FollowingComponent'

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';


function getModalStyle() {
  const top = 50,
    left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class FollowingWrap extends Component {
  
  state = {
    open: false,
    selectValues: [
      { value: 0, text: 'None' },
      { value: 1, text: 'Single' },
      { value: 2, text: 'Twin' },
      { value: 3, text: 'Triple' },
      { value: 4, text: 'Quadro' },
    ],
    settings: [
      {
        id: 1,
        type: 1,
        size: 12
      },
      {
        id: 2,
        type: 2,
        size: 22
      },
      {
        id: 3,
        type: 1,
        size: 25
      }
    ]
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleSave = (newState) => {    
    this.setState({ open: false, settings: newState });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal 
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <FollowingComponent 
              handleChange={this.handleChange}
              handleDelete={this.handleDelete}
              handleAdd={this.handleAdd}
              saveAndClose={this.handleSave}
              close={this.handleClose}
              settings={this.state.settings}
              selectValues={this.state.selectValues}/>
          </div>
        </Modal>
        <Button variant="contained" color="primary" onClick={this.handleOpen}>
            Настроить структуру
        </Button>
        <div>
          <pre>
            { JSON.stringify(this.state.settings) }
          </pre>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FollowingWrap);