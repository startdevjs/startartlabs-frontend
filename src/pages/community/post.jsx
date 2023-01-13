import {
  Container,
  TopicCard,
  CardHeader,
  CardHeaderDate,
  ContainerButtons,
  CardContent,
  AvatarArea,
  Avatar,
  AvatarImgContainer,
  Author,
  AuthorName,
  AuthorUsername,
  AuthorShield,
  CardTextContent,
} from "./styles";

const CommunityPost = () => {
  const array = [1, 2, 3];

  return (
    <>
      {/* <Message>Em breve...</Message>
        <Description>
            <p>Você fará parte de uma comunidade de programadores!</p>
        </Description> */}

      <Container>
        {array?.map((item, i) => (
          <TopicCard key={i}>
            <CardHeader borderTop={i === 0 ? "1rem" : "0"}>
              <CardHeaderDate>April 15, 2019 at 4:05 am</CardHeaderDate>
              <ContainerButtons>
                <a>Reportar</a>
                <a>Responder</a>
              </ContainerButtons>
            </CardHeader>

            <CardContent borderBottom={i + 1 === array?.length ? "1rem" : "0"}>
              <AvatarArea>
                <Avatar>
                  {/* <AvatarImgContainer>
                    <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                  </AvatarImgContainer> */}
                  <div className="tile__icon">
                    <figure className="avatar avatar--xl" data-text="Jz"></figure>
                  </div>
                </Avatar>

                <Author>
                  <AuthorName>John Doe</AuthorName>
                  <AuthorUsername>@luismarchio03</AuthorUsername>

                  <AuthorShield
                  // background={}
                  >
                    Criador
                  </AuthorShield>
                </Author>
              </AvatarArea>

              <CardTextContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </CardTextContent>
            </CardContent>
          </TopicCard>
        ))}
      </Container>

      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path
              fill="#2a7ae9"
              stroke="#000000"
              stroke-width="1.5794"
              stroke-miterlimit="10"
              d="M93.0139721,22.6 L56.6866267,1.8 C54.5908184,0.6 52.1956088,0 49.9001996,0 C47.6047904,0 45.2095808,0.6 43.1137725,1.8 L6.78642715,22.6 C2.59481038,25 0,29.4 0,34.2 L0,75.8 C0,80.6 2.59481038,85 6.78642715,87.4 L43.2135729,108.2 C45.3093812,109.4 47.6047904,110 50,110 C52.2954092,110 54.6906188,109.4 56.7864271,108.2 L93.2135729,87.4 C97.4051896,85 100,80.6 100,75.8 L100,34.2 C99.8003992,29.4 97.2055888,25 93.0139721,22.6 L93.0139721,22.6 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CommunityPost;
