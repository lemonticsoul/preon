import React from 'react';
import Header from '../componets/common/Header';
import MainPosting from '../componets/main/MainPosting';

const Main = () => {
    return (
        <div sytle={{padding:'10px',border:'1px solid red',width:'100%',height:'500px'}}>
            <Header/>
            <MainPosting/>
        </div>
    );
};

export default Main;