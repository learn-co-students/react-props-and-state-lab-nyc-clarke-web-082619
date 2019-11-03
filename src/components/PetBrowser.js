import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map( (pet, i) => {
    return < Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    })
  }

  render() {
    return (
      <div 
        className="ui cards">
        {this.renderPets()}
        {/* PET COMPONENT SHOULD GO HERE */}
      </div>
    )
  }
}

export default PetBrowser
