import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Body from "./components/Body";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="app__container">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
