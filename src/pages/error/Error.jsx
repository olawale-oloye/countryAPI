import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>Oops! You seems to be lost.</h1>
      <p>Click here to return to <Link to='/'>Home </Link> </p>
    </div>
  )
}

export default Error