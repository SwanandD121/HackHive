import React from 'react'
import "./Search.css"

export default function Search() {
  return (
    <div className="search">
        <input className='dark:placeholder:text-white/35 border border-black dark:border-white' type="text" id='search-bar' placeholder='Search for Hackathons' />
        <button>Search</button>
    </div>
  )
}
