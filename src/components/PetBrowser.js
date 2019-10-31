import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets() {
    // let filteredPets = this.props.pets.filter(pet => pet.type === this.props.filters.type )
    // console.log(this.props)
    // return (
    //   filteredPets.map((pet, i) => {
    //     return <Pet key={i} pet={pet} />
    //   })
    // )

    return (
      this.props.pets.map((pet, i) => {
        return <Pet key={i} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
      })
    )
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    )
  }
}

export default PetBrowser
