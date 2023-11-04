# todo-task
**steps to run application:**

1.Clone the Repositoryto your local machine.

2. Navigate to the Project Directory:

3.Set Up Environment Variables:
PORT=3000
DB_CONNECTION_STRING=mongodb://localhost:27017/your-database
REACT_APP_API_URL=http://localhost:3000/api
JWT_SECRET=your-secret-key
Modify these values according to your setup.

4.Install Dependencies:

MERN applications consist of both a front-end (React) and a back-end (Node.js/Express). You need to install the dependencies for both parts.
Install back-end dependencies:
npm install
Change to the client directory and install front-end dependencies:
cd client
npm install

5. Run the Back-End Server:
In the project root directory, start the back-end server:
npm run dev
The server should run on the port you specified in your .env file (e.g., http://localhost:3000).

6.Run the Front-End Development Server:

In the client directory, start the front-end development server:
npm run dev
The development server will open in your default web browser and run on http://localhost:3000.

7. Connect to MongoDB:

Ensure your MongoDB server is running. If it's not running on the default port (27017) or you're using a cloud-based database, make sure to update the DB_CONNECTION_STRING in your .env file accordingly.

8.Test Your Application:

Visit http://localhost:3000 in your web browser to test your MERN stack application. You can register, log in, and use its features.

***AUTHENTICATION FLOW :***

1.User can register with an email and password.
2.User can log in with their credentials.
3.Upon successful login, a JSON Web Token (JWT) is issued and stored as a secure cookie.
4.The JWT is used to authenticate and authorize the user for protected routes.

***Security Measures*:**

1.Password hashing with bcrypt.
2.Secure JWT storage and transmission.
3.Cross-Origin Resource Sharing (CORS) configuration.
