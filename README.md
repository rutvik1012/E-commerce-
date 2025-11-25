https://rutvik1012.github.io/E-commerce-/


A modern and responsive E-Commerce web application built using React.js and Tailwind CSS that allows users to browse products by categories, search items, and view filtered results with a clean and user-friendly interface.


🚀 Features


✅ Category-based product browsing (Electronics, Furniture, Shoes, etc.)

✅ Dynamic product loading from REST API (EscuelaJS)

✅ Real-time search filtering

✅ Responsive design for mobile, tablet, and desktop

✅ Sticky sidebar navigation with active state

✅ Loading indicators with animated spinner

✅ Price display with discount calculation

✅ Clean UI using Tailwind CSS utility classes


🧩 Tech Stack

Frontend: React.js

Styling: Tailwind CSS

API: EscuelaJS Fake Store API

Routing: React Router DOM

HTTP Client: Axios


📱 Responsive Layout

The application is fully responsive:

Sidebar collapses naturally on small screens

Product cards adjust for different screen sizes

Optimized layout for smooth user experience across devices


🔍 Functional Highlights

Category filtering based on product type

Search bar for instant product filtering

Price sorting and discount display

Loader animation during API calls

Error-safe rendering and fallback UI


src/
│
├── components/

│   ├── SideBar.jsx        # Sidebar navigation with categories

│   ├── ID1Elec.jsx        # Electronics products page

│   ├── ID2Furni.jsx       # Furniture products page

│   ├── ID4Shoes.jsx       # Shoes products page

│   └── ID5111.jsx         # Additional category page

│
├── assets/
│   └── images/            # Static images used in UI
│
├── App.jsx                # Main app component with routes

└── main.jsx               # Entry point of React application

