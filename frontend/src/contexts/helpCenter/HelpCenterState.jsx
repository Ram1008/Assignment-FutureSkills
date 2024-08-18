import { useState, useEffect } from 'react';
import helpCenterContext from './helpCenterContext';

const HelpCenterState = (props) => {
  const host = 'http://localhost:5000';
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({ title: '', description: '', link: '' });

  const getAllCards = async () => {
    try {
      const response = await fetch(`${host}/cards`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setCards(json);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const getACard = async (title) => {
    try {
      const response = await fetch(`${host}/cards/${title}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      setCard(json);
    } catch (error) {
      console.error('Error fetching card:', error);
    }
  };

  const addACard = async (title, description, link) => {
    try {
      const response = await fetch(`${host}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, link }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      await response.json();
      getAllCards();
    } catch (error) {
      console.error('Error adding card:', error);
    }
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <helpCenterContext.Provider value={{ cards, card, getACard, getAllCards, addACard }}>
      {props.children}
    </helpCenterContext.Provider>
  );
};

export default HelpCenterState;
