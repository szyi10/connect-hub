import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="text-lg md:text-2xl font-semibold">
        <span className="text-primary ">Connect</span>Hub
      </h1>
    </Link>
  )
}

export default Logo
