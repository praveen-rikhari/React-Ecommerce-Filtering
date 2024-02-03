import React, { useState } from 'react'
import Nav from './Navigation/Nav';

function App() {

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange} />
    </>
  )
}

export default App