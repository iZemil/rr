import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AddBtn from 'material-ui/svg-icons/content/add-circle-outline';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const Menu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><Navigation /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <Link to="/"><MenuItem primaryText="Заметки" /></Link>
    <Link to="/таймер"><MenuItem primaryText="Таймер" /></Link>
    <Link to="/пример"><MenuItem primaryText="Пример" /></Link>
  </IconMenu>
);

const AddMenu = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><AddBtn /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/edit"><MenuItem primaryText="Add simple task" /></Link>
  </IconMenu>
);

Menu.muiName = 'IconMenu';

export default class Header extends Component {

  render() {
    return (
      <AppBar
        className="app-bar"
        title={ this.props.location.pathname.replace(/\//, '') || 'заметки' }
        iconElementLeft={<Menu />}
        iconElementRight={<AddMenu />}
      />
    )
  }
}
