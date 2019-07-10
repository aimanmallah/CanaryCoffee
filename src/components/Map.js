import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWltYW5vcyIsImEiOiJjanZtOXg5c3YxNnozNDltbHZ6cWM1OXpmIn0.ohog9SQ0ImDWOTTIKitI7Q'
})

class CoffeeMap extends React.Component {
  constructor() {
    super()

    this.state = {
      longitude: -0.0115,
      latitude: 51.5014
    }
  }

  render() {
    return (

      <section className='Map' style={{
        backgroundImage: 'url(../images/Background.jpg)'
      }}>
        <h3 className='title is-1'> Location </h3>
        <div className="columns is-multiline is-centered">

          <div className="column is-two-thirds">
            <Map
              className="mapbox"
              style='mapbox://styles/mapbox/streets-v8'
              center={[this.state.longitude, this.state.latitude]}
              zoom={[13]}
              containerStyle={{
                height: '50vh',
                width: '50vw'
              }}
            >
              <Marker className="marker"
                coordinates={[this.state.longitude, this.state.latitude]}
                anchor="bottom">
                <img src={'../images/Map_Icon.png'}
                />
              </Marker>
            </Map>
          </div>

        </div>
      </section>
    )
  }

}

export default CoffeeMap
