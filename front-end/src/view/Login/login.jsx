import { useState } from "react";
import { InputLogin } from "../../components/inputLogin/inputLogin";
import { SubmitLoginButton } from "../../components/submitLoginButton/submitLoginButton";
import logo from '../../assets/image/Logo.png'
import "./login.sass"

export function LoginPage() {
    const [user, setUser] = useState({});

    const loginOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser((state) => ({
            ...state,
            [name]: value
        }))
    }

    const submitLoginHandeler = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <form action="" onSubmit={submitLoginHandeler} className={"loginPage"}>
            <div>
                <img src={logo} height={105} alt="Logo de votre marque" />
            </div>
            <div>
                <InputLogin type={"text"} placeholder={"Identifiant"} id={"input_identifiant"} name={"identifiant"} onChange={loginOnChange} />
                <InputLogin type={"password"} placeholder={"Mot de passe"} id={"input_password"} name={"password"} onChange={loginOnChange} />
            </div>
            <SubmitLoginButton />
        </form>
    );
}
