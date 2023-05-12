import { useState } from "react"
import validation from "../validation"
import style from './Form.module.css'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({});
    
    const handleChange = (event) => {
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
        setUserData({ ...userData, [event.target.name]: event.target.value, })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };
    return (
        <div className={style.form}>
            <form className={style.formLogin} onSubmit={handleSubmit}>
                <h2 className={style.titleLogin}>Login</h2>
                <div className={style.inputs}>
                    <label htmlFor="email" className={style.loginEmail}>Email </label>
                    <div>
                        <input
                            className={style.inputLogin}
                            onChange={handleChange}
                            value={userData.email}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                        />
                    </div>
                    {
                        errors.e1 ? (<p>{errors.e1}</p>)
                            : errors.e2 ? (<p>{errors.e2}</p>)
                                : (<p>{errors.e3}</p>)
                    }
                    <label htmlFor="password" className={style.loginPass}>Password </label>
                    <div>
                        <input
                            className={style.inputLogin}
                            onChange={handleChange}
                            value={userData.password}
                            type="text"
                            name="password"
                            placeholder="Your Password"
                        />
                    </div>
                    {
                        errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
                    }
                </div>
                <button onClick={handleSubmit} type="submit" className={style.botonLogin}>Login</button>
            </form>
        </div>
    )
}

export default Form







