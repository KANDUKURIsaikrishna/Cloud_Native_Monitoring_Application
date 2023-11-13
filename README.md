# Cloud Native Monitoring Python App on Kubernetes

## Prerequisites:

Before getting started with the project, ensure you have the following prerequisites:

- AWS Account with programmatic access and AWS CLI configured.
- Python 3 installed.
- Docker and Kubectl installed.
- Code editor (e.g., VSCode).

## Part 1: Deploying the Flask application locally

### Step 1: Clone the code
```bash
git clone <repository_url>
cd <project_directory>
```

### Step 2: Install dependencies

The application requires the psutil, Flask, Plotly, and boto3 libraries. Install them using pip:

```bash
pip install -r requirements.txt
```
### Step 3: Run the application

To run the application, navigate to the root directory of the project and execute the following command:

```bash
python3 app.py
```
## Part 2: Dockerizing the Flask application:

### Step 1: Create a Dockerfile

Create a Dockerfile in the root directory of the project with the provided contents.

### Step 2: Build the Docker image

```bash
docker build -t <image_name> .
```
### Step 3: Run the Docker container

Run the Docker container using the following command

```bash
docker run -p 5000:5000 <image_name>
```
## Part 3: Pushing the Docker image to ECR:

### Step 1: Create an ECR repository

Run the provided Python script to create an ECR repository.

### Step 2: Push the Docker image to ECR

Push the Docker image to ECR using the appropriate Docker push command.

## Part 4: Creating an EKS cluster and deploying the app using Python:

###Step 1: Create an EKS cluster

Create an EKS cluster and add a node group.

### Step 2: Create a deployment and service

Use the provided Python script to create a Kubernetes deployment and service for the Flask application. Replace the image URI on line 25 with your ECR image URI.

Once you run the script, the deployment and service will be created. Check the status using the provided Kubernetes commands.

Congratulations! You have successfully completed the Cloud Native Resource Monitoring Python App on K8s project. Now you have a scalable and efficient resource monitoring application deployed on Amazon EKS.

Feel free to explore and modify the project to further enhance your knowledge and skills in cloud-native application development! Happy coding! 🚀


