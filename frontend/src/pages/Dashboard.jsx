import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear();
        navigate('/signin');
      }
    return <div>
        <Appbar onClick={handleLogout}/>
        <div className="m-8">
            <Balance value={"10,000"} />
            <Users />
        </div>
    </div>
}