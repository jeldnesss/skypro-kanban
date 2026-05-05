import { Link } from "react-router-dom";
import {
  CardBtn,
  CardBtnBox,
  CardContent,
  CardDate,
  CardDateText,
  CardGroup,
  CardsCard,
  CardsItem,
  CardTheme,
  CardThemeText,
  CardTitle,
} from "./Card.styled";

const Card = ({ id, topic, title, date }) => {
  return (
    <CardsItem>
      <CardsCard>
        <CardGroup>
          <CardTheme topic={topic}>
            <CardThemeText>{topic}</CardThemeText>
          </CardTheme>

          <Link to={`/card/${id}`}>
            <CardBtn>
              <CardBtnBox />
              <CardBtnBox />
              <CardBtnBox />
            </CardBtn>
          </Link>
        </CardGroup>

        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDate>
            <CardDateText>
              {" "}
              {date ? new Date(date).toLocaleDateString("ru-RU") : ""}
            </CardDateText>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};

export default Card;
