import React, { useState } from 'react'

const OpenForm = () => {

       const [isOpen, setIsOpen] = useState(false);



  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      
      {/* 2. Create the clickable link that toggles state */}
      <a 
        href="#add-form" 
        onClick={(e) => {
          e.preventDefault(); // Prevents the browser from reloading or changing URL hash
          setIsOpen(true);    // Sets state to true to open the form
        }}
      >
        + Add New Item
      </a>

      {/* 3. Use short-circuit conditional rendering to show the form */}
      {isOpen && (
        <form style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h3>Add Item Form</h3>
          <div>
            <label>Item Name: </label>
            <input type="text" placeholder="Enter name" />
          </div>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setIsOpen(false)} style={{ marginLeft: '10px' }}>
            Cancel
          </button>
        </form>
      )}
    </div>
  )
}

export default OpenForm