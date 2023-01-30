import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
  }
`;

export const LiNav = styled.li`
  cursor: pointer;

  a {
    color: ${(props) => props.color};
    font-family: "Open Sans";
    font-weight: bold;
    text-decoration: none;

    font-size: 1rem;
  }
`;

export const NavigationMobile = styled.nav`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 390px) {
    flex-direction: row;
    text-align: justify;
  }

  gap: 20px;

  margin-top: 4rem;
  margin-bottom: 1rem;

  > div {
    width: 116px;
    height: 116px;

    border: 20px solid #58cc30;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    > h2 {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 25px;

      color: #ffffff;
    }
  }

  > h2 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 25px;

    color: #ffffff;
  }
`;
