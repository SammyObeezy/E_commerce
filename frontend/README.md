# React + Vite

<p>This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.</p>

<h2>Currently, two official plugins are available:</h2>
<ul>
  <li>
    <a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">@vitejs/plugin-react</a>
    uses <a href="https://babeljs.io/">Babel</a> for Fast Refresh
  </li>
  <li>
    <a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a>
    uses <a href="https://swc.rs/">SWC</a> for Fast Refresh
  </li>
</ul>

<h2>E-commerce Frontend</h2>
<p>This project is the frontend of an E-commerce application built with modern web technologies. It provides users with a seamless shopping experience, offering features like product browsing, searching, and checkout.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#project-setup">Project Setup</a></li>
  <li><a href="#available-scripts">Available Scripts</a></li>
  <li><a href="#project-structure">Project Structure</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="features">Features</h2>
<ul>
  <li><strong>Product Listings:</strong> View a list of products available in the store.</li>
  <li><strong>Product Details:</strong> Click on a product to view its details.</li>
  <li><strong>Search and Filter:</strong> Search for products by name and filter by categories.</li>
  <li><strong>Shopping Cart:</strong> Add products to the cart and manage cart items.</li>
  <li><strong>Responsive Design:</strong> Mobile-first design for an optimal experience on all devices.</li>
</ul>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
  <li><strong>React:</strong> For building a responsive UI.</li>
  <li><strong>Tailwind CSS:</strong> For styling.</li>
  <li><strong>JavaScript (ES6):</strong> Project's main scripting language.</li>
  <li><strong>npm:</strong> Package manager to install dependencies.</li>
</ul>

<h2 id="project-setup">Project Setup</h2>
<p>Clone the repository:</p>
<pre>
<code>git clone &lt;repository-url&gt;
cd e-commerce-frontend</code>
</pre>
<p>Install dependencies:</p>
<p>Make sure you have Node.js and npm installed. Then, in the project directory, install the necessary dependencies:</p>
<pre>
<code>npm install</code>
</pre>
<p>Environment Variables:</p>
<p>Create a <code>.env</code> file in the root of your project. This file will store your environment variables, such as the API endpoint URL for fetching product data. An example <code>.env</code> file might look like this:</p>
<pre>
<code>REACT_APP_API_URL=http://localhost:4000/api</code>
</pre>
<p>Note: Make sure to replace <code>http://localhost:5000/api</code> with your actual backend URL.</p>

<h2 id="available-scripts">Available Scripts</h2>
<p>In the project directory, you can run the following commands:</p>
<ul>
  <li><strong>npm run dev:</strong> Runs the app in development mode. Open <a href="http://localhost:5174">http://localhost:5174</a> to view it in your browser. The app will reload if you make edits.</li>
  <li><strong>npm run build:</strong> Builds the app for production to the build folder. It bundles React in production mode and optimizes the build for best performance.</li>
  <li><strong>npm run lint:</strong> Lints the code using ESLint to help you maintain consistent code style and catch any syntax errors.</li>
</ul>

<h2 id="project-structure">Project Structure</h2>
<pre>
<code>
e-commerce-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, etc.
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (e.g., Home, Product Details)
│   ├── services/        # API calls and data fetching
│   ├── App.js           # Main app component
│   └── index.js         # Main entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── .env                 # Environment variables
├── package.json
└── README.md
</code>
</pre>

<h2 id="usage">Usage</h2>
<p>Run the Development Server:</p>
<p>After setting up, run the development server:</p>
<pre>
<code>npm run dev</code>
</pre>
<p>Access the Application:</p>
<p>Once the server is running, open <a href="http://localhost:5174">http://localhost:5174</a> in your browser to view the application.</p>

<p>Explore Functionality:</p>
<ul>
  <li><strong>Browse Products:</strong> On the homepage, you will see a list of products available in the store.</li>
  <li><strong>Search and Filter:</strong> Use the search bar or available filters to narrow down products.</li>
  <li><strong>View Product Details:</strong> Click on any product for more information, including a detailed description and reviews.</li>
  <li><strong>Add to Cart:</strong> Select products and add them to your cart.</li>
  <li><strong>Responsive Design:</strong> The app is designed to work on all screen sizes, from mobile devices to desktop.</li>
</ul>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License.</p>
