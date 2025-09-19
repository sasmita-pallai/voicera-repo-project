import { Link } from "react-router-dom"
import { Button } from "./utils/MainButton/Button"
import { OutlinedButton } from "./utils/OutlinedButton"



export function Header() {
  return (
    <div className="flex justify-between w-[100%]">
      <div className="flex gap-3.5">
        <img src="/assets/Icons/Voicera.svg" alt="" />
        <p className="text-md font-bold">Voicera</p>
      </div>
    <div className="flex gap-6">
        <div><OutlinedButton><p>Home</p></OutlinedButton></div>
        <div><OutlinedButton><p>Ai Assistant</p></OutlinedButton></div>
        <div><OutlinedButton><p>Customer</p></OutlinedButton></div>
        <div><OutlinedButton><p>Pricing</p></OutlinedButton></div>
        <div><OutlinedButton><p>Contact</p></OutlinedButton></div>
    </div>
    <div className="flex gap-4">
        <Button variant="primary" size="xs" processing={false} disabled={false}>
          <Link to="/login">
          Login
          </Link>
        </Button>
        <Button variant="primary" size="xs" processing={false} disabled={false}>
          Sign Up
        </Button>
    </div>
    </div>
  )
}