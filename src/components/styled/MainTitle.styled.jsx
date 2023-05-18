import styled from "styled-components";

export const StyledMainTitle = styled.div`


.wrapper {
  background: transparent;
  line-height: 1;
  margin: 2rem 0 1rem 0;
}

h1 {
  font-family: "Press Start 2P", cursive;
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0;
  -webkit-text-stroke: 1px black;


  background: linear-gradient(219deg,
    #FB1B1B 19%,
    transparent 19%, transparent 20%,
    #FFCC00 20%, #FFCC00 39%,
    transparent 39%, transparent 40%,
    #0075BE 40%, #0075BE 59%,
    transparent 59%, transparent 60%,
    #FFCC00 60%, #FFCC00 79%,
    transparent 79%, transparent 80%,
    #FB1B1B 80%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  &:hover {
    text-shadow: -20px -20px 0px #fb1b1b, -30px -30px 0px #ffcc00,
      -40px -40px 0px rgb(0 117 190);
    transition: all ease-in-out 250ms;
  }
}

.container {
 
  text-align: center;
  background: radial-gradient(circle at 1.4% 1.4%, #FFCC00 .8%, transparent .8%),
    radial-gradient(circle at 5.5% 3%, #FFCC00 .45%, transparent .45%),
    radial-gradient(circle at 2.5% 3.5%, #FB1B1B .5%, transparent .5%),
    radial-gradient(circle at 4.5% 1.2%, #FFCC00 .25%, transparent .25%),
    radial-gradient(circle at 98% 98%, #FFCC00 .8%, transparent .8%),
    radial-gradient(circle at 95% 95%, #FFCC00 .45%, transparent .45%),
    radial-gradient(circle at 94.5% 97.5%, #FB1B1B .5%, transparent .5%),
    radial-gradient(circle at 98.5% 95.5%, #FFCC00 .25%, transparent .25%);
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 4.5rem;
  }
}
`;