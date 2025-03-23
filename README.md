🏡 Airbnb Clone (MERN Stack)



   Project Link: https://airbnb-project-jzw8.onrender.com/listings
   Note: Don't remove /listings it is by default my project's home page

🚀 Overview
This is a full-stack Airbnb clone built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to list, browse, and book properties with secure authentication using passport-local mongoose.

✨ Features
🔑 User Authentication (Signup/Login using passport-local mongoose)

🏡 Property Listings (Add, edit, and delete properties)

📍 Search & Filters (Search properties by location, price, and category)

🛒 Booking System (Book properties dynamically)

📷 Image Upload (Upload property images via Cloudinary)

🔥 Responsive UI (Built with Tailwind CSS for a modern look)

🛠 Tech Stack
Frontend: Bootstrap, CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

Authentication: passport-local mongoose

Image Upload: Cloudinary

🚀 Getting Started
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/Mohdshan09/Airbnb-Project.git
cd airbnb-clone
2️⃣ Install Dependencies
Backend
sh
Copy
Edit
cd backend
npm install
Frontend
sh
Copy
Edit
cd ../frontend
npm install

3️⃣ Set Up Environment Variables
Create a .env file in the backend directory and add:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
4️⃣ Run the Project
Start Backend Server
sh
Copy
Edit
cd backend
npm start
Start Frontend Server
sh
Copy
Edit
cd frontend
npm start
📸 Screenshots
(Add some project screenshots here)

📌 Future Improvements
✅ Google OAuth authentication
✅ Admin dashboard for managing listings

👨‍💻 Author
Mohammad Shan
Contributions are welcome! Feel free to fork the repo and submit a PR.
