import React, { useState, useEffect, useContext } from "react";
import LoginForm from "../../modules/Auth/Login";
import { Container, Title, NeonText, Logo } from "./styles";
import { useAppContext } from '../../context/AppContext';
import Dashboard from "../../modules/Dashboard";
const HomePage = () => {
    const { user } = useAppContext();

    return (
        <>
            {user ? <Dashboard /> : (
                <>
                    <Container>
                        <Title>
                            <Logo src="/logo192.png" alt="logo" />
                            <NeonText>Login</NeonText>
                        </Title>
                        <LoginForm />
                    </Container>
                </>
            )
            }
        </>

    );
}

export default HomePage;