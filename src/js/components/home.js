import React from 'react';
import ProfileContainer from "./container/ProfileContainer.jsx";
import style from "./style.css";

class Home extends React.Component {

    render () {
        return (
            <div className={style.test}>
                <ProfileContainer />
            </div>
        )
    }
}

export default Home;