import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios"

export const Dashboard = () => {
    const [balance, setBalance]  = useState("")

     useEffect(() => {
      axios.get("http://localhost:3000/api/v1/account/balance", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }
    })
        .then(response => {
            setBalance(parseFloat(response.data.balance).toFixed(2))
        })
}, [])
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin');
      }
    return <div>
        <Appbar onClick={handleLogout}/>
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}