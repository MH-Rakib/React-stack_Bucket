import { Helmet } from 'react-helmet';
import AppRouter from './Router';

function App() {
    return (
        <div className="App">
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <AppRouter />
        </div>
    );
}

export default App;
