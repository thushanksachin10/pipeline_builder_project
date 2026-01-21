🚀 Pipeline Builder Project

A visual pipeline builder built using React + React Flow on the frontend and FastAPI on the backend.
Users can create node-based pipelines, connect them via handles, and submit the pipeline for backend analysis, including DAG (Directed Acyclic Graph) validation.

📌 Features
Frontend

Drag-and-drop pipeline editor using React Flow

Reusable BaseNode abstraction to easily create new node types

Dynamic Text Node with:

Auto-resizing input area

Automatic creation of input handles from {{variables}}

Zustand-based global state management

Visual connection validation using explicit input/output handles

Backend

FastAPI endpoint to parse pipeline data

Calculates:

Number of nodes

Number of edges

Whether the pipeline forms a valid DAG

Implements Kahn’s Algorithm for cycle detection

🛠️ Tech Stack
Frontend

React

React Flow

Zustand

JavaScript

CSS

Backend

Python

FastAPI

Uvicorn

📂 Project Structure
pipeline_builder_project/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.js
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   └── textNode.js
│   │   ├── App.js
│   │   ├── ui.js
│   │   ├── store.js
│   │   ├── submit.js
│   │   ├── toolbar.js
│   │   └── draggableNode.js
│   └── package.json
│
├── backend/
│   └── main.py
│
└── README.md

▶️ How to Run the Project
1️⃣ Backend Setup
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload


Backend runs at:

http://localhost:8000

2️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs at:

http://localhost:3000

🎯 Demo Usage
Creating a Pipeline

Drag nodes (Input, Text, LLM, Output) from the toolbar

Drop them onto the canvas

Connect nodes using the visible input/output handles

Text Node Example
Hello {{name}}, your age is {{age}}


Automatically creates two input handles: name, age

Node height adjusts dynamically as text grows

📤 Submitting a Pipeline

Click the Submit button

Frontend sends nodes & edges to backend

Backend responds with:

{
  "num_nodes": 4,
  "num_edges": 3,
  "is_dag": true
}


Result is displayed in a user-friendly alert

🔄 DAG Validation

Cyclic pipelines are detected and reported

A valid pipeline must be a Directed Acyclic Graph (DAG)

Example:

Text → LLM → Text   ❌ (Cycle)

🧠 Design Decisions

BaseNode abstraction eliminates duplicated node logic

Explicit handles ensure graph correctness

No auto-connection: all edges are user-defined

Backend validation is independent of UI state

✅ Assignment Coverage
Requirement	Status
Node abstraction	✅ Implemented
Styling	✅ Unified design
Text node logic	✅ Auto-resize & variables
Backend integration	✅ Completed
DAG validation	✅ Implemented
👤 Author

Thushank Sachin Bagal
