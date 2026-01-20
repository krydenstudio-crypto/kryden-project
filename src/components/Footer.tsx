import { Link } from "react-router-dom"
import Logo from "../ui/Logo"


const Footer = () => {
  return (
    <section className="section">
        <div>
            <h1 className="text-textFocus font-bold lg:text-5xl
            lg:leading-18 border-b-2 border-text pb-13">DO YOU HAVE A PROJECT ? <p>DISCUSS IT WITH US</p></h1>
            <div className="pt-13">
                <div className="flex justify-between items-center">
                    <Logo/>
                    <div className="flex gap-4">
                       <Link to=""><img src="/Frame 58.png" alt="social-handle" /></Link>
                       <Link to=""><img src="/Frame 59.png" alt="social-handle" /></Link>
                       <Link to=""><img src="/Frame 60.png" alt="social-handle" /></Link>
                    </div>
                </div>
                <div className="pt-13">
                    <p className="p text-center">© 2025 Kryden Studios . All rights reserves. <p>Privacy Terms</p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer