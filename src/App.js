import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

function App() {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => setShowLoading(false), 1500);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="main__container">
            <BrowserRouter>
                {showLoading && <Loading />}

                <div
                    className={
                        showLoading
                            ? `body_main__container invisible`
                            : `body_main__container visible`
                    }
                >
                    <Switch>
                        <Route path="/coming-soon">
                            <Body />
                            <Footer />
                        </Route>

                        <Route path="/">
                            <Redirect to="/coming-soon" />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
