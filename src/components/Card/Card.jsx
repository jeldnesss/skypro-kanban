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

const Card = ({ topic, title, date }) => {
  return (
    <CardsItem>
      <CardsCard>
        <CardGroup>
          <CardTheme topic={topic}>
            <CardThemeText>{topic}</CardThemeText>
          </CardTheme>

          <a href="#popBrowse">
            <CardBtn>
              <CardBtnBox />
              <CardBtnBox />
              <CardBtnBox />
            </CardBtn>
          </a>
        </CardGroup>

        <CardContent>
          <CardTitle>{title}</CardTitle>

          <CardDate>
            <CardDateText>{date}</CardDateText>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};

export default Card;
