## CLONEFLIX

<img width="1920" alt="sign_in" src="https://github.com/Abdullahi-Elmi/CloneFlix/assets/27597882/17a960ff-45b8-4f69-979e-0a819c316492">

You can visit the application at: [CLONEFLIX](https://cloneflix-zeta.vercel.app)

This is a full-stack web application project, I originally developed in Feb.2023. I developed it back then to solidify and demonstrate my knowledge in creating a full-stack application.

I recently decided to create an updated version as there was a significant Next.js version release in May 2023 that changed things significantly and I wanted to practice my understanding of these changes by successfully migrating an older project to the current Next.js version.

The videos on the website are obviously not the actual movies, but their respective trailers as their substitute.

## Technologies

The project was written in TypeScript

The tech stack for this project consists of:

- **React / Next.js:** For the front-end
- **Tailwind:** For the CSS/UI
- **Node.js:** For the backend
- **MongoDB:** For the database

Other tools include:

- **Prisma:** ORM for the database
- **NextAuth:** Authentication library to sync with any OAuth service
- **SWR**: Hooks library for data fetching
- **Vercel:** Deployment

## Functionality

- Sign Up
- Sign In
- Google & Github Authentication
- Sign Out
- Watch Videos
- Favorite videos. (Your "My List" persists after logout)
- Route protection (Can't visit the home page or your profiles page without logging in).
- Full Netflix emulating UI

#### To-Do:

These aren't big things, just tweaks I can make in the future to make the site look as populated as Netflix:

- Create a larger database of videos across a handful of genres.
- Create several more movie lists besides ("Trending Now" & "My-List") for those genres.
- Recreate Netflix movie list arrows (to keep multiple movies in the same list, and the sliding animations)
