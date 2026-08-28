import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import OpportunitiesList from './components/OpportunitiesList';

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/opportunities');
      setOpportunities(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load opportunities');
      console.error('Error fetching opportunities:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Real Estate Investment Opportunities</h1>
        <p>Discover and invest in premium real estate properties</p>
      </header>
      
      <main className="container">
        {loading && <p className="loading">Loading opportunities...</p>}
        {error && <p className="error">{error}</p>}
        {!loading && !error && <OpportunitiesList opportunities={opportunities} />}
      </main>
    </div>
  );
}

export default App;
