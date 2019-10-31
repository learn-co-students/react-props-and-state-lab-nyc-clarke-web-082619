import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
    }
  }

  onChangeType = (event) => {
    this.setState({
      filters:{
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let url;
    let type = this.state.filters.type
    console.log(type)

    if (type === 'cat'){
      url = '/api/pets?type=cat';
    }else if (type === 'dog'){
      url = '/api/pets?type=dog';
    }else if (type === 'micropig'){
      url = '/api/pets?type=micropig';
    }else{
      url = '/api/pets';
    }

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  onAdoptPet = (id) => {
    let newPets = this.state.pets.map(pet => {
      if(pet.id == id){
        return {...pet, isAdopted:true}
      }else{
       return pet
      }
    });
    this.setState({pets: newPets})
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
