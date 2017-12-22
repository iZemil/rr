import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AddBtn from 'material-ui/svg-icons/content/add-circle-outline';
import Navigation from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router-dom';

class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <IconMenu
        iconButtonElement={<IconButton onClick={this.handleToggle}><AddBtn /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        onRequestChange={(open) => this.setState({open})}
        open={this.state.open}
      >
        <Link to="/edit"><MenuItem primaryText="Add task" onClick={ this.handleClose }/></Link>
      </IconMenu>
    );
  }
}

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <IconButton onClick={this.handleToggle}>
          <Navigation />
        </IconButton>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/"><MenuItem primaryText="Tasks" onClick={this.handleClose} /></Link>
          <Link to="/pomodoro"><MenuItem primaryText="Pomodoro Clock" onClick={this.handleClose} /></Link>
          <Link to="/timer"><MenuItem primaryText="Timer" onClick={this.handleClose} /></Link>
          <Link to="/example"><MenuItem primaryText="Example page" onClick={this.handleClose} /></Link>
        </Drawer>
      </div>
    );
  }
}

export default class Header extends Component {

  render() {
    return (
      <AppBar
        className="app-bar"
        title={ this.props.location.pathname.replace(/\//, '') || 'Tasks' }
        iconElementLeft={<LeftMenu />}
        iconElementRight={<RightMenu />}
      />
    );
  }
}
