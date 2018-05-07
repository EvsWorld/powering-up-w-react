import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import { CommentBox } from '../CommentBox';
import NavBar from '../NavBar';

import './App.css';

class App extends Component {
  render() {
  const appStyle = {
    margin:'0',
  }

    return (
      <Grid celled className="App" >
        <Grid.Row verticalAlign='top'>
          <Grid.Column className="no-padding" >
            <NavBar className="ui menu borderless no-padding" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={14}>
            <CommentBox />
          </Grid.Column>
        </Grid.Row>
      </Grid>
  );
  }
}

export default App;
