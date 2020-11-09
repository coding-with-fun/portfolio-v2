import React from "react";
import MyImage from "../../assets/MyPhoto.jpg";

const Home = () => {
    return (
        <div className="home__container" id="home">
            <div className="left__container">
                <div className="data__container">
                    <div className="heading__container">
                        Hey... <span>👋</span>
                    </div>
                    <div className="name__container">
                        I am <div className="name">Harsh Patel</div>
                    </div>
                    <div className="details__container">
                        A Web Developer who creates UX rich performance websites
                        and web applications.
                    </div>
                </div>
            </div>
            <div className="right__container">
                <img src={MyImage} alt="Logo" />
            </div>
        </div>
    );
};

export default Home;
