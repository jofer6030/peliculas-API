import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className="navbar-brand"> MOVIE APP </a>
            </nav>
            <main className="bg-dark">
                <div className="container">
                    <List />
                </div>
            </main>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))