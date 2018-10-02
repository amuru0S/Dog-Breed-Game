import React, { Component } from 'react'
import request from 'superagent';
import Answers from './Answers';
import { connect } from 'react-redux'
import store from '../store'

let images = []
let breeds = []

class ContainerApp extends Component {

  ADD_IMG_TO_STORE = (images) => {
    return {
      type:'ADD_IMG_TO_STORE',
      payload: images
    }
  }

  ADD_BREEDS_TO_STORE = (images) => {
    return {
      type: 'ADD_BREEDS_TO_STORE',
      payload: breeds
    }
  }

  componentDidMount(){
      request
          .get("https://dog.ceo/api/breeds/image/random/3")
          .then(response => (images.push(response.body.message)))
          .catch(console.error)
      store.dispatch(this.ADD_IMG_TO_STORE)
      breeds = images.map(url => url.split('/'))[4] 

  }

  render() {
      return (
      <div>
          {console.log(images)}
          <Answers />
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images,
    breeds: state.breeds,
  }
}

export default connect(mapStateToProps)(ContainerApp)

