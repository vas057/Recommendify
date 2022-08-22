import React from 'react';
import '../App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    You are not logged in to Spotify
                </p>
                console.log("hi")
                <a
                    className="App-link"
                    href={"/server/login"}
                >
                    Login Here
                </a>
            </header>
        </div>
    );
}

export default Home;