
let companySize = inputData.company_size; 
let b = inputData.budget; 
let i = inputData.industry; 
let u = inputData.urgency; 


let leadScore = 0;


if (companySize === "1-50 employees") lS += 5;
else if (companySize === "51-200 employees") lS += 10;
else if (companySize === "201-1000 employees") lS += 20;
else if (companySize === "1000+ employees") lS += 25;


if (b === "Less than $10,000") lS += 5;
else if (b === "$10,000 - $50,000") lS += 10;
else if (b === "$50,001 - $100,000") lS += 20;
else if (b === "More than $100,000") lS += 30;


if (i === "Technology") lS += 20;
else if (i === "Finance") lS += 15;
else if (i === "Healthcare") lS += 25;
else if (i === "Retail") lS += 10;
else if (i === "Other") lS += 5;


if (u === "Immediate (within 1 month)") lS += 30;
else if (u === "Short-term (1-3 months)") lS += 20;
else if (u === "Medium-term (3-6 months)") lS += 10;
else if (u === "Long-term (6+ months)") lS += 5;


output = { leadScore: lS };
