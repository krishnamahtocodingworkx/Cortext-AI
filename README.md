# Cortext-AI | NeuraFlow AI

NeuraFlow AI is a production-ready multi-agent AI platform built using a microservices architecture. It enables users to interact with AI agents, upload and process documents, and leverage Retrieval-Augmented Generation (RAG) for context-aware responses.

## Features

- Multi-Agent AI workflows
- JWT Authentication & Authorization
- Microservices Architecture
- AI Chat with Streaming Responses
- RAG-based Document Processing
- Vector Search with Qdrant
- Redis Caching
- RESTful APIs
- Docker-based Local Development
- Secure File Upload & Processing
- Responsive React Frontend

## Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Redis
- JWT Authentication
- Microservices

### AI
- LangChain
- LangGraph
- RAG (Retrieval-Augmented Generation)
- Qdrant Vector Database

### DevOps
- Docker
- Docker Compose
- Git & GitHub

## Project Structure

```
frontend/
backend/
├── gateway/
├── services/
│   ├── auth/
│   ├── chat/
│   ├── billing/
│   └── agent/
```

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/NeuraFlow-AI.git
cd NeuraFlow-AI
```

### Install dependencies

Install dependencies inside each service and the frontend.

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file for each backend service and configure:

- MongoDB URI
- Redis URL
- JWT Secret
- AI API Keys
- Firebase Credentials
- Other required environment variables

### Start Redis

```bash
cd backend
docker compose up
```

### Run Backend Services

Start each microservice individually.

```bash
npm run dev
```

### Run Frontend

```bash
cd frontend
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

## Future Improvements

- CI/CD using GitHub Actions
- AWS Deployment
- Kubernetes Support
- Monitoring & Logging
- API Rate Limiting

## License

This project is intended for learning and portfolio purposes.