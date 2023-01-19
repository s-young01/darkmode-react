import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { NameContext } from './context/NameContext';
import { DarkContext } from './context/StartContext';

function App() {
  // 상태관리
  const [isDark, setIsDark] = useState(false);
  return (
    // 사용하고 싶은 context 컴포넌트로 전체 태그 들을 감싸서 
    // 포함된 태그들이 지정된 context값을 쓸 수 있게 함
    // .Provider : context값에 접근해 값을 쉽게 바꿔줄 수 있다 ..!
    <NameContext.Provider value='Green'>
      {/* 객체의 key이름과 value의 변수명이 같을 때,
      { isDark: isDark,
      setIsDark: setIsDark } 의 형태를 아래와 같이 작성할 수 있다.. (줄여 써도 컴퓨터가 다 알아먹음)
      ===> { isDark, setIsDark }
       */}
      <DarkContext.Provider value={{isDark, setIsDark}}>
        <div className="App">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </DarkContext.Provider>
    </NameContext.Provider>
  );
}

export default App;
