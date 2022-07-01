import {
  EachPostLi,
  Footer,
  FooterBig,
  FooterSmall,
  LoadingDiv,
  LoadingImg,
  Main,
  MediaDiv,
  PagenumberDiv,
  PagingSection,
  PostLink,
  PostListDiv,
  PostRepl,
  PostSection,
  PostTitle,
  PostTitleDiv,
  SlogunBig,
  SlogunSection,
  SlogunSmall,
} from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
  faArrowsRotate,
  faPenToSquare,
  faLocationPin,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";
import loadingIcon from "./loading.svg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  // 로딩변수
  const loading = false;
  // 게시글이 없으면 없다고 띄워줄
  const isPost = true;

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Main>
            <SlogunSection>
              <SlogunBig>Hack Your Life</SlogunBig>
              <SlogunSmall>내 아이디어를 내 손으로 실현한다</SlogunSmall>
            </SlogunSection>
            <PostSection>
              <PostTitleDiv>
                <FontAwesomeIcon icon={faArrowsRotate} />
                <PostTitle>익명게시판</PostTitle>
                <FontAwesomeIcon icon={faPenToSquare} />
              </PostTitleDiv>
              <PostListDiv>
                {loading ? (
                  <LoadingDiv>
                    <LoadingImg src={loadingIcon} />
                  </LoadingDiv>
                ) : isPost ? (
                  <LoadingDiv>아직 글이 없습니다</LoadingDiv>
                ) : (
                  <ul>
                    <EachPostLi>
                      <div>
                        <FontAwesomeIcon icon={faLocationPin} />
                        <PostLink>서강확보, 시사 N 대학기자상 취재</PostLink>
                      </div>
                      <PostRepl>[35]</PostRepl>
                    </EachPostLi>
                  </ul>
                )}
              </PostListDiv>
            </PostSection>
            <PagingSection>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowLeft} />
              </PagenumberDiv>
              <PagenumberDiv>2</PagenumberDiv>
              <PagenumberDiv>
                <FontAwesomeIcon icon={faArrowRight} />
              </PagenumberDiv>
            </PagingSection>
          </Main>
          <Footer>
            <FontAwesomeIcon icon={faReact} />
            <FooterBig>for react study</FooterBig>
            <FooterSmall>2022 by. jiwon</FooterSmall>
          </Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
