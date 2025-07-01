import React, { useState } from 'react';

const positiveActivities = [
  "Musculação",
  "Cardio (20+ min)",
  "Creatina",
  "Refeição saudável",
  "1 porção de fruta",
  "Salada/Legumes",
  "Whey protein",
  "Devocional/Bíblia",
  "Oração"
];

const negativeActivities = [
  "Fritura",
  "Doces (fora o permitido)",
  "Massas/Japonês/Fast food",
  "Refrigerante normal",
  "Bebida alcoólica"
];

export default function App() {
  const [name, setName] = useState('');
  const [positives, setPositives] = useState([]);
  const [negatives, setNegatives] = useState([]);
  const [totalPoints, setTotalPoints] = useState(null);

  const toggleSelection = (activity, list, setList) => {
    if (list.includes(activity)) {
      setList(list.filter(item => item !== activity));
    } else {
      setList([...list, activity]);
    }
  };

  const calculatePoints = () => {
    const points = positives.length - negatives.length;
    setTotalPoints(points);
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h2>Rastreador de Pontos Fitness</h2>
      <input 
        placeholder="Seu nome" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        style={{ width: '100%', padding: 8, marginBottom: 16, fontSize: 16 }}
      />
      <h3>Atividades Positivas</h3>
      {positiveActivities.map(activity => (
        <label key={activity} style={{ display: 'block', marginBottom: 6 }}>
          <input 
            type="checkbox" 
            checked={positives.includes(activity)} 
            onChange={() => toggleSelection(activity, positives, setPositives)} 
          /> {activity}
        </label>
      ))}
      <h3 style={{ color: 'red' }}>Infrações (-1 ponto)</h3>
      {negativeActivities.map(activity => (
        <label key={activity} style={{ display: 'block', marginBottom: 6, color: 'red' }}>
          <input 
            type="checkbox" 
            checked={negatives.includes(activity)} 
            onChange={() => toggleSelection(activity, negatives, setNegatives)} 
          /> {activity}
        </label>
      ))}
      <button onClick={calculatePoints} style={{ marginTop: 20, padding: '10px 20px', fontSize: 16 }}>
        Calcular Pontos
      </button>
      {totalPoints !== null && (
        <div style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>
          {name}, você fez <span style={{ color: 'green' }}>{totalPoints}</span> pontos hoje!
        </div>
      )}
    </div>
  );
}
