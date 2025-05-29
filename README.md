# PropertyPro Backend API

## Overview

PropertyPro is a robust backend API for property management systems, built with Node.js, Express, and MongoDB. It provides all the necessary endpoints to manage users, properties, and favorites with secure authentication.

## Features

* **User Authentication**: JWT-based registration and login
* **Property Management**: Full CRUD operations for property listings
* **Favorites System**: Users can bookmark properties
* **Search & Filtering**: Advanced query capabilities for properties
* **Pagination**: Efficient data loading for large datasets
* **Error Handling**: Comprehensive error management
* **Security**: Password hashing, rate limiting, and CORS protection

## Quick Start

### Prerequisites

* Node.js v14 or later
* MongoDB (local or Atlas)
* Postman (for API testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/propertypro-backend.git
   cd propertypro-backend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Set up environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```
4. Start the server:

   ```bash
   npm run dev
   ```

## API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Authentication

| Endpoint             | Method | Description              | Auth Required |
| -------------------- | ------ | ------------------------ | ------------- |
| /auth/register       | POST   | Register new user        | No            |
| /auth/login          | POST   | Login user               | No            |
| /auth/me             | GET    | Get current user         | Yes           |
| /auth/favorites/\:id | PUT    | Toggle favorite property | Yes           |

### Properties

| Endpoint         | Method | Description         | Auth Required |
| ---------------- | ------ | ------------------- | ------------- |
| /properties      | GET    | Get all properties  | No            |
| /properties      | POST   | Create new property | Yes           |
| /properties/\:id | GET    | Get single property | No            |
| /properties/\:id | PUT    | Update property     | Yes           |
| /properties/\:id | DELETE | Delete property     | Yes           |

## Environment Variables

| Variable    | Required | Description               | Default       |
| ----------- | -------- | ------------------------- | ------------- |
| NODE\_ENV   | Yes      | Application environment   | development   |
| PORT        | Yes      | Server port               | 5000          |
| MONGO\_URI  | Yes      | MongoDB connection string | localhost URI |
| JWT\_SECRET | Yes      | JWT token secret          | -             |
| JWT\_EXPIRE | No       | JWT expiration time       | 30d           |

## Example Requests

### Register User

```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"123456"}'
```

### Create Property

```bash
curl -X POST http://localhost:5000/api/v1/properties \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"Luxury Villa","type":"Villa","price":1200000,"bedrooms":5,"bathrooms":4}'
```

## Deployment

### Heroku

1. Create a Heroku app
2. Set config vars
3. Push to Heroku:

   ```bash
   git push heroku main
   ```

### Docker

```bash
docker build -t propertypro .
docker run -p 5000:5000 propertypro
```

## Testing

Run tests with:

```bash
npm test
```

## Support

For issues or questions, please open an issue on our GitHub repository.
