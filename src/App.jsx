import { Suspense, use } from 'react'
import './App.css'
import Countries from './components/countires/Countries'

const countriesPrimise = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

function App() {
  return (
    <>
      <div className="container mainCard">
        
          <Suspense fallback={<p>⌛Loading data...</p>}>
            <Countries countriesPrimise={countriesPrimise}></Countries>
          </Suspense>

      </div>
    </>
  )
}

export default App
