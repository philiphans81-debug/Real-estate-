import React from 'react';
import './OpportunityCard.css';

function OpportunityCard({ opportunity, isExpanded, fullDetails, onToggleShowMore }) {
  return (
    <div className="opportunity-card">
      <div className="card-header">
        <h3>{opportunity.title}</h3>
        <span className="location">📍 {opportunity.location}</span>
      </div>
      
      <div className="card-body">
        <p className="basic-info">{opportunity.basicInfo}</p>
        
        <div className="investment-amount">
          <label>Investment Required:</label>
          <span className="amount">${opportunity.investmentRequired.toLocaleString()}</span>
        </div>
      </div>

      {isExpanded && fullDetails?.showMore && (
        <div className="show-more-details">
          <h4>Financial Details 💰</h4>
          <div className="details-grid">
            <div className="detail-item">
              <label>Expected ROI:</label>
              <span>{fullDetails.showMore.expectedROI}</span>
            </div>
            <div className="detail-item">
              <label>Annual Profit:</label>
              <span>${fullDetails.showMore.projectedAnnualProfit.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <label>Property Value:</label>
              <span>${fullDetails.showMore.propertyValue.toLocaleString()}</span>
            </div>
            <div className="detail-item">
              <label>Mortgage Rate:</label>
              <span>{fullDetails.showMore.mortgageRate}</span>
            </div>
            <div className="detail-item">
              <label>Management Fees:</label>
              <span>{fullDetails.showMore.managementFees}</span>
            </div>
            <div className="detail-item">
              <label>Tax Benefits:</label>
              <span>{fullDetails.showMore.taxBenefits}</span>
            </div>
          </div>
        </div>
      )}

      <div className="card-footer">
        <button 
          className={`show-more-btn ${isExpanded ? 'expanded' : ''}`}
          onClick={onToggleShowMore}
        >
          {isExpanded ? '▼ Show Less Money' : '▶ Show More Money'}
        </button>
      </div>
    </div>
  );
}

export default OpportunityCard;
