// this is the admin part so i create a form for the admin with name description price origin 
// also below that its the now part where admin can delete the coffee and update
// i create update if possible ill try fro canvas and research
// i write my functions here


import { useState } from 'react'
import { useShop } from './Context'
import CoffeeForm from './CoffeeForm'
import ProductCard from './ProductCard'

function Admin() {
  const { coffeeList, loading, error, addCoffee, updateCoffee, deleteCoffee } = useShop()

  const [editingCoffee, setEditingCoffee] = useState(null)

  if (loading) {
    return <p className="admin-status">Loading...</p>
  }

  if (error) {
    return <p className="admin-status">Error: {error}</p>
  }

  function handleFormSubmit(coffeeData, editId) {
    if (editId) {
      updateCoffee(editId, coffeeData)
    } else {
      addCoffee(coffeeData)
    }
    setEditingCoffee(null)
  }

  function handleDelete(id) {
    deleteCoffee(id)
    if (editingCoffee && editingCoffee.id === id) {
      setEditingCoffee(null)
    }
  }

  function handleEdit(coffee) {
    setEditingCoffee(coffee)
  }

  function handleCancelEdit() {
    setEditingCoffee(null)
  }

  return (
    <div className="admin-page">

      <CoffeeForm
        onSubmit={handleFormSubmit}
        editingCoffee={editingCoffee}
        onCancelEdit={handleCancelEdit}
      />

      <section className="admin-list">
        <h2 className="admin-list-title">Manage Products</h2>
        <div className="admin-grid">
          {coffeeList.map(function (coffee) {
            return (
              <ProductCard
                key={coffee.id}
                coffee={coffee}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default Admin