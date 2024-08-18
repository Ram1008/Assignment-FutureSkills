import './card.scss';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

  return (
    <div className='card_container' onClick={()=> navigate(props.card.link)}>
      <h3 className='card_title'>{props.card.title}</h3>
      <hr  />
      <p className='card_description'>{props.card.description}</p>
    </div>
  )
}

export default Card;
