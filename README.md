# 📌 Event Management REST API

## Introduction
This is a REST API for managing events, allowing users to sign in, create events, view all events, and get their own events. Upon event creation, users receive an email confirmation.

## 🔗 Live Demo
[Render Deployment Link](https://appdev2-final-exam-ncmp.onrender.com)

## ⚙ Run Locally
```bash
git clone https://github.com/yourusername/appdev2-final-exam.git
cd appdev2-final-exam
npm install
cp .env.example .env   # Fill in your environment variables
npm start

🧪 Run Seeder
npm run seed

🛠 Environment Variables
See .env.example for required environment variables:
MONGODB_URI=your_mongodb_uri_here
JWT_SECRET=your_jwt_secret_here
EMAIL_USER=your_email_here
EMAIL_PASS=your_email_password_here