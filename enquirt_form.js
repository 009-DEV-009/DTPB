const stateCityMap = {
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Andhra Pradesh": ["Tirupati", "Vijayawada", "Visakhapatnam"],
  "Arunachal Pradesh": ["Itanagar", "Tawang"],
  "Assam": ["Dibrugarh", "Guwahati"],
  "Bihar": ["Gaya", "Patna"],
  "Chandigarh": ["Chandigarh"],
  "Chhattisgarh": ["Bilaspur", "Durg", "Raipur"],
  "Dadra and Nagar Haveli": ["Silvassa"],
  "Daman and Diu": ["Daman", "Diu"],
  "Delhi": ["New Delhi"],
  "Goa": ["Margao", "Panaji"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Haryana": ["Faridabad", "Gurgaon", "Panipat"],
  "Himachal Pradesh": ["Manali", "Shimla"],
  "Jharkhand": ["Jamshedpur", "Ranchi"],
  "Karnataka": ["Bengaluru", "Mysore"],
  "Kerala": ["Kochi", "Thiruvananthapuram"],
  "Lakshadweep": ["Kavaratti"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Nagpur", "Pune"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Puducherry": ["Puducherry"],
  "Punjab": ["Amritsar", "Ludhiana"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Noida", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar"],
  "West Bengal": ["Balurghat", "Kolkata" , "Raiganj" , "Tapan"]
};

// Sort the keys (states) alphabetically
const sortedStates = Object.keys(stateCityMap).sort();
const stateSelect = document.getElementById("stateSelect");
const citySelect = document.getElementById("citySelect");

// Populate the state dropdown
sortedStates.forEach(state => {
  const option = document.createElement("option");
  option.value = state;
  option.textContent = state;
  stateSelect.appendChild(option);
});

// Update cities when state changes
stateSelect.addEventListener("change", function () {
  const cities = stateCityMap[this.value] || [];
  const sortedCities = [...cities].sort();
  citySelect.innerHTML = '<option value="">Select City</option>';
  sortedCities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
});
