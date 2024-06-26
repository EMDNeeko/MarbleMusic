import React from 'react';
import styled from 'styled-components';
import CurrentTrack from './CurrentTrack';
import PlayerControl from './PlayerControl';
import Volume from './Volume';

export default function Footer() {
    return <Container>
        <CurrentTrack />
        <PlayerControl />
        <Volume />
    </Container>;
}

const Container = styled.div`
    background-color: #0A051A;
    height: 100%;
    width: 100%;
    border-top: 1px solid #1E0223;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
`;