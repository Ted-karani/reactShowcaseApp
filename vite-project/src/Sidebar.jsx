//this is the one that should display at left side of shop
//make sure i remember to place it on left of coffee
//it is not in the admin portal so i just place it in shop only
//it should have location 1 location 2 location 3 location 4
//the locations are the one in the coffee each coffee has different location
//it should be below the search part and the loctations are a checkout boxes so i can use FILTER method
//that filter method like when i tick one location it show me only the onses in that location
//use props and if possible use states so that i get more marks
//remember to create a branch for this one to get more marks
// anything ellse i remember i write it here to avoid forgtetting



function Sidebar(props) {
  const searchText = props.searchText
  const onSearchChange = props.onSearchChange
  const selectedLocations = props.selectedLocations
  const onLocationChange = props.onLocationChange

  function isChecked(location) {
    for (let i = 0; i < selectedLocations.length; i++) {
      if (selectedLocations[i] === location) {
        return true
      }
    }
    return false
  }

  function handleCheckbox(location) {
    const newList = []

    if (isChecked(location)) {
      for (let i = 0; i < selectedLocations.length; i++) {
        if (selectedLocations[i] !== location) {
          newList.push(selectedLocations[i])
        }
      }
    } else {
      for (let i = 0; i < selectedLocations.length; i++) {
        newList.push(selectedLocations[i])
      }
      newList.push(location)
    }

    onLocationChange(newList)
  }

  return (
    <aside className="sidebar">

      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={function (e) {
          onSearchChange(e.target.value)
        }}
      />

      <div className="filter-section">
        <p className="filter-title">Filter by location</p>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Nairobi')}
            onChange={function () { handleCheckbox('Nairobi') }}
          />
          Nairobi
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Thika')}
            onChange={function () { handleCheckbox('Thika') }}
          />
          Thika
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Kiambu')}
            onChange={function () { handleCheckbox('Kiambu') }}
          />
          Kiambu
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Meru')}
            onChange={function () { handleCheckbox('Meru') }}
          />
          Meru
        </label>

      </div>
    </aside>
  )
}

export default Sidebar