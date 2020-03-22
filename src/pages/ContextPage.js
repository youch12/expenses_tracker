import React from 'react';
import { AppLayoutContext, themes } from 'context/appLayout';
import { AppLayoutContextTwo } from 'context/othercontext';
import Divider from '@material-ui/core/Divider';

export class MyContextManagedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedTheme: themes.light, superHeroName: 'SpiderMan', }
    };

    changeTheme = (selectedTheme) => { this.setState({ selectedTheme: selectedTheme }); };

    changeSuperHero = (superHeroName) => { this.setState({ superHeroName: superHeroName }); };


    render() {
        return (
            <div>
                <AppLayoutContext.Provider value={{
                    ...this.state,
                    changeTheme: (theme) => this.changeTheme(theme),
                    changeSuperHero: (superHero) => this.changeSuperHero(superHero)
                }
                }>
                    <MyInfosSection />
                </AppLayoutContext.Provider>
                <Divider />
                <MyInfosSection />
                <Divider />
                <ThemedText />
            </div>
        );
    }
}


function MyInfosSection() {
    return (
        <AppLayoutContext.Consumer>
            {values => (
                <p>
                    <div style={{ backgroundColor: values.selectedTheme.background }}>
                        My Selected Theme Foreground: {values.selectedTheme.foreground}</div>
                    <div>My Selected SuperHero:  {values.superHeroName}</div>
                    <input type="text" onChange={event => values.changeSuperHero(event.target.value)} />
                </p>

            )
            }
        </AppLayoutContext.Consumer>
    );
}



class ThemedText extends React.Component {
    render() {
        return (
            <p>My Selected Theme is {this.context.selectedTheme}</p>
        );
    }
}
ThemedText.contextType = AppLayoutContextTwo;


export default MyContextManagedPage;