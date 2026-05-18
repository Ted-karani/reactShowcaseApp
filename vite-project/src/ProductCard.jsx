// make sure i use props to earn points and the ---.name part
//this is like what will have the products so i create paragraphs and ohh an artricle for storing the main things of coffee
// remember name, description ,  origin ,  price , location
//price i can use usd since its not a must i use ksh (its not written in instructions)
    
    export default function ProductCard(props) {
  const coffee = props.coffee
  const onEdit = props.onEdit
  const onDelete = props.onDelete

  
  const showButtons = onEdit && onDelete

    return(
        <article className="product-card">
      <h3 className="card-name">{coffee.name}</h3>
      <p className="card-desc">{coffee.description}</p>
      <p className="card-origin">Origin: {coffee.origin}</p>
      <p className="card-price">${coffee.price}</p>
      <p className="card-location">{coffee.location}</p>

            {showButtons && (
  <div className="card-actions">
    <button
      type="button"
      className="edit-btn"
      onClick={() => onEdit(coffee)}
    >
      Edit
    </button>
    <button
      type="button"
      className="delete-btn"
      onClick={() => onDelete(coffee.id)}
    >
      Delete
    </button>
  </div>
)}
</article>     
    )  
    }