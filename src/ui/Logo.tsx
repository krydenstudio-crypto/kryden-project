import { Link } from "react-router-dom"


const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" />
        <p className="text-textFocus lg:text-2xl font-medium">Kryden Studios</p>
    </Link>
  )
}

export default Logo