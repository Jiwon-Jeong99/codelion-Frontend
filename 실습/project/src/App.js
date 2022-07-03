import { Main, MediaDiv } from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostList from "./ShowPostList";
import Footer from "./Footer";

function App() {
  const initialPostList = [
    { id: 1, title: "오", replCount: 1 },
    { id: 2, title: "오", replCount: 43 },
    { id: 3, title: "오", replCount: 5 },
  ];
  const [darkMode, setDarkMode] = useState(true);
  // 로딩변수
  const [loading, setLoading] = useState(false);
  // 게시글이 없으면 없다고 띄워줄
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "하이루", replCount: 21 },
    ]);
  };
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostList
              Loading={loading}
              isPost={isPost}
              postList={postList}
              addPost={addPost}
            />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
