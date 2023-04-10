import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Home = () => {
    const navi=useNavigation()
    return (
        <div>
            <Header></Header>
      <div>{navi.state==='loading' && 'LODING....'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;