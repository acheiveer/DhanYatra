import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useEffect, useState } from "react"
import axios from "axios"
import { checkToken } from '../utils/checkToken';


export const Dashboard = () => {
    const [balance, setBalance]  = useState("")
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        checkToken().then(user => {
            if (!user) {
                navigate('/signup');
            } else {
                setUser(user);
            }
        });

        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            setBalance(parseFloat(response.data.balance).toFixed(2));
        });
    }, [navigate]);


    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin');
      }


    return <div>
         {user && <Appbar username={user.username} name={user.firstName} onClick={handleLogout} />}
        <div className="m-8">
        {user && (
                    <div className="mb-4">
                        <h1 className="text-2xl font-bold">Welcome, {user.firstName} {user.lastName}!</h1>
                        <p className="text-lg">{user.username}</p>
                    </div>
                )}
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}