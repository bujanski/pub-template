"use client";
import { useState } from "react";
import styles from "./LoginWidget.module.css";
import Link from "next/link";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
    };

    const forgotPassword = () => {
        alert("That's too bad. You should use a password manager.");
    }

    return (
        <div id={styles.container}>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div id={styles.field_container}>
                    <div className={styles.field_entry}>
                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className={styles.field_entry}>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <Link href="/user/1">
                <button id={styles.login_button}>
                    Log in
                </button>
                </Link>
            </form>
            <p onClick={forgotPassword}>forgot password</p>
        </div>
    );
}
