import styled from "styled-components";

const TitleSection = styled.h1`
    color: ${(props) => props.color || red};
`;

const StyledHeader = styled.header`
    background-color: lightgray;
    padding: 10px;
`;

const StyledComponent = () => {
    return (
        <>
            <TitleSection color="green">안녕하세요</TitleSection>
            <StyledHeader>
                <nav>
                    <ul>
                        <li>
                            <a href="/">홈</a>
                        </li>
                        <li>
                            <a href="/about">소개</a>
                        </li>
                        <li>
                            <a href="/concat">연락처</a>
                        </li>
                    </ul>
                </nav>
            </StyledHeader>
        </>
    );
};

export default StyledComponent;
