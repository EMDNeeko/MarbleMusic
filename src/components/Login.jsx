import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const handleClick = () => {
        const clientID = "f2af3786185840efaa991e149002e6b1";
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read'
        ];
        window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    }
    return <Container>
        <img src="https://cdn.discordapp.com/attachments/1236510082049769523/1236510220952539167/MainIcon.png?ex=66384561&is=6636f3e1&hm=d3216d95b1a8858ef3d7ad44da8a98129ad1a4c948ce192079b1babef757f762&" alt="marblemusic" />
        <p>BASED ON SPOTIFY</p>
        <button onClick={handleClick}>Let's Enjoy !</button>
    </Container>;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #5F68FB;
    background: linear-gradient(to bottom right, #F063F9, #5F68FB);
    gap: 1rem;
    img {
        height: 50vh;
    }
    p {
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
    }
    button {
        padding: 1rem 5rem;
        border-radius: 5rem;
        border: none;
        font-weight: bold;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;

