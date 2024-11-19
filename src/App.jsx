import { useState } from 'react';
import './App.css';

const FaqItem = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className={`faq-item ${show ? 'active' : ''}`}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      {show && (
        <div className="faq-item-body">
          <div className="faq-item-body-content">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const data = [
  {
    id: 1,
    question: 'What is cryptocurrency?',
    answer: 'As of now, there is no specific law banning cryptocurrency ownership or trading. However, the Reserve Bank of India...',
  },
  {
    id: 2,
    question: 'How does blockchain work?',
    answer: 'Blockchain is a distributed ledger technology that ensures data integrity and security...',
  },
  {
    id: 3,
    question: 'Is cryptocurrency legal in India?',
    answer: 'Cryptocurrency is not illegal in India, but there are regulations being developed to manage it...',
  },
];

function App() {
  return (
    <div className="App">
      <FaqAccordion data={data} />
    </div>
  );
}

export default App;
