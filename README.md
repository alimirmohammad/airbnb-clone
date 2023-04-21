# Airbnb Clone

This project is lets you sign up, login and register your properties. You can view other stays and reserve them as well.

## Technology Stack

![](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

- TypeScript
- Next.js 13
- React.js
- TailwindCSS
- Prisma
- MongoDB
- Zustand

## Deployed Version

You can checkout the deployed version of the app on [this link](https://rent-stays-everywhere.vercel.app/)

## Features

- The app uses a Tailwindcss for styling. It is fully responsive, to look good both on the desktop and on mobile.
- It uses Next.js 13 experimental `app` directory. The data fetching is done using `React Server Components`. So it is blazing fast.
- You can sign up and login with credentials. Also, authentication is also possible using Gooogle or Github accounts. The authentication is implemented using `next-auth` package.
- The app has a middleware to guard protected routes.
- The app interacts with a MongoDB database using `Prisma`.
- You can register your own properties for rent.
- You can view properties available for rent.
- You can filter the available stays.
- You can resrve and favorite stays.
- Only the person who made the reservation, and the property owner are allowed to cancel a reservation.
- A property owner can delete their property.

## Run the Project

To run the project in your local enviroment, first clone this repo. Then run the following commands:

```bash
npm install
npm run dev
```

Don't forget to add the necessary environment variables in a `.env` file in the root of the project.
