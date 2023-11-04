8.Test Your Application:

Visit http://localhost:3000 in your web browser to test your MERN stack application. You can register, log in, and use its features.

**AUTHENTICATION FLOW :**
1.User can register with an email and password.
2.User can log in with their credentials.
3.Upon successful login, a JSON Web Token (JWT) is issued and stored as a secure cookie.
4.The JWT is used to authenticate and authorize the user for protected routes.
**Security Measures**:
1.Password hashing with bcrypt.
2.Secure JWT storage and transmission.
3.Cross-Origin Resource Sharing (CORS) configuration.
