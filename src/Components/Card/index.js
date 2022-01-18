//Styles
import { Wrapper, CardImg, CardText } from "./Card.Styles";

const Card = ({ img, text }) => (
  <Wrapper>
    <CardImg src={img} alt="Card Img" />
    <CardText>
      {Object.keys(text).map((keyName, i) => (
        <div key={i}>
          {keyName}: {text[keyName]}
        </div>
      ))}
    </CardText>
  </Wrapper>
);

export default Card;
