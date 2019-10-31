import React from 'react'

class Pet extends React.Component {

  gender = () => {
    return (this.props.pet.gender === 'male'? '♂':'♀')
  }

  renderButton = () => {
    return (
      this.props.pet.isAdopted ?
      <button className="ui disabled button">Already adopted</button>
      :
      <button className="ui primary button" onClick={()=>this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    )
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.gender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
