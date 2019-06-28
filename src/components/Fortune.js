import React, { useState } from 'react'
import fortunes from '../data/fortunes'

export default function Fortune() {
  const [fortune, setFortune] = useState(getFortune())

  function getFortune() {
    return fortunes[Math.floor(Math.random() * fortunes.length)]
  }

  function handleClick(e) {
    e.preventDefault()
    setFortune(getFortune())
  }

  return (
    <>
      <div className="fortune">
        <h1 className="fortune-text">{fortune}</h1>
      </div>
      <button className="fortune-reset" onClick={handleClick}>
        &#x21bb;
      </button>
    </>
  )
}
