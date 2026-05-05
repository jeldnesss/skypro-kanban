import {
  NotFound,
  NotFoundBoxText,
  NotFoundBtn,
  NotFoundContainer,
  NotFoundText,
} from './NotFoundPage.styled';
import notFoundImage from '../../assets/404.svg';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFound>
      <NotFoundContainer>
        <NotFoundBoxText>
          <NotFoundText>
            Упс... <br />
            Страница не найдена
          </NotFoundText>
          <NotFoundBtn onClick={() => navigate('/')}>
            Перейти на главную
          </NotFoundBtn>
        </NotFoundBoxText>
        <img src={notFoundImage} alt="404" />
      </NotFoundContainer>
    </NotFound>
  );
};

export default NotFoundPage;
