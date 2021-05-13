import '../style.css'
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 85%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
        font-size: 0.8rem;
        text-transform: uppercase;
        @media (min-width: 768px) {
            font-size: 1rem;
        }
    }
    > ul {
        display: flex;
        > li {
            height: 100%;
            > a {
                font-size: 0.6rem;
                text-transform: uppercase;
                padding: 0.6rem;
                color: var(--color1);
                transition: 0.2s;
                &:hover {
                    border-bottom: 2px solid var(--color1);
                }
                @media (min-width: 768px) {
                    font-size: 0.8rem;
                }
            }
        }
    }
`

const Header = () => {
    return (
        <HeaderContainer>
            <h3>Jefferson cepeda</h3>
            <ul>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </HeaderContainer>
    )
}

export default Header;