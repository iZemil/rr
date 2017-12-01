import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ListMaker from './../containers/ListMaker';
import Filter from './../containers/Filter';

export default class App extends React.Component {

  render () {
    const { addItemSubmit, handleChangeTitle, titleState } = this.props;

    return (
      <div className="App">
        <div className="task-form__wrapper">
          <div className="container">
            <form
              className="task-form"
              autoComplete="off"
              onSubmit={(e) => addItemSubmit(e)}
            >
              <div className="input-title">
                <TextField
                  className="text-input"
                  name="input"
                  hintText="Write a title..."
                  hintStyle={{color: '#aaa'}}
                  floatingLabelText="Title"
                  floatingLabelStyle={{color: '#fff'}}
                  onChange={(e) => handleChangeTitle(e)}
                  fullWidth={true}
                />
                <div className="input-title__chars" style={{color: titleState > 50 ? 'red' : 'gray'}} >
                  {titleState} / 50
                </div>
              </div>
              <TextField
                className="text-input"
                name="textarea"
                hintText="Write a comment..."
                hintStyle={{color: '#aaa'}}
                floatingLabelText="Comment"
                floatingLabelStyle={{color: '#fff'}}
                multiLine={true}
                fullWidth={true}
              />
              <RaisedButton style={styles.button} label="Add task" fullWidth={true} type="submit" />
            </form>
            <Filter />
          </div>
        </div>
        <div className="container">
          <ListMaker />
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    marginBottom: '10px',
    float: 'right'
  }
}