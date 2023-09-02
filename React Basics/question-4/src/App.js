import React from 'react';
import Card from './components/card';
import All from './components/assests/All.jpeg';
import Anger from './components/assests/Anger.jpeg';
import disgust from './components/assests/disgust.png';
import fear from './components/assests/fear.jpeg';
import joy from './components/assests/joy.jpeg';
import sad from './components/assests/sad.jpeg';


const cardData = [
  {
    title: 'Card 1',
    imgSrc: sad,
    category: 'Im Too Sad To Walk. Just Give Me A Few... Hours.',
    timeToRead: 7,
  },
  {
    title: 'Card 2',
    imgSrc: joy,
    category: 'Do You Ever Look At Someone And Wonder, “What is going on inside their head?',
    timeToRead: 2,
  },
  {
    title: 'Card 3',
    imgSrc: fear,
    category: 'Wait, wait, wait, you’re saying we… run away?',
    timeToRead: 7,
  },
  {
    title: 'Card 4',
    imgSrc: disgust,
    category: 'Okay, Caution, There Is A Dangerous Smell, People',
    timeToRead: 5,
  },
  {
    title: 'Card 5',
    imgSrc: All,
    category: 'Meet the little voices inside your head.',
    timeToRead: 5,
  },
  {
    title: 'Card 6',
    imgSrc: Anger,
    category: 'We Should Lock The Door And Scream That Curse Word We Know.',
    timeToRead: 3,
  },

  
];

function App() {
  return (
    <div className="grid grid-cols-3 justify-center  p-10 font-mono" >
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imgSrc={card.imgSrc}
          category={card.category}
          timeToRead={card.timeToRead}
        />
      ))}
    </div>
  );
}

export default App;
