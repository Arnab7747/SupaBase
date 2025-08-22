# 🎉 Supabase Events Platform

A minimal **Next.js + Supabase** demo app where users can view upcoming events and RSVP (`Yes / No / Maybe`).  
Deployed easily on **Vercel** and powered by **Supabase PostgreSQL**.

---

## 🚀 Features

- 📅 **List Events**: Browse all upcoming events (from Supabase `events` table).
- 🙋 **RSVP**: Respond to an event (`Yes`, `No`, `Maybe`).
- 🔄 **Live Database**: All reads/writes happen directly against Supabase.
- 🖥 **Minimal UI**: TailwindCSS styling + navigation bar.
- 🌐 **Deploy Ready**: Works out-of-the-box on Vercel.

---

## 🛠 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/) – React framework
- [Supabase](https://supabase.com/) – Backend-as-a-Service (PostgreSQL, Auth, API)
- [TailwindCSS](https://tailwindcss.com/) – Utility-first styling

---

## 📂 Project Structure

-src/
├── app/
│ ├── events/
│ │ ├── [id]/page.tsx # RSVP page
│ │ └── page.tsx # Events list
│ ├── layout.tsx # Global layout + navbar
│ └── page.tsx # Home page
│
├── lib/
│ └── supabaseClient.ts # Supabase client setup
│
├── styles/
│ └── globals.css # Tailwind + global styles


---

# Project Setup and Deployment Guide

setup:
  - step: Install Dependencies
    command: npm install

  - step: Configure Supabase
    tasks:
      - description: "Create tables in Supabase: users, events, rsvps."
      - description: "Get your Supabase URL and Anon Key from the Supabase project dashboard."
      - description: "Add environment variables to .env.local file."
        env_file: ".env.local"
        variables:
          NEXT_PUBLIC_SUPABASE_URL: "https://YOUR-PROJECT.supabase.co"
          NEXT_PUBLIC_SUPABASE_ANON_KEY: "YOUR-ANON-KEY"

run_locally:
  command: "npm run dev"
  url: "http://localhost:3000"

deploy_on_vercel:
  platform: "Vercel"
  steps:
    - "Push the project repository to GitHub."
    - "Import the project from your GitHub repository into Vercel."
    - "Add the Supabase environment variables in the Vercel project settings."
    - "Click 'Deploy' to launch the application. 🎉"

future_improvements:
  - feature: "🔐 Add Supabase Auth"
    description: "Tie RSVPs directly to the logged-in user account."
  - feature: "🗓 Event creation form"
    description: "Allow authenticated users to create new events."
  - feature: "📊 Dashboard"
    description: "Provide a view to see RSVP counts for each event."