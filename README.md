# 360 Distinct Real Estate Ltd Website

## Overview

The 360 Distinct Real Estate Ltd website is a modern web platform designed to showcase real estate projects developed by 360 Distinct Real Estate Limited, with the goal of attracting investors and buyers (especially Nigerians in the diaspora), and facilitate property discovery and engagement.

The platform highlights ongoing and completed projects, provides detailed property listings, and supports user interaction for inquiries, investments, and partnerships.

---

## Features

### 1. Property Listings

* Browse available properties (residential, commercial, luxury)
* Filter by location, price, bedrooms, and property type
* View detailed property descriptions, images, and amenities

### 2. Project Showcase

* Highlight flagship developments (e.g., David Hills, Alex and Bill Gardens)
* Display project timelines, milestones, and investment opportunities

### 3. Investor Engagement

* Dedicated section for diaspora investors
* Investment insights and opportunities
* Contact forms for partnership and funding inquiries

### 4. User Authentication (Optional)

* User registration and login
* Saved properties and personalized experience

### 5. Image Management

* Upload and display multiple property images
* Integration with cloud storage (e.g., Google Cloud Storage)

### 6. Search & Filtering

* Advanced search functionality
* Dynamic filtering for quick property discovery

### 7. Contact & Inquiry System

* Contact forms for property inquiries
* Lead capture and management

---

## Tech Stack

### Frontend

* React.js
* Redux Toolkit (for state management)
* Tailwind CSS / CSS Modules

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Cloud & Storage

* Google Cloud Storage (for image uploads)

### Deployment

* Vercel (Frontend)
* Cloud hosting (Backend)

---

## Project Structure

```
root/
│
├── frontend/          # React application
│   ├── components/
│   ├── screens/
│   ├── redux/
│   └── utils/
│
├── backend/           # Node.js/Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── uploads/           # Local storage (if applicable)
└── README.md
```

---

## Installation & Setup

### Prerequisites

* Node.js (v16 or later)
* MongoDB
* npm or yarn

### Clone Repository

```
git clone https://github.com/Genialqua/360-distinct-real-estate-2026.git
cd 360-distinct-real-estate
```

### Backend Setup

```
cd backend
npm install
```

Create a `.env` file and add:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

### Frontend Setup

```
cd frontend
npm install
npm start
```

---

## API Endpoints (Sample)

### Properties

* `GET /api/properties` - Get all properties
* `GET /api/properties/:id` - Get single property
* `POST /api/properties` - Create property
* `PUT /api/properties/:id` - Update property
* `DELETE /api/properties/:id` - Delete property

### Users

* `POST /api/users/login`
* `POST /api/users/register`

---

## Environment Variables

| Variable             | Description               |
| -------------------- | ------------------------- |
| PORT                 | Server port               |
| MONGO_URI            | MongoDB connection string |
| JWT_SECRET           | Authentication secret     |
| CLOUD_STORAGE_BUCKET | Cloud storage bucket name |

---

## Deployment

### Frontend

* Deploy using Vercel

### Backend

* Currently deployed on vercel

---

## Future Improvements

* Payment integration for property booking
* Crowdfunding feature for real estate investments
* AI-powered property recommendations
* Mobile app (iOS & Android)

---

## Contribution Guidelines

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Create a Pull Request

---

## License

This project is proprietary and owned by 360 Distinct Real Estate Ltd.

---

## Contact

For inquiries, partnerships, or support:

* Email: [info@360distinctrealestate.com](mailto:info@360distinctrealestate.com)
* Website: [https://360distinctrealestate.com](https://360distinctrealestate.com)

---

## Acknowledgements

* Development team
* Investors and partners
* Early adopters and users


