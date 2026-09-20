Electro - Full-Stack MERN E-Commerce App
A professionally engineered, full-stack E-commerce platform built strictly using modern standard React (CRA) on the frontend and Express/MongoDB on the backend.

The project also incorporates AI-assisted development practices to improve development efficiency, debugging, code understanding, documentation, and problem-solving.

🛠 Tech Stack Details
Frontend: Pure React.js (react-scripts), Redux Toolkit (for Cart state management), AuthContext API (for JWT user sessions).
Backend: Node.js, Express.js architecture mapped with middleware-based routing.
Database: MongoDB (via Mongoose schemas).
Features: Unified Admin Dashboard, Direct Cloudinary Content Maps, Personal User Profiles matching mapped Order Histories.
Cloud Storage: Cloudinary integration for Product image uploading securely via Multer.

🚀 Quick Start / Local Development Guide
The workspace is configured beautifully using a monorepo-friendly setup with concurrently, enabling you to start everything from the very root folder.

1️⃣ Dependencies & Environments
Make sure you have MongoDB running locally, or map it to a remote database string.

Inside the backend/ folder, ensure your .env looks like this:

PORT=8000
NODE_ENV=development
MONGO_URI=mongodb://127.0.0.1:27017/Electro
JWT_SECRET=super_secret_key
From the root folder Electro/, trigger a full install across environments:

npm run build
2️⃣ Populate the Database (Seeding)
Test the platform rapidly featuring beautiful dummy products (Unsplash) and automatic Admin role provisioning:

npm run seed
Seed Admin Access: Email: admin@electro.test | Password: Admin@123

3️⃣ Run Servers Start
Run this single command at the root to bind the Backend (Port 8000) and Frontend (Port 5173) natively:

npm run dev