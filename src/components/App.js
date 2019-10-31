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
    // let updateAdoptedPets = this.state.pets.map(pet => {
    //   return pet.id === id ? {...pet, isAdopted: true} : pet
    // })
    // this.setState({ updateAdoptedPets })

    // let updateAdopted = this.state.pets.map(pet => {
    //   return pet.id === id ? {...pet, isAdopted: true} : pet
    // })
    // this.setState({updateAdopted})

    let updateAdopted = this.state.pets.map(pet => {
      return pet.id === id ? Object.assign(pet, {isAdopted: true}) : pet
    })  
    this.setState({updateAdopted})

  }

  onChangeType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }      
    })
    // console.log(this.state)
  }

  onFindPetsClick = () => {
    this.setState({
      pets: []
    })
    let fetchUrl = '';
    this.state.filters.type === 'all' ? fetchUrl = '/api/pets' : fetchUrl=('/api/pets?type='+this.state.filters.type);

    fetch(fetchUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: [...this.state.pets, ...data]
      })
      // console.log(data)
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} type={this.state.filters.type}/>
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
