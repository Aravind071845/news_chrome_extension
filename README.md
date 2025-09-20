 Real-time News Aggregator 

A real-time news aggregator application that fetches and displays the latest headlines using a custom-built Chrome Extension and a Node.js backend.

The extension provides a simple popup interface that dynamically shows news articles retrieved from the News API, processed via a lightweight backend built with Node.js and Express.js.

---

 Features

 1. Live News Updates – Fetches real-time headlines from the News API.

 2. Custom Chrome Extension – Popup interface built with HTML, CSS, and JavaScript.

 3. Node.js Backend – Processes and serves news data to the extension.

 4. API Integration – Uses node-fetch to connect with the News API.

 5. Lightweight UI – Minimal, responsive design for quick browsing.

---

 Tech Stack

Frontend (Extension): HTML, CSS, JavaScript

Backend: Node.js, Express.js

API Handling: node-fetch

External API: News API

---

 Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/real-time-news-aggregator.git
```
2. Setup backend

```
cd server
npm install
```

 > Create a .env file in the server/ folder and add your News API key:

```
NEWS_API_KEY=your_api_key_here
COUNTRY_CODE=country_code_here
```

 > Run the backend:

```
npm start
```

3. Load Chrome Extension

   1. Open Chrome → go to chrome://extensions/.

   2. Enable Developer Mode (top-right corner).

   3. Click Load unpacked → select the extension/ folder.

   4. The extension will appear in your browser toolbar.

---

 Usage

Start the backend server.

Click the Chrome extension icon in your toolbar.

The popup will display the latest headlines retrieved from the backend.

---