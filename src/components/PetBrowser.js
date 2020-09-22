import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  displayPet = () => {
    return(
    this.props.pets.map(pet => {
      return <Pet key={pet.id} onAdoptPet={this.props.onAdoptPet} pet={pet}  />
    }
    )
    )
  }

  render() {
    return <div className="ui cards">{this.displayPet()}</div>
  }
}

export default PetBrowser
