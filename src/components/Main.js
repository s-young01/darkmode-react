import React, { useContext } from 'react';
import { DarkContext } from '../context/StartContext';

const Main = () => {
    const {isDark} = useContext(DarkContext);
    return (
        <div className='main'  style={{
            backgroundColor : isDark ? '#222' : null,
            color: isDark ? '#eee' : '#222',
            transition: isDark ? '0.5s' : '0.5s'
        }}>
            메인 페이지 입니다.
        </div>
    );
};

export default Main;