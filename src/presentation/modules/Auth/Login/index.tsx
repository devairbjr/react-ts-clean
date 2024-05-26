import React, { useState, useEffect } from 'react';
import { LoginFormContainer, Input, Button } from './styles';
import { useAppContext } from '../../../context/AppContext';
import { User } from '../../../../domain/entities/User';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userRepository } = useAppContext();
    const [user, setUser] = useState<User | null>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // setUser({ email, password });
    };
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await userRepository.getUserById('1');
                setUser(fetchedUser);
            } catch (error) {
                console.error('Failed to fetch user', error);
            }
        };

        fetchUser();
    }, [userRepository]);

    return (
        <LoginFormContainer onSubmit={handleSubmit}>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="submit">Login</Button>
        </LoginFormContainer>
    );
};

export default LoginForm;
