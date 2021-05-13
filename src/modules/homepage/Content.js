import { Container } from '@material-ui/core';
import React from 'react'
import { NewsFeed } from './NewsFeed';
import { TomorrowGamesSlider } from './TomorrowGames';
export const Content = () => {
    return (
        <Container style={{maxWidth: 1400}}>
            <div style={{backgroundColor: '#0F1519', borderRadius: 10, height: 500}}>
                <h4 style={{fontFamily: 'HelveticaNeue-Bold', userSelect: "none", padding: 15, color: '#fff'}}><span style={{color: '#1DB954'}}>ხვალინდელი</span> თამაშები</h4>
                <TomorrowGamesSlider/>
                <NewsFeed/>
            </div>
        </Container>
    );
}