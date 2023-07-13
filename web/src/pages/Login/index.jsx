import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button } from './styles';
import './styles.css';

import { useAuth } from '../../hooks/auth';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigate();

    const { SignIn } = useAuth();

    function handleSignIn() {
        navigation("/");
        SignIn({ email, password });
    }

    return (
        <>
            <main>
                <Container>
                    <h1 className='title-login'>Login</h1>

                    <div className="form-login">
                        <div>
                            <input className='input-login' type="email" name="email" id="email" placeholder="E-mail:" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input className='input-login' type="password" name="password" id="password" placeholder="Senha:" onChange={e => setPassword(e.target.value)} />
                        </div>

                        <Button type="button" onClick={handleSignIn}>Entrar</Button>
                    </div>

                    <a href="../../index.html">Voltar para o site</a>
                </Container>
            </main>
        </>
    )
}