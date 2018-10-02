import React, { Component } from 'react'

const imgDummy = ["https://images.dog.ceo/breeds/collie/n02106030_15829.jpg","https://images.dog.ceo/breeds/bulldog-boston/n02096585_2821.jpg"]
const breedDummy = imgDummy.map(url => url.split('/') ) 


export default class Answers extends Component {
  render() {
    return (
      <div>
        <p className="answer1">{breedDummy[0][4]}</p>
        <p className="answer2">{breedDummy[1][4]}</p>
        <p className="answer3">{/* one of the answers has to shoe here*/}</p>
      </div>
    )
  }
}
