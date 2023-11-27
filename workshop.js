// Initial arrays for names and occupations
const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];

// Initial array of freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

// Function to render freelancers
function renderFreelancers() {
  const freelancersList = document.querySelector('#freelancersList');
  freelancersList.innerHTML = ''; // Clear existing list
  freelancers.forEach(freelancer => {
    freelancersList.innerHTML += `<li>${freelancer.name}, the ${freelancer.occupation}, starting at $${freelancer.price}</li>`;
  });
}

// Calculate and render average starting price
function renderAveragePrice() {
  const averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) / freelancers.length;
  document.querySelector('#averagePrice').textContent = `Average Starting Price: $${averagePrice}`;
}

// Call these functions to initialize the page
renderFreelancers();
renderAveragePrice();

function addRandomFreelancer() {
    // Generate random freelancer data
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomPrice = Math.floor(Math.random() * 100) + 30; // Random price between $30 and $130
  
    // Add new freelancer to the array
    freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
  
    // Update the display
    renderFreelancers();
    renderAveragePrice();
  }
  
  // Set an interval to add a freelancer every few seconds
  setInterval(addRandomFreelancer, 3000); // Adjust the time as needed

  