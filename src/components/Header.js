import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><Navigation /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <Link to="/заметки"><MenuItem primaryText="заметки" /></Link>
    <Link to="/таймер"><MenuItem primaryText="таймер" /></Link>
    <Link to="/пример"><MenuItem primaryText="Пример" /></Link>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

export default class Header extends Component {

  render() {
    return (
      <AppBar
        title={ this.props.location.pathname.replace(/\//, '') }
        iconElementLeft={<Logged />}
        iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
      />
    )
  }
}
