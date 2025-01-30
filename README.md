## HNG Public API

This is a simple public API that returns basic information in JSON format. It provides:
- Your registered email address on the HNG12 Slack workspace.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

## API Endpoint

### Base URL
```
https://hng-public-edh107r12-muogbo-emmanuels-projects.vercel.app/
```

### GET /
#### Response Format (200 OK)
```json
{
  "email": "eimuogbo@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Nuel-MD/hng-public-api"
}
```

---

## Technology Stack
- **Backend**: Node.js with Express
- **Hosting**: Vercel
- **CORS Handling**: Enabled with `cors` middleware

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or later recommended)
- Git

### Clone the Repository
```sh
git clone https://github.com/Nuel-MD/hng-public-api.git
cd hng-public-api
```

### Install Dependencies
```sh
npm install
```

### Run Locally
```sh
node index.js
```
The server will start on `http://localhost:3000/`.

### Deploying to Vercel
Ensure you have the [Vercel CLI](https://vercel.com/docs/cli) installed, then run:
```sh
vercel --prod
```

---

## API Documentation
### **GET /**
#### **Request**
- Method: `GET`
- URL: `https://hng-public-edh107r12-muogbo-emmanuels-projects.vercel.app/`

#### **Response**
```json
{
  "email": "eimuogbo@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/Nuel-MD/hng-public-api"
}
```

#### **Possible Responses**
| Status Code | Description        |
|------------|--------------------|
| 200        | Success            |
| 500        | Server Error       |

---

## Additional Information
- This API is publicly accessible and can be used for testing.
- The response is dynamically generated, ensuring accurate timestamps.

For more Node.js developers: [https://hng.tech/hire/nodejs-developers](https://hng.tech/hire/nodejs-developers)

---

## Author
- **Emmanuel Muogbo**  
- GitHub: [@Nuel-MD](https://github.com/Nuel-MD)

