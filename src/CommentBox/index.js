import React from 'react';
import { Grid, Button, Segment, Container} from 'semantic-ui-react';

import GridExampleCelled from '../GridExampleCelled';

// import './CommentBox';
export class Comment extends React.Component {
  render() {
    const segmentStyle = {
      // border: '1px solid pink',
      backgroundColor: 'rgb(88, 123, 231)',
      margin: '20px 100px'
    };

    return (
      <div>
      <p>Author in 'Content' component: {this.props.author}</p>
      <hr/> {/* <p className="panel-body">{this.props.body}</p> */}
      <div>
        <a href="#">
          Delete comment
        </a>
      </div>
      <Segment className="vertical" style={segmentStyle}>Example Segment!! {this.props.body}
      </Segment>

    </div>);
  }
}

export class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: 'Morgan McCircuit',
          body: 'Great picture!'
        }, {
          id: 2,
          author: 'Bending Bender',
          body: 'Excellent stuff'
        }
      ]
    }
  }

  render() {
    const CommentBoxStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      marginTop: '3.5vh'
    };

    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show comments';

    if (this.state.showComments) {
      buttonText = 'Hide comments';
      commentNodes = <div>{comments}</div>;
    }
    return (
      <Segment style={CommentBoxStyle} className="CommentBox">
        <h3>Comments</h3>
        <hr/>
        <h4>{this._getCommentsTitle(comments.length)}</h4>
        {commentNodes}
        <CommentForm addComment={this._addComment.bind(this)}/>
        <Button onClick={this._handleClick.bind(this)}>{buttonText}</Button>
        <br/>
        <br/>
        <GridExampleCelled />
      </Segment>
    );
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (<Comment author={comment.author} body={comment.body} key={comment.id}/>);
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
} {/* TODO: Semantic form */
}

export class CommentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h2 className="text-uppercase">Join the discussion</h2>
        <div>
          <h3 className="text-uppercase">New Comment</h3>
          <input className="form-control form-group" placeholder="What's your name?" ref={(input) => this._author = input}/>
          <textarea className="form-control form-group" placeholder="Join the discussion..." ref={(textarea) => this._body = textarea}></textarea>
          <Button>
            Post comment
          </Button>
        </div>
      </form>
    );
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setSate({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }
}
