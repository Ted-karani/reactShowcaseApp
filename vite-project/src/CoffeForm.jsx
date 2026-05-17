import { useState, useEffect } from 'react'
import './CoffeeForm.css'

function CoffeeForm(props) {
  const onSubmit = props.onSubmit
  const editingCoffee = props.editingCoffee
  const onCancelEdit = props.onCancelEdit

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [origin, setOrigin] = useState('')
  const [price, setPrice] = useState('')
  const [location, setLocation] = useState('Location 1')

  useEffect(function () {
    if (editingCoffee) {
      setName(editingCoffee.name)
      setDescription(editingCoffee.description)
      setOrigin(editingCoffee.origin)
      setPrice(editingCoffee.price)
      setLocation(editingCoffee.location)
    }
  }, [editingCoffee])

  function handleSubmit(e) {
    e.preventDefault()

    const coffeeData = {
      name: name,
      description: description,
      origin: origin,
      price: price,
      location: location
    }

    const editId = editingCoffee ? editingCoffee.id : null

    onSubmit(coffeeData, editId)
  }

  return (
    <form className="coffee-form" onSubmit={handleSubmit}>

      <h2 className="form-title">
        {editingCoffee ? 'Edit Product' : 'Add New Product'}
      </h2>

      <div className="form-group">
        <label>Coffee Name</label>
        <input
          type="text"
          placeholder="Type here"
          value={name}
          onChange={function (e) { setName(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Type here"
          value={description}
          onChange={function (e) { setDescription(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Origin</label>
        <input
          type="text"
          placeholder="Type here"
          value={origin}
          onChange={function (e) { setOrigin(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          placeholder="0.00"
          value={price}
          onChange={function (e) { setPrice(e.target.value) }}
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <select
          value={location}
          onChange={function (e) { setLocation(e.target.value) }}
        >
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
          <option value="Location 3">Location 3</option>
          <option value="Location 4">Location 4</option>
        </select>
      </div>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">
          {editingCoffee ? 'Update' : 'Submit'}
        </button>
        {editingCoffee && (
          <button type="button" className="cancel-btn" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>

    </form>
  )
}

export default CoffeeForm