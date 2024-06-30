
# Project cryptos_

Cryptos is a project designed to provide a platform using React and Django for checking and comparing various cryptocurrencies. It aims to offer functionalities that allow users to monitor and analyze cryptocurrency data easily. Additionally, future plans include integrating features related to NFTs to enhance the platform's utility and appeal.




## Installation

Install Dependencies . preffered using nvm and miniconda for easier management. install Docker from Official Documentation : https://docs.docker.com/engine/install/
### Node JS and npm
```
nvm install 20.15.0
nvm install --latest-npm
```
### Python
```
conda create -n cryptos python=3.10
```
## Run Locally

Clone the project

```bash
  git clone git@github.com:aniketrath/cryptos_.git
```
To deploy this project locally , you need to start the project in two separate sections , frontend and backend . 
### Docker Compose
```bash
   docker compose up --build
```
### Docker Containers 
The react Application will be working on Port 80 whera the Django instalce will be on Port 8000

- Frontend
    ```bash
    cd frontend 
    docker build -t frontend:latest .
    ```
- Backend
    ```bash
    cd backend 
    docker build -t backend:latest .
    ```

### Frontend 

This is an application based on React . run the following commands to run the project locally

```bash
  cd frontend 
  npm install
  npm start
```
### Backend. 

This is an application based on Django . run the following commands to run the project locally

```bash
  cd backent 
  conda activate <your-env v3.12>
  pip install -r requirements.txt.
  python manage.py runserver
```
