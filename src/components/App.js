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
      }
    }
  }
  
  onAdoptPet = (id) => {
    let pets = this.state.pets.map( pet => {
      return pet.id === id ? {...pet, isAdopted: true } : pet
    })
    this.setState({
      pets: pets
    })
  }
  

  onChangeType = ({target: {value}}) => {
    this.setState({
      filters: {
        ...this.state.filters, type: value 
      }
    })
  }

  fetchAnimals = () => {
    let petURL = '/api/pets';

    if (this.state.filters.type !== 'all') {
      petURL += `?type=${this.state.filters.type}`;
    }
    
    fetch(petURL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  render() {
    // console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
              onChangeType={this.onChangeType} 
              onFindPetsClick={this.fetchAnimals}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default App
