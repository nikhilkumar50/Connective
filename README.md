 Connective -One stop Social Media Platform
 ### Built With React, MongoDB, ExpressJS, NodeJS, JWT, Cloudinary,Soket.io,Chakra UI

<-- Project UI -->

<div align="center">
  
<!-- HomePage -->
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/bac93dac-f921-4e78-ab59-42fa0af3dd0b" width="300"  />

<!-- UserProfile -->
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/8f71a5cf-65e0-41bf-81cd-2d3fa3b5fb49" width="300" />

<!-- UpdateProfile -->
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/f2ae396f-9cae-47d5-9009-8eae32873333" width="300" height="400" />

<!-- Chat Section -->
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/74232fa1-918a-4442-87bc-e03447c49286" width="300" />

<!-- Login & Signup -->
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/28f177db-7dec-4205-9b9d-7b0cae1db951" width="300" />
<img src="https://github.com/nikhilkumar50/Connective/assets/118098709/770e804e-b37a-459b-ae29-ea50e7f76b2f" width="300" />
</div>



 → Features

- Developed a cutting-edge social media platform named Connective, allowing users to create posts with a maximum text length of 500 characters and accompanying images.

- Implemented user profiles featuring comprehensive details, showcasing all posts made by the user. The user profile includes a convenient follow button for other users.

- Incorporated a dynamic user experience by integrating an update profile button accessible only when viewing one's own profile.

- Secured the platform with JWT (JSON Web Token) authorization for seamless and secure login and signup processes.

- Designed a homepage that aggregates and displays posts from users the current user is following, enhancing the user's content discovery experience.

- Engineered a real-time chat application utilizing Socket.io, enabling users to engage in instant messaging with seen and unseen message tracking. The chat application supports multimedia sharing.

- Integrated a suggested user feature, providing users with recommendations on who to follow based on their interests and activities within the platform.

- Implemented a notification system complete with sound alerts to notify users upon receiving new messages or other relevant information.

- Enforced community guidelines by incorporating a feature to freeze accounts in case of violations, ensuring a safe and respectful community environment.

 - Developed a responsive web application to cater to  total estimated worth of USD 392175.77 million Social Media Industry.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/nikhilkumar50/Connective.git
cd connective
```
## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and the do `npm install ` create two files: `.env` . Add the following contents to both files:

    ```plaintext
   PORT=
   MONGO_URI=
   JWT_SECRET=
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
    ```
 2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the ` MONGO_URI` variable in your `.env` files.
   

3. **Cloudinary Setup**:
    - Create an account at [Cloudinary](https://cloudinary.com/).
    - Navigate to your dashboard to find your cloud name, API key, and API secret.
    - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.
 
4. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

**Frontend**:
   - Open a new terminal and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the frontend application: `npm run dev`.
