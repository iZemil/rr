import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class EditPage extends React.Component {

  render () {
    const { addItemSubmit, handleChangeTitle, titleState } = this.props;

    return (
      <div className="edit-page">
        <div className="container container_dark">
          <h1>Edit page</h1>
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
        </div>
      </div>
    )
  }
}

const styles = {
  button: {
    marginBottom: '10px',
    float: 'right'
  }
}