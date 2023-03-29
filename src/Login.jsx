// import React, { useState } from "react"
import duckcreek from "./duckcreek.png"

export const Login = () => {
    return (
        <div className="auth-form-container">
            <img src = {duckcreek} alt = "Duckcreek Logo"/>
            <h1>Welcome to DuckCreek Technologies</h1>
            <form className="login-form">
                <label for = "email">Email</label>
                <input type = "email" placeholder = "youremailID@email.com" id = "email" name = "email"/><br></br>
                <label for = "password">Password</label>
                <input type = "password" placeholder = "**********" id = "password" name = "password"/><br></br>
                <button>Login</button>
            </form>
        </div>
    )
}