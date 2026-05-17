import './Sidebar.css'

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
            checked={isChecked('Location 1')}
            onChange={function () { handleCheckbox('Location 1') }}
          />
          Location 1
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Location 2')}
            onChange={function () { handleCheckbox('Location 2') }}
          />
          Location 2
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Location 3')}
            onChange={function () { handleCheckbox('Location 3') }}
          />
          Location 3
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isChecked('Location 4')}
            onChange={function () { handleCheckbox('Location 4') }}
          />
          Location 4
        </label>

      </div>
    </aside>
  )
}

export default Sidebar