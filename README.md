Real Estate Management System (MERN)

This is a full-stack Real Estate Management System built using the MERN stack — **MongoDB, Express.js, React.js, Node.js**.  
The application allows users to browse, search, and filter property listings, view property details, create accounts, and contact sellers. Admin users can add, edit, and delete property listings and manage users.

Features

The system includes:
- User registration and login with JWT-based authentication
- Browse and search real estate properties
- View property details and images
- Save favorite properties
- Contact sellers
- Admin Dashboard to manage properties and users

Tech Stack

This project uses:
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **APIs:** REST API
- **Tools:** Nodemon, Axios

Installation Instructions

Follow the steps below to install and run this project on your PC.

1. Clone the Repository

git clone https://github.com/prateek142004/Estate-MERN-PROJECT.git
cd Estate-MERN-PROJECT

2. Install Backend Dependencies

cd server
npm install

3. Create Backend Environment Variables

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000

4. Install Frontend Dependencies

cd ../client
npm install

5. Start the Frontend
   
npm run dev

6. Start the backend
   
node app.js
