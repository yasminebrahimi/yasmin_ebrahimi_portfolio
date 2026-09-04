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
    description: `Freelancer Application

What This Is

A modern React-based frontend for a freelancer marketplace platform that connects project owners with freelancers. The application provides a complete user interface for authentication, project management, proposal handling, and dashboard analytics. It's a work-in-progress that relies on a backend API for data persistence and business logic.

Architecture

The app uses React Router to manage page navigation between authentication (/auth), a protected owner dashboard (/owner/*), and a public home page. The entry point (main.jsx) wraps the app in BrowserRouter and QueryClientProvider for global routing and server state management.

Data Flow

- Centralized HTTP service (httpService.js) wraps Axios with credential-based authentication and automatic token refresh on 401 responses.
- React Query caches API responses (e.g., useOwnerProjects hook fetches from /api/projects) and manages loading states.
- Components use react-hook-form for controlled form inputs and react-hot-toast for notifications.

UI Structure

- The layout uses a two-column grid with a fixed sidebar navigation.
- Styling is driven by Tailwind CSS utilities with CSS custom properties for theming support (light/dark mode ready).
- Reusable UI components are organized in src/ui/, feature-specific logic in src/features/, and API calls in src/services/.

OTP Authentication Flow

The authentication system implements a two-step OTP (One-Time Password) flow via AuthContainer.jsx:

- Step 1 — Send OTP: User enters phone number in SendOTPForm, which calls getOtp() from authService.js. This posts to /user/get-otp and displays a loading spinner while processing.
- Step 2 — Verify OTP: On success, the UI advances to CheckOTPForm, where the user receives an OTP and enters it for verification via checkOtp() which posts to /user/check-otp.
- State Management: AuthContainer uses react-hook-form to manage form state with register() and getValues(), and useMutation from React Query to track pending states and errors. Toast notifications provide real-time feedback.
- Post-Auth: After verification, the user is redirected to /complete-profile to finalize their account setup.

Project Filtering and Management Flow

Projects are managed through the owner dashboard at /owner/projects, where ProjectTable.jsx displays all owner-created projects using the useOwnerProjects() custom hook.

Data Fetching: useOwnerProjects() wraps a useQuery that calls getOwnerProjectsApi() (fetches /api/project/owner-projects). React Query caches results under the ["owner-projects"] key and manages loading states.

Table Display: ProjectTable renders rows via ProjectRow.jsx, which displays:

- Project metadata (title, category, budget, deadline)
- Tags as badges
- Assigned freelancer name
- Status badge (Open/Closed)
- Action buttons (Edit, Delete)`,
    tech: ["React", "MongoDB", "Tailwind"],
    image: null,
    github: "https://github.com/yasminebrahimi/freelancer_app_react",
    live: "https://...",
  },
  {
    id: "2",
    title: "The Risk and Morty",
    type: "React",
    description: `The Risk and Morty

Overview

- The Risk and Morty — a responsive React 18 + Vite single-page app that consumes the public Rick & Morty API to search and browse characters, view character details (with recent episodes), and save favourites persisted to localStorage. It's a client-side static demo built to showcase frontend composition, custom hooks and simple persistence.

Technical highlights

- Stack: React 18 + Vite, written in JavaScript with CSS for styling; small, dependency-light frontend demo.
- Key libraries: axios (HTTP), react-hot-toast (notifications), @heroicons/react (icons), gh-pages (deploy script).
- Features: search characters by name, character list with status badges, character detail panel (with episode list and client-side sorting), add/remove favourites persisted to localStorage, modal favourites panel, loading states and visual loader component.
- Code organization: composition root in src/App.jsx (state: query, selectedId, favourites), presentational components in src/components/* (Navbar, CharacterList, CharacterDetail, Loader, Modal), and two custom hooks — src/hooks/useCharacter.js (API fetching & loading state) and src/hooks/useLocalStorage.js (persistence).
- API interactions: searches via https://rickandmortyapi.com/api/character/?name=<query>, detail fetch via /api/character/<id>, and batch episode fetching via /api/episode/<ids> (code flattens single vs. array responses).
- Deploy & scripts: npm run dev / build / preview (Vite) and npm run deploy (gh-pages).
- Notable implementation details / talking points:
- useCharacters currently limits results with data.results.slice(0,5) (easy demo cap — candidate for pagination/infinite scroll).
- Error handling could be hardened (axios.isCancel usage and defensive checks for err.response).
- useLocalStorage should guard JSON.parse with try/catch for robustness.
- Clear separation of concerns makes the project straightforward to migrate to TypeScript, add a shared API layer, or integrate React Query for caching.`,
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
    description: `Note App

What this is

A straightforward React-based note-taking application that allows users to create, manage, organize, and track the status of their notes. The app features sorting capabilities (by date or completion status), task completion tracking, and provides a real-time summary of note statistics.

Architecture

The app uses React Context + useReducer for centralized state management, eliminating the need for prop drilling.

State Management Pattern

- NotesContext.jsx maintains a single source of truth: a notes array managed by a reducer function
- The reducer handles three action types:
- "add" — appends a new note with auto-generated timestamp and ID
- "delete" — filters out a note by ID
- "complete" — toggles the completed flag on a note
- Two custom hooks export state access:
- useNotes() — read-only access to the notes array
- useNotesDispatch() — dispatch actions to modify state

Component Structure

- App.jsx — root component that wraps the tree with NotesProvider and manages the sortBy state
- AddNewNote.jsx — controlled form component that dispatches "add" actions with new note objects (title, description, createdAt timestamp, completed flag)
- NoteList.jsx — subscribes to notes via useNotes(), applies client-side sorting (latest, earliest, or by completion), and renders each note as a NoteItem sub-component
- NoteItem.jsx — individual note card displaying title, description, creation date; includes buttons to delete or toggle completion status
- NoteStatus.jsx — calculates and displays derived statistics (total notes, completed count, open count) by filtering the notes array in real time
- NoteHeader.jsx — displays the app title and a dropdown to select sort order
- Message.jsx — reusable alert component shown when no notes exist

Data Flow

- User fills out form in AddNewNote and submits
- Component creates a note object with unique ID (Date.now()) and ISO timestamp
- Dispatch "add" action → reducer appends note to state
- NoteList re-renders with updated array, applies active sort, and displays notes
- User clicks delete (❌) or completion checkbox → dispatch "delete" or "complete" action
- Reducer updates state → all subscribed components re-render
- NoteStatus recalculates statistics on every state change`,
    tech: ["React", "Vite", "Tailwind"],
    image: projectFour,
    github: "https://github.com/yasminebrahimi/note_app_react",
    live: "https://noteappwithreactyasmin.netlify.app/",
  },
  {
    id: "5",
    title: "Redux Tooklit",
    type: "React",
    description: `Redux Toolkit Demo

A small React application built to demonstrate core state-management patterns with Redux Toolkit, covering both synchronous local state and asynchronous API-driven state within a single global store.

Tech stack: React 18, Redux Toolkit (@reduxjs/toolkit), React-Redux, Axios, Vite

What it does:

- Cake Counter — lets a user "buy" a variable number of cakes via a number input, dispatching a payload-driven action that decrements a counter in the Redux store.
- Milk Counter — a simpler counter demonstrating a payload-less action (each click decrements by one).
- Users List — fetches user data from a public REST API (jsonplaceholder.typicode.com) using createAsyncThunk, and renders loading, error, and success states driven entirely by the async thunk's lifecycle actions (pending / fulfilled / rejected).

What it demonstrates:

- Modern Redux Toolkit setup with configureStore and multiple feature "slices" (cakeSlice, milkSlice, userSlice), each in its own feature folder — a scalable pattern for larger apps.
- createSlice for concise, boilerplate-free reducers using Immer's mutable-update syntax under the hood.
- createAsyncThunk for handling async side effects (API calls) with automatic pending/fulfilled/rejected action types, paired with extraReducers (builder callback API) to handle those actions in a slice that doesn't own the thunk directly.
- The react-redux hooks API (useSelector, useDispatch) as the modern replacement for the older connect()/mapStateToProps pattern.
- Component-level state (useState) composed alongside global Redux state, showing where local UI state ends and shared app state begins.`,
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
