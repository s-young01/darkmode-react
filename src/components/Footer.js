import React, { useContext } from 'react';
import { DarkContext } from '../context/StartContext';

const Footer = () => {
    const {isDark, setIsDark} = useContext(DarkContext);
    const darkToggle = () => {
        setIsDark(!isDark);
    }
    return (
        // isDark가 true면 배경색을 어둡게, 글자색 밝게 지정
        // false면 배경은 그냥 그대로, 글자색 어둡게 지정
        <div className='footer'  style={{
            backgroundColor : isDark ? '#222' : null,
            color: isDark ? '#eee' : '#222',
            transition: isDark ? '0.5s' : '0.5s'
        }}>
            <button onClick={darkToggle}>다크모드</button>
        </div>
    );
};

export default Footer;