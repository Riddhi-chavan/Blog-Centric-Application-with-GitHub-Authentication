export const dynamic  = 'force-static'
import type { Metadata } from 'next'
import styles from './About.module.css'


export const metadata: Metadata = {
    title: 'About Title',
    description: 'helo About page',
  }

export default async function About() {
    return(
      <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-10">
      <div className="max-w-7xl p-8 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Our App</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our blog app built with Next.js, Prisma, and Neon Database. This platform is designed to provide users with a seamless experience for reading and interacting with content.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc pl-6">
            <li className="text-gray-700 mb-2">**User Interaction:** Follow and unfollow other users to customize your feed.</li>
            <li className="text-gray-700 mb-2">**User Profiles:** Explore detailed user profiles to learn more about your favorite authors.</li>
            <li className="text-gray-700">**GitHub Sign-In:** Conveniently sign in with your GitHub account for a hassle-free experience.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">How to Use</h2>
          <p className="text-lg text-gray-700">
            Getting started is easy! Simply sign in with your GitHub account, explore posts, follow interesting users, and personalize your feed to discover content that matters to you.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions, feedback, or suggestions, feel free to reach out to us at [your email address].
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Happy Reading!</h2>
          <p className="text-lg text-gray-700">
            We hope you enjoy using our app and have a great time exploring the diverse range of content shared by our community. Happy reading!
          </p>
        </div>
      </div>
    </div>
    );
}