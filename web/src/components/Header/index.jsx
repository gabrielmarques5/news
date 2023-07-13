import './styles.css';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/Logo.png'

export function Header() {
    const { signOut } = useAuth();

    const navigation = useNavigate();

    function handleSignOut() {
        navigation("/");
        signOut();
    }

    function handleHome() {
        navigation('/');
    }
    return (
        <header>
            <nav>
                <button className='nav-news' onClick={handleHome}><img src={Logo} alt="Logo Tuma & chaves" /></button>
                <button onClick={handleSignOut}><img className='logout' src={Logout} alt='sair' /></button>
            </nav>
        </header>
    )
}