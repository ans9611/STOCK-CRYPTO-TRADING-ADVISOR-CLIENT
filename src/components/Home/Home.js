import React from 'react'
import { Col } from 'react-bootstrap'

export default function Home () {
  return (
    <div className='text-center'>
      <div style={{ height: '50vh' }}>
        <h1
          className='animated'
          style={{
            marginTop: '50vh',
            color: 'primary',
            textDecoration: 'none'
          }}>
        Make Investment!
        </h1>
      </div>
      <div>
        <Col>
          <p style={{ color: 'blue', fontSize: '34px' }}>
          Make Investment!
          </p>
        </Col>
      </div>
    </div>
  )
}
