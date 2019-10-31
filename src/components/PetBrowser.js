import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  mapDiv = () => {
    let pets = this.props.pets;
    return pets.map((pet, i) =>  <div className="ui cards" key={i}><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/></div> )
  } 
  render() {

    return (
      <div>
        {this.mapDiv()}
     </div>
    );
}

}

export default PetBrowser
