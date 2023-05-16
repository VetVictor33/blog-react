import { NavLink } from "react-router-dom";
import './LateralBar.css'

export default function LateralBar() {
    return (
        <aside className="LateralBar" >
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/cronicas'}>Crônicas</NavLink>
                <NavLink to={'/estorias'}>Contos</NavLink>
            </nav>
        </aside>
    )
}