const Background = ({ children }) => {
  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/FundoBellissare.png")}
      >
        {children}
      </BackgroundImage>
    </Container>
  );
};

export default Background;
