import React, { useState } from 'react'
import fortunes from '../data/fortunes'

export default function Fortune() {
  const [fortune, setFortune] = useState()

  function getFortune(e) {
    e.preventDefault()
    setFortune(fortunes[Math.floor(Math.random() * fortunes.length)])
  }

  return (
    <>
      <div className="fortune">
        {fortune ? (
          <h1 className="fortune-text">{fortune}</h1>
        ) : (
          <button className="fortune-button" onClick={getFortune}>
            Fortunez 4 free
          </button>
        )}
      </div>
      {fortune ? (
        <button className="fortune-reset" onClick={getFortune}>
          &#x21bb;
        </button>
      ) : null}
    </>
  )
}
