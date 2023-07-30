import { useLogin } from "../hooks/useLogin"
import Navbar from "../components/Layouts/Navbar";

export default function ProfilePage() {
    const username = useLogin();
    return (
        <div>
            <Navbar></Navbar>
            <h1>Profile</h1>
            <h1>Username : {username}</h1>
        </div>
    )
}
