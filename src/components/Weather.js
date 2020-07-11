import React from 'react'

const Weather = ({ result }) => {
  const { name, main } = result

  if (!name) return null

  // Kelvin degrees
  const kelvin = 273.15

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Clima en {name}</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(1)} <span>&#x2103;</span>
        </p>
        <p>
          {' '}
          Max.
          {parseFloat(main.temp_max - kelvin, 10).toFixed(1)}{' '}
          <span>&#x2103;</span>
        </p>
        <p>
          {' '}
          Min.
          {parseFloat(main.temp_min - kelvin, 10).toFixed(1)}{' '}
          <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

export default Weather