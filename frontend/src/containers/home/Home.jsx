import './home.scss';
import SearchBar from '../../components/searchBar/SearchBar';
import helpCenterContext from '../../contexts/helpCenter/helpCenterContext';
import { useContext, useEffect, useState } from 'react';
import Card from '../../components/card/Card';

const Home = () => {
  const { getAllCards, cards } = useContext(helpCenterContext);
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    getAllCards();
  }, []);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const handleSearch = (searchTerm) => {
    const filtered = cards.filter(card =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  return (
    <div>
        <div className="home_head">
            <h1>How can we help?</h1>
            <SearchBar onSearch={handleSearch} />
        </div>
        <div className="home_body">
            <div className='home_card-container'>
              {
                filteredCards.map((card) => (
                  <Card card={card} key={card._id} />
                ))
              }
            </div>
        </div>
    </div>
  );
}

export default Home;
