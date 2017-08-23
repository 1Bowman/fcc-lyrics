import React, { Component } from 'react'
import { Button, FormGroup, FormControl } from 'react-bootstrap'

const requestCall = async() => {
  const res = await fetch('http://localhost:5000/api/v1/lmfao/shots')
  const json_res = await res.json()
  return json_res
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'artist': '',
      'song': '',
      'response': {},
    }
  }

  async componentDidMount(){
    try{
        const json_response = await requestCall()
        console.log(json_response)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lyrics Search</h2>
        </div>
        <div>
          <form>
            <FormGroup>
              <FormControl type="text" placeholder="Artist"></FormControl>
            </FormGroup>

            <FormGroup>
              <FormControl type="text" placeholder="Song Title"></FormControl>
            </FormGroup>

            <FormGroup>
              <Button bsStyle="primary" onClick={() => console.log('clicked')}>Search</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
