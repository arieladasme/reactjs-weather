import React, { useState } from 'react'

const Form = ({ search, saveSearch, saveQuery }) => {
  const [error, saveError] = useState(false)

  const { city, country } = search

  // save in started
  const handleChange = e => {
    saveSearch({ ...search, [e.target.name]: e.target.value })
  }

  // Form submit
  const handleSubmit = e => {
    e.preventDefault()

    // Validate
    if (city.trim() === '' || country.trim() === '') {
      saveError(true)
      return
    }
    saveError(false)
    saveQuery(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">Todos los campos son obligatorios</p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad:</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">--Seleccione pais--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="CL">Chile</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Pais:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar clima"
          className="waves-effect waves-light btn-large btn-block yellow aaccent-4"
        />
      </div>
    </form>
  )
}

export default Form
