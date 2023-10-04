import { Link } from "react-router-dom"
import { ModalCard } from "./ModalCard"

export const Navbar = () => {
  return (
    <nav className="bg-blue-800">
        <div className="container mx-auto flex justify-between items-center py-2">
            <div>
                <img src="https://www.certus.edu.pe/wp-content/uploads/2022/09/logo-certus-blanco-4.png" alt="Certus" width={172} height={64} />
            </div>
            <div>
                <ModalCard />
            </div>
        </div>

    </nav>
  )
}
