import React from "react";
import { Link } from "react-router-dom";
import { Container, Navigation, NavigationMobile, LiNav } from "./styles";

export const CheckoutHeader = ({ title, firstLink, state = "", arrayStates = [] }) => {
  return (
    <Container>
      <Navigation>
        <ul>
          {state?.length > 0 ? (
            <LiNav color="#d9d9d9">
              <Link to={firstLink ? firstLink : "#"}>
                <a>{title}</a>
              </Link>
            </LiNav>
          ) : (
            <LiNav color="#4493CF">
              <Link to={firstLink ? firstLink : "#"}>
                <a>{title}</a>
              </Link>
            </LiNav>
          )}

          {arrayStates?.length > 0 && (
            <>
              {arrayStates.map((item, i) => (
                <React.Fragment key={i}>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
                      fill="#d9d9d9"
                    ></path>
                  </svg>

                  <LiNav color="#d9d9d9">
                    <Link to={item?.link ? item?.link : "#"}>
                      <a>{item?.name}</a>
                    </Link>
                  </LiNav>
                </React.Fragment>
              ))}
            </>
          )}

          {state?.length > 0 && (
            <>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
                  fill="#d9d9d9"
                ></path>
              </svg>

              <LiNav color="#4493CF">
                <Link to="/">
                  <a>{state}</a>
                </Link>
              </LiNav>
            </>
          )}
        </ul>
      </Navigation>
    </Container>
  );
};

export default CheckoutHeader;
