import React, { Fragment, useState, useEffect } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Weather from './components/Weather'
import Error from './components/Error'

function App() {
  const [search, saveSearch] = useState({
    city: '',
    country: '',
  })

  const [query, saveQuery] = useState(false)
  const [result, saveResult] = useState({})
  const [error, saveError] = useState(false)

  const { city, country } = search

  useEffect(() => {
    const queryAPI = async query => {
      const appId = '45b7ebdd7eb9f57b79dc91ea820eb51d'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

      const response = await fetch(url)
      const result = await response.json()

      saveResult(result)
      saveQuery(false)

      // Validate result
      if (result.cod === '404') {
        saveError(true)
      } else {
        saveError(false)
      }
    }

    if (query) {
      queryAPI()
    }
    // eslint-disable-next-line
  }, [query])

  let component

  if (error) {
    component = <Error message="Ciudad no encontrada" />
  } else {
    component = <Weather result={result} />
  }

  return (
    <Fragment>
      <Header title="Weather APP" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveQuery={saveQuery}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
