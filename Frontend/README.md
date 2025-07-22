===============================
🧃 JUICE DELIVERY APP - README
===============================

A full-stack MERN (MongoDB, Express, React, Node.js) Juice Delivery application
that allows users to browse juices, add/remove them from the cart, and securely
complete payments using Stripe.

-------------------------------
🚀 FEATURES
-------------------------------
• View list of available juices
• Add or remove juices from cart
• Secure payment using Stripe
• Order summary and confirmation
• Responsive UI with React
• RESTful API with Express
• MongoDB for data storage

-------------------------------
🛠️ TECH STACK
-------------------------------
• React.js        – Frontend
• Node.js         – Backend Runtime
• Express.js      – Backend Framework
• MongoDB         – NoSQL Database
• Stripe API      – Payment Gateway

-------------------------------
📂 FOLDER STRUCTURE
-------------------------------
Frontend/               → React frontend
  └── src/
       ├── components/   → JuiceCard, Cart, etc.
       ├── pages/        → Home, Cart, Checkout
       └── context/      → Cart Context Provider

Backend/               → Express backend
  ├── routes/          → API routes (Juice, Cart, Payments)
  ├── controllers/     → Route logic
  ├── models/          → Mongoose models
  └── config/          → Stripe and DB setup

-------------------------------
💡 GETTING STARTED
-------------------------------

1. Clone the repo:
   > git clone https://github.com/akshaya7798/MernProject.git

2. Install dependencies:

   Frontend:
   > npm install

   Backend:
   > npm install



3. Start the servers:

   Backend:
   > cd Backend
   > npm run dev

   Frontend:
   > cd Frontend
   > npm start

   App URLs:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

-------------------------------
🧪 STRIPE TEST CARD
-------------------------------
Use this test card to simulate payments:

Card Number: 4242 4242 4242 4242  
Expiry: Any future date  
CVV: Any 3 digits  

-------------------------------
📌 FUTURE IMPROVEMENTS
-------------------------------
• User authentication & profiles  
• Admin panel for managing juices  
• Email order confirmations  
• Stock and inventory tracking  

-------------------------------
🤝 CONTRIBUTING
-------------------------------
Pull requests are welcome! Open an issue for major ideas or feature requests.

-------------------------------
📄 LICENSE
-------------------------------
This project is licensed under the MIT License.

-------------------------------
🙋‍♀️ AUTHOR
-------------------------------
Your Name – https://github.com/akshaya7798
