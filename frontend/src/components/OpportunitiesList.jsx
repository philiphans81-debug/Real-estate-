import React, { useState } from 'react';
import axios from 'axios';
import OpportunityCard from './OpportunityCard';
import './OpportunitiesList.css';

function OpportunitiesList({ opportunities }) {
  const [expandedIds, setExpandedIds] = useState({});
  const [details, setDetails] = useState({});

  const toggleShowMore = async (id) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));

    if (!details[id] && expandedIds[id] === undefined) {
      try {
        const response = await axios.get(`http://localhost:5000/api/opportunities/${id}`);
        setDetails(prev => ({
          ...prev,
          [id]: response.data
        }));
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    }
  };

  return (
    <div className="opportunities-list">
      <h2>Available Opportunities</h2>
      {opportunities.length === 0 ? (
        <p>No opportunities available at this time.</p>
      ) : (
        <div className="cards-grid">
          {opportunities.map(opp => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              isExpanded={expandedIds[opp.id]}
              fullDetails={details[opp.id]}
              onToggleShowMore={() => toggleShowMore(opp.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default OpportunitiesList;
