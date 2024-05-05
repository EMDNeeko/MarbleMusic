import React, {useEffect} from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Body from './Body';
import Footer from './Footer';
import { useStateProvider } from '../utils/StateProvider';
import  axios from 'axios';
import { reducerCases } from '../utils/Constants';

export default function Home(){
    const [{ token }, dispatch] = useStateProvider();
    useEffect(() => {
        const getUserInfo = async () =>{
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            });
            const userInfo ={
            userID: data.id,
            userName: data.display_name,
            };
            dispatch({type:reducerCases.SET_USER, userInfo})
        }
        getUserInfo();
    },[dispatch, token]);
    return <Container>
        <div className="home_body">
            <SideBar />
            <div className="body">
                <NavBar />
                <div className="body_content">
                    <Body />
                </div>
            </div>
        </div>
        <div className="home_footer">
            <Footer />
        </div>
    </Container>;
}

const Container = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .home_body{
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%
        width: 100%;
        background: linear-gradient(#5D1D7B , #040942);
        background-color: #DFA8E5
        .body{
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
`;