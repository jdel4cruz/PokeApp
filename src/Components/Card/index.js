//Styles
import { Wrapper, CardImg, CardText } from "./Card.Styles";

const Card = ({ img, name, id }) => (
  <Wrapper>
    <CardImg src={img} alt="Card Img" />
    <CardText>
      <div>{name}</div>
      {id && <div>{id}</div>}
    </CardText>
  </Wrapper>
);

export default Card;
