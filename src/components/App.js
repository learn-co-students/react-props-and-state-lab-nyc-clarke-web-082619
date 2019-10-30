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
    // fetch(`/api/pets/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({
    //     isAdopted: true
    //   })
    // })
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({...this.state.pets, data})})
    // .catch(console.log('Error'))

    let updatedPets = this.state.pets.map(pet => {
      if (pet.id == id ){ 
        return {...pet, isAdopted: true}
      } else return {
        pet
      }
    })

    this.setState({ pets: updatedPets})



  }

  onChangeType = ({target: { value }}) => {
    this.setState({ filters: {...this.state.filters, type: value }})
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type;

    console.log("type:", type);

    if ((type === 'cat' || type === 'dog') || type === 'micropig'){
      console.log(`fetching from /api/pets?type=${type}`)
      fetch(`/api/pets?type=${type}`)
      .then(res => res.json())
      .then(json => this.setState({ pets: json}))
      .then(console.log(this.state.pets))
    } else {
      console.log(`fetching from /api/pets`)
      fetch("/api/pets")
      .then(res => res.json())
      .then(json => this.setState({ pets: json }))
      .then(console.log(this.state.pets))
    }



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
             x <Filters 
              onFindPetsClick={this.onFindPetsClick} 
              onChangeType={this.onChangeType}/>
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
