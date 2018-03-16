import React, { Component } from 'react'
import 'bootstrap-css-only'

import NewComment from "./NewComment"
import Comments from "./Comments"

class App extends Component {

  constructor(props) {
    super(props)

    this.postNewComment = this.postNewComment.bind(this)
    this.state = {
      comments: {
      },
      isLoggedIn: false,
      user: {}
    }

    this.refComments = this.props.base.syncState('comments', {
      context: this,
      state: 'comments'
    })

    this.props.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ isLoggedIn: true, user })
      } else {
        this.setState({ isLoggedIn: false, user: {} })
      }
    })
  }

  postNewComment(comment) {
    
    comment.user = {
      uid: this.state.user.uid,
      name: this.state.user.displayName
    }

    const comments = { ...this.state.comments }
    const timestamp = Date.now()
    comments[`comm-${timestamp}`] = comment

    this.setState({
      comments: comments
    })

  }
  
  auth(provider){
    if (provider == 'facebook'){
      console.log(this.props.auth().signInWithPopup(this.props.providers))
    }

    // const result = this.props.auth().signInWithPopup(provider)
    // this.setState({ user: result.user });
    // this.props.auth.signInWithPopup(this.props.providers[provider])
  }

  render() {
    return (
      <div className="container">
        { this.state.isLoggedIn && 
          <div>
            <button onClick={() => this.props.auth().signOut()}>Deslogar</button>
            {this.state.user.displayName}
            <img src={this.state.user.photoURL} />
            <NewComment postNewComment={this.postNewComment} />
          </div>
        }

        {!this.state.isLoggedIn && 
          <div className="alert alert-info">
            <button onClick={() => this.auth('facebook')}>Entre com o facebook para comentar</button>
          </div>
        }
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App
