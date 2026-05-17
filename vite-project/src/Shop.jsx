import { useState } from 'react'
import { useShop } from './Context'
import Sidebar from './Sidebar'
import ProductCard from './ProductCard'

function Shop() {
  const { coffeeList, loading, error } = useShop()

  const [searchText, setSearchText] = useState('')
  const [selectedLocations, setSelectedLocations] = useState([])

  if (loading) {
    return <p className="shop-status">Loading products...</p>
  }

  if (error) {
    return <p className="shop-status">Error: {error}</p>
  }

  const coffeesToShow = []

  for (let i = 0; i < coffeeList.length; i++) {
    const coffee = coffeeList[i]

    let locationMatches = false
    if (selectedLocations.length === 0) {
      locationMatches = true
    } else {
      for (let k = 0; k < selectedLocations.length; k++) {
        if (selectedLocations[k] === coffee.location) {
          locationMatches = true
        }
      }
    }

    if (locationMatches) {
      coffeesToShow.push(coffee)
    }
  }

  return (
    <div className="shop-page">
      <Sidebar
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedLocations={selectedLocations}
        onLocationChange={setSelectedLocations}
      />

      <section className="shop-main">
        {coffeesToShow.length === 0 ? (
          <p className="no-results">No products found</p>
        ) : (
          <div className="product-grid">
            {coffeesToShow.map(function (coffee) {
              return <ProductCard key={coffee.id} coffee={coffee} />
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default Shop