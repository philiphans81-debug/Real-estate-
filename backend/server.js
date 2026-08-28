const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const opportunities = [
  {
    id: 1,
    title: 'Downtown Office Complex',
    location: 'New York, NY',
    investmentRequired: 50000,
    basicInfo: 'Class A office building in prime downtown location. 15,000 sq ft available.',
    showMore: {
      expectedROI: '12-15%',
      projectedAnnualProfit: 7500,
      propertyValue: 500000,
      mortgageRate: '5.5%',
      managementFees: '2%',
      taxBenefits: 'Depreciation deductions available'
    }
  },
  {
    id: 2,
    title: 'Residential Apartment Building',
    location: 'Los Angeles, CA',
    investmentRequired: 75000,
    basicInfo: '20-unit apartment complex with consistent rental income. Fully occupied.',
    showMore: {
      expectedROI: '10-12%',
      projectedAnnualProfit: 8500,
      propertyValue: 750000,
      mortgageRate: '6.0%',
      managementFees: '3%',
      taxBenefits: 'Cost segregation available'
    }
  },
  {
    id: 3,
    title: 'Retail Shopping Center',
    location: 'Chicago, IL',
    investmentRequired: 100000,
    basicInfo: 'Modern retail center with anchor tenant. High foot traffic area.',
    showMore: {
      expectedROI: '14-18%',
      projectedAnnualProfit: 16000,
      propertyValue: 1000000,
      mortgageRate: '5.8%',
      managementFees: '2.5%',
      taxBenefits: 'Section 1031 exchange eligible'
    }
  }
];

app.get('/api/opportunities', (req, res) => {
  const basicOpportunities = opportunities.map(opp => ({
    id: opp.id,
    title: opp.title,
    location: opp.location,
    investmentRequired: opp.investmentRequired,
    basicInfo: opp.basicInfo
  }));
  res.json(basicOpportunities);
});

app.get('/api/opportunities/:id', (req, res) => {
  const opportunity = opportunities.find(opp => opp.id === parseInt(req.params.id));
  if (!opportunity) {
    return res.status(404).json({ error: 'Opportunity not found' });
  }
  res.json(opportunity);
});

app.post('/api/opportunities', (req, res) => {
  const { title, location, investmentRequired, basicInfo, showMore } = req.body;
  const newOpportunity = {
    id: opportunities.length + 1,
    title,
    location,
    investmentRequired,
    basicInfo,
    showMore
  };
  opportunities.push(newOpportunity);
  res.status(201).json(newOpportunity);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('API endpoints available');
});
