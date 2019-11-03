import React from 'react'
import { generateKeyPair } from 'crypto'

class Pet extends React.Component {
  render() {
    const {id, type, gender, age, weight, name, isAdopted } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}{' '}
            {gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
            {/* <p>Gender: {gender.charAt(0).toUpperCase() + gender.slice(1)}</p> */}
          </div>
        </div>
        <div className="extra content">
          { isAdopted ? 
            <button className="ui disabled button">Already adopted</button> :
            <button onClick={() => this.props.onAdoptPet(id)} className="ui primary button">Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
