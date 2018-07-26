import React, { Component } from 'react';
import InputsGroup from '../../components/InputsGroup/InputsGroup'
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    marginBottom: "8px",
    backgroundColor: "#eee",
    borderBottom: "1px solid #ccc",
  },
  inputsGroupWrapper: {
    margin: "0 16px 8px",
    maxHeight: "400px",
    overflow: "auto"
  }
});

class FollowingComponent extends Component {
  

  state = {
    settings: (this.props.settings) ? [...this.props.settings] : [],
    sizeLimit: 4
  };


  getLastItemId() {
    return this.state.settings[this.state.settings.length - 1].id;
  }

  handleAdd = () => {
    const initialObject = {
      id: this.getLastItemId() + 1,
      type: 0
    }
    this.setState({ settings: [...this.state.settings, initialObject ] });
  }

  handleDelete = id => {
    const newSettings = this.state.settings.filter(item => (item.id !== id));
    this.setState({ settings: newSettings });
  };

  changeType(item, name, value) {
    let newItem = {...item}

    switch(name) {
      case "type": 
        newItem[name] = value; 
        break;

      case "size": 
        const newSize = Math.max(0, parseInt(value, 10))
          .toString()
          .slice(0, this.state.sizeLimit)
        newItem[name] = newSize;
        break;
        
      default:;
    }

    return newItem;
  }

  handleChange = (event, id) => {  
    const name = event.target.name,
          value = event.target.value;
    
    const newSettings = this.state.settings.map(item => 
      (item.id === id) ? this.changeType(item, name, value) :  item);

    this.setState({ settings: newSettings })
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classNames(classes.headerWrapper)}>
          <Typography 
            variant="title" 
            id="modal-title">
            Структура номеров
          </Typography>

          <IconButton 
            className={classes.button} 
            onClick={this.props.close} 
            aria-label="Close">
            <CloseIcon />
          </IconButton>
        </div>

        <div className={classes.inputsGroupWrapper}>
          {this.state.settings.map((item, index) => (
            <InputsGroup 
              key={item.id}
              item={item} 
              selectValues={this.props.selectValues || []}
              change={this.handleChange} 
              delete={this.handleDelete}/>
          ))}
        </div>
     
        <Button 
          color="primary"
          onClick={this.handleAdd} 
          className={classes.button}>
          Добавить
        </Button>

        <div className={classes.footerWrapper}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => this.props.saveAndClose(this.state.settings)}
            className={classes.button}>
            Сохранить
          </Button>

          <Button 
            className={classes.button} 
            onClick={this.props.close}>
            Отмена
          </Button>
        </div>
      </div>
    )}
}

export default withStyles(styles)(FollowingComponent);