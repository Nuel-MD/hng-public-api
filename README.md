# Public API for HNG12 Task

## Description
This project is a simple Node.js API built with Express. It provides a publicly accessible endpoint that returns JSON-formatted information including:
- The registered email address used on the HNG12 Slack workspace.
- The current datetime in ISO 8601 format.
- The GitHub URL of the project repository.

## Technologies Used
- Node.js
- Express.js
- CORS middleware
- Vercel for deployment

## API Endpoint
### GET /
#### Response Format (200 OK):
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- Git

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the server locally:
   ```sh
   node index.js
   ```
4. The API will be accessible at:
   ```sh
   http://localhost:3000/
   ```

## Deployment to Vercel
### Steps to Deploy
1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Login to Vercel:
   ```sh
   vercel login
   ```
3. Deploy the project:
   ```sh
   vercel
   ```
4. Follow the prompts and confirm deployment. A public URL will be generated.

## Reference Link
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

---

### Notes:
- Ensure to update `your-email@example.com` with your actual HNG12 Slack email.
- Replace `yourusername/your-repo` with your actual GitHub repository URL.
- Double-check deployment by visiting the generated Vercel URL.
