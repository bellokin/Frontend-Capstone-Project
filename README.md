# Ọsin — Pet Adoption App

A fully functional pet adoption app built with **Next.js 14**, **React**, **TailwindCSS**, and **Context API**.

---

## 🗂️ Project Structure

```
osin/
├── components/
│   ├── Filter.jsx          # Type/breed filter chips
│   ├── Footer.jsx          # Site footer
│   ├── Header.jsx          # Sticky nav with active states + badges
│   ├── Layout.jsx          # Root layout wrapper (Header + Footer + Toast)
│   ├── PetCard.jsx         # Individual pet card (links → /pets/[id])
│   ├── PetDetail.jsx       # Full pet detail view (used in /pets/[id])
│   ├── PetList.jsx         # Renders PetCard grid, handles empty state
│   ├── SearchBar.jsx       # Search input with clear button
│   └── Toast.jsx           # Notification toast (via Context)
│
├── context/
│   └── AppContext.jsx      # Global state: favorites, applications, search/filter
│
├── data/
│   └── pets.js             # Hard-coded pet objects array
│
├── pages/
│   ├── _app.js             # Wraps app in AppProvider + Layout
│   ├── index.js            # Home: Hero + Search + Filter + PetList
│   ├── favourites.js       # Saved pets page
│   ├── applications.js     # Adoption applications page
│   ├── 404.js              # Custom 404
│   └── pets/
│       └── [id].js         # Dynamic pet detail page (getStaticProps + getStaticPaths)
│
├── styles/
│   └── globals.css         # Design tokens, keyframes, base component styles
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## 📦 Features

| Feature | Location |
|---|---|
| Pet listing | `pages/index.js` + `PetList` + `PetCard` |
| Search (name/type/breed) | `SearchBar` + Context `search` state |
| Filter by type/breed | `Filter` + Context `activeType`/`activeBreed` |
| Dynamic pet page | `pages/pets/[id].js` + `PetDetail` |
| Favourites | Context `toggleFavorite` + `pages/favourites.js` |
| Adopt application | Context `applyToAdopt` + `pages/applications.js` |
| Global state | `context/AppContext.jsx` |
| Toast notifications | `Toast.jsx` + Context `toast` state |

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 📅 Weekly Deliverables

- **Week 1**: ✅ Next.js + Tailwind setup · Header · Footer · PetList · PetCard · static pet data
- **Week 2**: ✅ Dynamic routing `/pets/[id]` · PetDetail · Favourite + Adopt buttons
- **Week 3**: ✅ SearchBar · Filter · Favourites page · Applications page · Context API
- **Week 4**: ✅ Full Tailwind styling · Responsive design · Ready for Vercel deploy

---

Made with ♥ in Lagos 🇳🇬
