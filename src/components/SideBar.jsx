import React from 'react';
import styled from 'styled-components';
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from 'react-icons/md';
import Playlist from './Playlist';

export default function SideBar() {
    return <Container>
        <div className="top_links">
            <div className="logo">
                <img 
                    src="https://cdn.discordapp.com/attachments/1236510082049769523/1236510220952539167/MainIcon.png?ex=66384561&is=6636f3e1&hm=d3216d95b1a8858ef3d7ad44da8a98129ad1a4c948ce192079b1babef757f762&" 
                    alt="logo"
                />
            </div>
            <ul>
                <li>
                    <MdHomeFilled/>
                    <span>Home</span>
                </li>
                <li>
                    <MdSearch/>
                    <span>Search</span>
                </li>
                <li>
                    <IoLibrary/>
                    <span>Your Library</span>
                </li>
            </ul>
        </div>
        <Playlist/>
    </Container>;
}

const Container = styled.div`
    background: linear-gradient(0deg, #080750, #450A4E) ;
    color: #B3B3B3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top_links{
        display: flex;
        flex-direction: column;
        .logo{
            text-align: center;
            margin: 0.5rem 0;
            img{
                max-inline-size: 100%;
                block-size: auto;
            }
        }
        ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li{
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover{
                    color: white;
                }
            }
        }
    }
`;