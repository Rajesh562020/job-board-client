# Job Board Client

This is the frontend application for the **Job Board App**, built using **React.js**. It allows users to browse and post job listings through a user-friendly interface.

## 🌐 Live Demo

[https://job-board-client-lovat.vercel.app/](https://job-board-client-lovat.vercel.app/)
```markdown

## 📂 Project Structure

```bash

client/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components (Home, PostJob, etc.)
│   ├── App.js            # Main component with routing
│   ├── App.css           # Global styles
│   └── index.js          # Entry point
├── .env                  # Environment variables
├── .gitignore
├── package.json
└── README.md

```

## 🚀 Features

- View all job listings from backend
- Post a new job through a form
- Responsive UI
- Axios integration with backend API
- Environment-based API URL handling

## 🔧 Tech Stack

- **React.js**
- **Axios** for API calls
- **React Router DOM** for routing
- **CSS** for styling

## ⚙️ Environment Variables

Create a `.env` file in the root of the client project with:

```

REACT\_APP\_BASE\_URL\_PROD=[https://xyz.onrender.com/](https://xyz.onrender.com/)

````

## 🛠️ Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Rajesh562020/job-board-client
cd job-board-client
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your backend URL:

```env
REACT_APP_BASE_URL_PROD=https://xyz.onrender.com/
```

4. Run the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

## 🌐 Deployment

This client is deployed on **Vercel**. Push changes to your main branch, and Vercel will auto-deploy.

## 📄 License

This project is licensed for educational and demo purposes.

---


```
```
