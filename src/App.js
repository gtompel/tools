import React from 'react';
import TapBar from './components/TapBar.js';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Прокрути вниз</h1>
            {[...Array(200)].map((item, index) => (
                <p key={index}>История о том, как умирают люди, - это история о том, как люди знакомятся с элитой. Жизнь - это не просто история. "Эней" - это история о том, как люди справляются с вечными испытаниями.</p>
            ))}
            <TapBar />
        </div>
    );
};

export default App;
