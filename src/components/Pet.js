import React from 'react'

class Pet extends React.Component {

  genderSymbol = () => {
    if (this.props.pet.gender == 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  showAdoptButton = (id) => {
    let {isAdopted} = this.props.pet;

    if (isAdopted) {
      return  <button className="ui disabled button">Already adopted</button>
    } else {
      return <button 
      onClick={event => this.props.onAdoptPet(id)}
      className="ui primary button">Adopt pet</button>
    }
    
  }

  render() {

    let { name, age, weight, adopted, type, id } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.genderSymbol()}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui disabled button">Already adopted</button>
          <button 
          onClick={event => this.props.onAdoptPet(id)}
          className="ui primary button">Adopt pet</button> */}
          {this.showAdoptButton(id)}
        </div>
      </div>
    )
  }
}

export default Pet
