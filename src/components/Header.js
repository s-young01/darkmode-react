import React, { useContext } from "react";
// defalt로 내보내기 : 변수명을 중괄호로 감싸줬다
import { NameContext } from "../context/NameContext";
import { DarkContext } from "../context/StartContext";

const Header = () => {
    // siteName에 NameContext에 지정된 context값을 담았다!
    const siteName = useContext(NameContext);
    const {isDark} = useContext(DarkContext);
    return (
        <div className="header" style={{
            backgroundColor : isDark ? '#222' : null,
            color: isDark ? '#eee' : '#222',
            transition: isDark ? '0.5s' : '0.5s'
        }}>
            <h1>{siteName}</h1>
            <ul>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
                <li>menu4</li>
            </ul>
        </div>
    )
} 

export default Header;