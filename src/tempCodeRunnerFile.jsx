
function Button({ onClick, children }) {
  return (
    <button  className="primary-btn" onClick={onClick}>{children}</button>
  )
}