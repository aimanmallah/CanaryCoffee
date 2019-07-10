import React from 'react'

class Footer extends React.Component {
  render() {
    return(

      <section>
        <div className="columns black">

          <div className="column is-one-third">
            <h3 className='title is-2'> Address </h3>
            <p>25 Shaftesbury Ave</p>
            <p>London</p>
            <p>EC2H 8EG</p>
          </div>

          <div className="column is-one-third">
            <h3 className='title is-2'> Contact </h3>
            <p>contact@canarycoffee.com</p>
            <p>020 7510 5400</p>
          </div>

          <div className="column is-one-third">
            <h3 className='title is-2'> Hours </h3>
            <p>Weekdays: 08:00 - 20:00</p>
            <p>Saturday: 10:00 - 18:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

      </section>
    )
  }
}

export default Footer
