import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import Home from '../components/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <NavigationBar></NavigationBar>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;