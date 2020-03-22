import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
    red: {
        foreground: 'red',
        background: 'white',
    },
};

let superHeroName = "SuperMan";

export const AppLayoutContext = React.createContext(
    { selectedTheme: themes.red, superHeroName: superHeroName, changeSuperHero: () => { } })

