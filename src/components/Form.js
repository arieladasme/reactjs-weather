import React, { useState } from 'react'

const Form = () => {
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  })

  const { city, country } = search

  // save in started
  const handleChange = e => {
    saveSearch({ ...search, [e.target.name]: e.target.value })
  }

  return (
    <form>
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
    </form>
  )
}

export default Form
