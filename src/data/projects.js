import projectTwo from "../assets/images/project_two.png";
import projectThree from "../assets/images/project_three.png";
import projectFour from "../assets/images/project_four.png";
import projectFive from "../assets/images/project_five.png";
import projectSix from "../assets/images/project_six.png";

export const projects = [
  {
    id: "1",
    title: "Freelancer Application",
    type: "Full Stack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["React", "MongoDB", "Tailwind"],
    image: null,
    github: "https://github.com/yasminebrahimi/freelancer_app_react",
    live: "https://...",
  },
  {
    id: "2",
    title: "The Risk and Morty",
    type: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["React", "Vite", "Tailwind"],
    image: projectTwo,
    github: "https://github.com/yasminebrahimi/the_risk_and_morty_react",
    live: "https://rickandmortyfakeapiyasmin.netlify.app/",
  },
  {
    id: "3",
    title: "Inventory Application",
    type: "React",
    description: `Inventory App

A single-page inventory management application built with React, designed to let users organize and track products across custom categories — all without a backend, using the browser's localStorage for persistence.

Overview

The app solves a simple but common problem: keeping track of items you own or manage, grouped into categories you define yourself. Rather than shipping with a fixed set of categories, the app lets the user create their own (e.g., "Electronics," "Office Supplies," "Kitchen") complete with a title and description, then assign products to them as they're added. Every product records a title, a quantity, and a timestamp of when it was created, which powers the sorting functionality later on.

Once products exist, the interface gives users three ways to work with their inventory at once — searching by title, sorting by newest/oldest, and filtering down to a single category — and all three can be combined simultaneously. The product list re-derives itself reactively as any of those controls change, so the displayed results are always an accurate, live intersection of the current search term, sort order, and category filter.

How it works technically

The app is a single-page React application with all state lifted into the root App component and passed down to child components as props — a deliberately simple architecture without a global state library, appropriate for an app of this scope. State is split into two core collections, products and categories, plus UI state for the active sort order, search term, and selected category filter.

A useEffect hook re-runs a small filtering pipeline any time the underlying data or filter controls change: it filters products by whether their title includes the current search text, filters again by the selected category (if one is set), and finally sorts the result by creation date. This derived list — never the raw products state — is what actually renders, which keeps the "source of truth" data and the "currently displayed" data cleanly separated.

Persistence is handled with the browser's localStorage API: both products and categories are loaded from storage on initial mount and written back to storage automatically whenever they change, so a user's inventory survives page refreshes and browser restarts without any server or database.

The UI itself is built with Tailwind CSS utility classes for a clean, dark-themed layout, and is structured into focused, single-responsibility components:

- NavBar — app header/branding
- CategoryForm — a collapsible form for creating new categories
- ProductsForm — a form for adding new products, with a category dropdown populated dynamically from existing categories
- Filter — search input, sort dropdown, and category dropdown, all controlled from the parent
- ProductList — renders the filtered/sorted products, resolves each product's category name for display, and supports deleting individual products

Tech stack

- React 19 (function components, hooks-based state management — useState, useEffect)
- Vite for the build tooling and dev server
- Tailwind CSS for styling
- ESLint for code quality
- Browser localStorage as the persistence layer (no backend/database)

Notable design choices worth highlighting in a portfolio

- Derived state over stored state — filtered/sorted results are computed on the fly rather than stored, avoiding state synchronization bugs.
- Props-based data flow — a clear, one-directional flow of state and handlers from App down to presentational components, without introducing unnecessary complexity like Redux or Context for what is fundamentally a small app.
- Zero-backend persistence — a practical use of localStorage to make the app fully functional and stateful without any server infrastructure, ideal for a lightweight personal or demo tool.`,
    tech: ["React", "Vite", "Tailwind"],
    image: projectThree,
    github: "https://github.com/yasminebrahimi/inventory_app_react",
    live: "https://inventory-app-yasmin.netlify.app/",
  },
  {
    id: "4", 
    title: "Note App",
    type: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["React", "Vite", "Tailwind"],
    image: projectFour,
    github: "https://github.com/yasminebrahimi/note_app_react",
    live: "https://noteappwithreactyasmin.netlify.app/",
  },
  {
    id: "5",
    title: "Redux Tooklit",
    type: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech: ["React", "Vite", "Tailwind"],
    image: projectFive,
    github: "https://github.com/yasminebrahimi/redux_tooklit",
    live: "https://redux-tooklit-yasmin.netlify.app/",
  },
  {
    id: "6",
    title: "Booking Hotel",
    type: "React",
    description: `Airbnb-Style Hotel Booking App (React)

A full-featured hotel/stay browsing and booking front-end inspired by Airbnb, built with React 18 and Vite. The app combines search-driven property discovery with an interactive map and a personal "trip bookmarking" feature backed by geolocation and reverse-geocoding.

Core Features

- Search & Filtering — Header search bar lets users enter a destination, pick a date range (via react-date-range), and configure guest/room counts with a custom increment/decrement dropdown. Search parameters are encoded into the URL and used to query the results.
- Property Listings — Home page and search results display hotel cards (image, location, name, price per night) pulled from a REST API, with graceful image fallback to a placeholder when a listing photo fails to load.
- Property Detail View — Dedicated page per listing showing full details, review counts, and hero image.
- Interactive Map — Built with react-leaflet (OpenStreetMap tiles): shows all matching listings as markers, recenters based on URL coordinates or the browser's geolocation API, and lets users click anywhere on the map to drop a pin for a new bookmark.
- Bookmarks / Saved Trips (Protected) — Authenticated users can save locations from the map, view saved bookmarks, inspect a single bookmark, and delete entries. New bookmarks are automatically reverse-geocoded (via the BigDataCloud API) to resolve city, country, and country flag from lat/lng coordinates.
- Authentication & Route Protection — Simple login flow with a ProtectedRoute wrapper that redirects unauthenticated users away from the bookmarks section.
- Toast Notifications — User feedback (errors, async status) handled via react-hot-toast.

Architecture & Technical Highlights

- React Context + useReducer for state management across three domains: authentication, hotel listings, and bookmarks — each isolated in its own provider, avoiding prop drilling.
- Custom Hooks: useFetch (generic data fetching with loading state), useGeoLocation (browser geolocation wrapper), useUrlLocation (reads lat/lng from URL search params), useOutsideClick (closes dropdowns on outside click).
- React Router v6 with nested routes and layout components (AppLayout, BookmarkLayout) for shared UI shells between list/detail views.
- Mock REST Backend — json-server serves a real Airbnb Amsterdam listings dataset (server/db.json) for hotels and a separate bookmarks collection, simulating a production API during development.
- Axios for API calls with try/catch error handling surfaced via toast messages.`,
    tech: ["React", "Vite", "Tailwind"],
    image: projectSix,
    github: "https://github.com/yasminebrahimi/booking_hotel_app_react",
    live: "https://booking-hotel-yasmin.netlify.app/",
  },
];
