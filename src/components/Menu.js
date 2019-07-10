import React from 'react'
// import ReactDOM from 'react-dom'

import MenuCard from './MenuCard'

class Menu extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          id: '1',
          name: 'Espresso',
          description: 'The espresso (aka “short black”) is the foundation and the most important part to every espresso based drink.',
          image: '../images/Espresso.jpg'
        },
        {
          id: '2',
          name: 'Double Espresso',
          description: 'A double espresso (aka “Doppio”) is just that, two espresso shots in one cup.',
          image: '../images/Double_Espresso.jpg'
        },
        {
          id: '3',
          name: 'Short Macchiato',
          description: 'A short macchiato is similar to an espresso but with a dollop of steamed milk and foam to mellow the harsh taste of an espresso.',
          image: '../images/Small_Macchiato.jpg'
        },
        {
          id: '4',
          name: 'Long Macchiato',
          description: 'A long macchiato is the same as a short macchiato but with a double shot of espresso.',
          image: '../images/Macchiato.jpg'
        },
        {
          id: '5',
          name: 'Americano',
          description: 'An Americano (aka “long black”) is hot water with an espresso shot extracted on top of the hot water.',
          image: '../images/Americano.jpg'
        },
        {
          id: '6',
          name: 'Café Latte',
          description: 'A café latte, or “latte” for short, is an espresso based drink with steamed milk and micro-foam added to the coffee. This coffee is much sweeter compared to an espresso due to the steamed milk.',
          image: '../images/Latte.jpg'
        },
        {
          id: '7',
          name: 'Cappuccino',
          description: 'A cappuccino is similar to a latte. However the key difference between a latte and cappuccino is that a cappuccino has more foam and chocolate placed on top of the drink.',
          image: '../images/Cappuccino.jpg'
        },
        {
          id: '8',
          name: 'Flat White',
          description: 'A flat white is a coffee you’ll primarily find in Australia and New Zealand. It is made the same as a cappuccino expect it does not have any foam or chocolate on top.',
          image: '../images/Flat_White.jpg'
        },
        {
          id: '9',
          name: 'Mocha',
          description: 'A mocha is a mix between a cappuccino and a hot chocolate. It is made by putting mixing chocolate powder with an espresso shot and then adding steamed milk and micro-foam into the beverage.',
          image: '../images/Mocha.jpg'
        }
      ]
    }
  }

  render() {
    console.log(this.state)
    return(
      <section id='menu' className='Menu'>
        <h3 className='title is-1'> Specialties </h3>
        <div className="columns is-multiline">

          {this.state.data.map(drink =>
            <div key={drink.id} className="column is-one-third-desktop is-half-tablet">
              <MenuCard {...drink} />
            </div>
          )}

        </div>
      </section>
    )
  }
}

export default Menu
