import React from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from '../utils/StateProvider';

export default function NavBar() {
    const [{ userInfo }] = useStateProvider();
    return <Container>
        <div className="search_bar">
            <FaSearch />
            <input type="text" placeholder='Artists, Songs or Podcasts'></input>
        </div>
        <div className="avatar">
            <p>
                <CgProfile />
                <span>{userInfo?.userName}</span>
            </p>
        </div>
    </Container>
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    height: 5vh;
    position: sticky;
    top: 0;
    transition: 0.3s ease-in-out;
    background-color: none;
    .search_bar {
        background-color: white;
        width: 30%;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        input {
            border: none;
            height: 2rem;
            width: 100%;
            padding-left: 1rem;
            &:focus{
                outline: none;
            }
        }
    }
    .avatar {
        background-color: #360D62;
        padding: 0.4rem 0.3rem;
        padding-right: 1rem;
        border-radius: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: white;
            font-weight: bold;
            svg {
                font-size: 1.3rem;
                background-color: #8437A8;
                padding: 0.2rem;
                border-radius: 1rem;
                color: white;
            }
        }
    }
`;