import React from "react";
// 방법3. 스타일 컴포넌트 이용하기 - import
// 줄여서 styled라고 부르자!
import styled from 'styled-components';
// 방법2. css import
import "./hello.css";

// 방법1. 스타일에 들어갈 객체를 미리 선언 - js에서 해결하는 방법
function Hello() {
    // 방법1
    // const PracticeStyle = {
    //     marginTop : '10px',
    //     backgroundColor : 'blue',
    // };

    // 방법3
    const StyledButton = styled.button`
        color: red;
        background-color: orange;
    `
    return (
        <>
            {/* 방법1 */}
            {/* <div style={PracticeStyle}>Hello World!</div>
            <div style={PracticeStyle}>Hello World!</div>
            <div style={PracticeStyle}>Hello World!</div> */}

            {/* 방법2 - import css */}
            {/* <div className = 'red'>Hello World!</div>
            <div className = 'red'>Hello World!</div>
            <div className = 'red'>Hello World!</div> */}
            
            {/* 방법3 - 스타일 컴포넌트 */}
            <StyledButton></StyledButton>
        </>
    );
}

export default Hello;