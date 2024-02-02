import './button.css'
 function Button(props) {
   return <button className={props.name} onClick={props.click}>{props.children}</button>
}
export default Button;