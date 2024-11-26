import React, { useEffect } from 'react';
// import connections from '../../connections';
import { useAppContext } from '../../context';
import './style.css';
import NavBar from '../../components/NavBar';
import UserView from '../../components/UserView';

const Home = () => {
    return (
        <div className="container-home">
            <NavBar />
            <UserView />
        </div>
    );
};

export default Home;