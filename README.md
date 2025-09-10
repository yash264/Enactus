# 🌟 Enactus MNNIT Allahabad 2025 - Official Website

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-blue?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS">
</div>

## 📋 Table of Contents
- [About](#about)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Setup](#installation--setup)
- [Development Guidelines](#development-guidelines)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🎯 About

Enactus MNNIT Allahabad is an organization consisting of dedicated and driven students who share the mutual aim of creating a better and more sustainable world. We seek to uplift communities through entrepreneurial action.

Our key projects include:
- **Neer** - Water conservation and management
- **Samvesh** - Community integration initiatives  
- **Moonj** - Sustainable craft development
- **Sahyog** - Educational support programs

This website serves as our digital hub, showcasing our work, team, and impact while providing e-commerce functionality for our social products.

---

## 🚀 Live Demo

**Production:** https://enactus-mnnit2k25.netlify.app

---

## ✨ Features

### 🔐 Authentication & Security
- **OTP Authentication** - Secure login/signup using One-Time Password verification
- **Session Management** - Secure user session handling
- **Input Validation** - Client and server-side validation

### 💳 E-Commerce & Payments
- **Product Catalog** - Browse social impact products
- **Shopping Cart** - Add/remove items with persistent cart state
- **Payment Integration** - Seamless checkout using Razorpay
- **Invoice Generation** - Professional PDF invoices using JsPDF
- **Order Tracking** - Real-time order status updates

### 👥 Team Management
- **Dynamic Team Pages** - Individual department showcases
- **Alumni System** - Present team and alumni categorization
- **Leadership Profiles** - Detailed coordinator information
- **Interactive Cards** - Hover effects and smooth animations

### 🎨 Modern UI/UX
- **Responsive Design** - Mobile-first approach
- **Dark/Light Themes** - Consistent design system
- **Smooth Animations** - Framer Motion integration
- **Modern Components** - Reusable component library

---

## 🛠 Tech Stack

### Frontend
- **React 18.x** - Modern React with hooks and functional components
- **React Router** - Client-side routing and navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library
- **JsPDF** - PDF generation for invoices

### Backend
- **Node.js 18.x** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **Handlebars** - Template engine for views

### Development Tools
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS post-processor
- **ESLint** - Code linting and formatting
- **Git** - Version control system

### Deployment
- **Netlify** - Frontend hosting and deployment
- **MongoDB Atlas** - Cloud database hosting
- **Environment Variables** - Secure configuration management

---

## 📁 Folder Structure

```
enactus-website2k25/
├── 📁 client/                          # Frontend React Application
│   ├── 📁 public/                      # Static Assets
│   │   ├── index.html                  # Main HTML template
│   │   └── 📁 MeetOurTeamImages/       # Team member photos
│   │       ├── roysha.jpeg
│   │       ├── shreyansh.jpeg
│   │       └── utkarsh.jpeg
│   │
│   ├── 📁 src/                         # Source Code
│   │   ├── App.jsx                     # Main App component
│   │   ├── index.js                    # Application entry point
│   │   ├── index.css                   # Global styles
│   │   │
│   │   ├── 📁 assets/                  # Media Assets
│   │   │   ├── 📁 Home/                # Homepage images
│   │   │   │   ├── img1.jpg
│   │   │   │   ├── img2.jpg
│   │   │   │   ├── img3.jpg
│   │   │   │   ├── img4.jpg
│   │   │   │   └── img5.jpg
│   │   │   │
│   │   │   ├── 📁 logo/                # Brand assets
│   │   │   │   └── Enactus.png
│   │   │   │
│   │   │   ├── 📁 projects/            # Project-related images
│   │   │   │   └── 📁 images/
│   │   │   │
│   │   │   └── 📁 Teams/               # Team and department assets
│   │   │       ├── content.jpg         # Department header images
│   │   │       ├── DESIGN.jpg
│   │   │       ├── field.jpg
│   │   │       ├── research.webp
│   │   │       ├── SPONSORSHIP.jpg
│   │   │       ├── web.jpg
│   │   │       └── 📁 TeamMembers/     # Individual member photos
│   │   │           ├── 📁 WebTeam/
│   │   │           ├── 📁 ContentTeam/
│   │   │           ├── 📁 ResearchDevelopmentTeam/
│   │   │           ├── 📁 FieldOfficer/
│   │   │           ├── 📁 DesignTeam/
│   │   │           └── 📁 MarketingTeam/
│   │   │
│   │   ├── 📁 components/              # Reusable React Components
│   │   │   ├── 📁 About/               # About page components
│   │   │   │   └── TextWrapper.jsx
│   │   │   │
│   │   │   ├── 📁 BuyProduct/          # E-commerce components
│   │   │   │   ├── InputForm.jsx       # Product purchase form
│   │   │   │   ├── Invoice.js          # Invoice generation
│   │   │   │   ├── Payment.jsx         # Payment processing
│   │   │   │   └── Table.jsx           # Order summary table
│   │   │   │
│   │   │   ├── 📁 Ecart/               # Shopping cart components
│   │   │   │   ├── Authentication.jsx  # User authentication
│   │   │   │   ├── CartDrawer.jsx      # Sliding cart drawer
│   │   │   │   ├── CartItem.jsx        # Individual cart item
│   │   │   │   ├── ProductCard.jsx     # Product display card
│   │   │   │   ├── ProductList.jsx     # Product grid/list
│   │   │   │   ├── Products.js         # Product data management
│   │   │   │   └── SearchBar.jsx       # Product search functionality
│   │   │   │
│   │   │   ├── 📁 General/             # Shared UI components
│   │   │   │   ├── Footer.jsx          # Site footer
│   │   │   │   └── Navbar.jsx          # Navigation header
│   │   │   │
│   │   │   ├── 📁 Home/                # Homepage components
│   │   │   │   ├── AboutEnactus.jsx    # Organization overview
│   │   │   │   ├── AnimatedTestimonials.jsx # Testimonial carousel
│   │   │   │   ├── Details.jsx         # Detailed information
│   │   │   │   ├── DiscoverEnactus.jsx # Mission/vision section
│   │   │   │   ├── ImageCard.js        # Reusable image card
│   │   │   │   ├── ImagesSlider.jsx    # Hero image slider
│   │   │   │   ├── LeadershipCards.jsx # Leadership showcase
│   │   │   │   ├── News.jsx            # News and updates
│   │   │   │   ├── ProjectCarousel.jsx # Project showcase
│   │   │   │   ├── Stats.jsx           # Impact statistics
│   │   │   │   ├── TeamCard.jsx        # Team member card
│   │   │   │   ├── teamData.json       # Team data (legacy)
│   │   │   │   ├── Template.js         # Reusable template
│   │   │   │   └── 📁 UI/              # UI components
│   │   │   │
│   │   │   ├── 📁 Projects/            # Project showcase components
│   │   │   │   ├── ImageCard.js        # Project image card
│   │   │   │   ├── ImageList.js        # Project image gallery
│   │   │   │   ├── ImageSlider.js      # Project image slider
│   │   │   │   ├── Title.js            # Project title component
│   │   │   │   ├── Webpage.js          # Project webpage layout
│   │   │   │   └── 📁 Descriptions/    # Project descriptions
│   │   │   │
│   │   │   └── 📁 Teams/               # Team management components
│   │   │       ├── Department.js       # Department header
│   │   │       ├── Imagecard.js        # Team member card
│   │   │       ├── TeamPageTemplate.js # Team page layout
│   │   │       └── Template.js         # Team grid template
│   │   │
│   │   ├── 📁 data/                    # Data Management
│   │   │   ├── index.js                # Central data exports
│   │   │   ├── teamData.js             # Team information database
│   │   │   └── leadershipData.js       # Leadership profiles
│   │   │
│   │   ├── 📁 images/                  # Additional images
│   │   │   ├── asset.js                # Image asset exports
│   │   │   ├── en1.png → en8.png       # Enactus brand images
│   │   │   ├── roysha.jpeg             # Leadership photos
│   │   │   ├── shreyansh.jpeg
│   │   │   └── utkarsh.jpeg
│   │   │
│   │   ├── 📁 lib/                     # Utility Libraries
│   │   │   └── utils.js                # Helper functions
│   │   │
│   │   └── 📁 pages/                   # Page Components
│   │       ├── About.jsx               # About page
│   │       ├── BuyProduct.jsx          # Product purchase page
│   │       ├── Ecart.jsx               # Shopping cart page
│   │       ├── Home.jsx                # Homepage
│   │       ├── Project.jsx             # Projects showcase
│   │       ├── Selection.jsx           # Team selection page
│   │       └── 📁 Teams/               # Individual team pages
│   │           ├── Content.js          # Content team page
│   │           ├── Design.js           # Design team page
│   │           ├── Field.js            # Field team page
│   │           ├── Marketing.js        # Marketing team page
│   │           ├── Reserch.js          # Research team page
│   │           └── Web.js              # Web team page
│   │
│   ├── 📄 package.json                 # Frontend dependencies
│   ├── 📄 tailwind.config.js           # Tailwind configuration
│   ├── 📄 postcss.config.js            # PostCSS configuration
│   └── 📄 netlify.toml                 # Netlify deployment config
│
├── 📁 server/                          # Backend Node.js Application
│   ├── 📄 index.js                     # Server entry point
│   ├── 📄 connection.js                # Database connection
│   │
│   ├── 📁 controllers/                 # Business Logic
│   │   ├── news.controller.js          # News management
│   │   └── order.controller.js         # Order processing
│   │
│   ├── 📁 models/                      # Database Models
│   │   └── order.model.js              # Order schema
│   │
│   ├── 📁 routes/                      # API Routes
│   │   ├── news.routes.js              # News endpoints
│   │   └── order.routes.js             # Order endpoints
│   │
│   ├── 📁 views/                       # Template Views
│   │   ├── home.hbs                    # Homepage template
│   │   └── invoice.hbs                 # Invoice template
│   │
│   └── 📄 package.json                 # Backend dependencies
│
├── 📄 .gitignore                       # Git ignore rules
└── 📄 README.md                        # Project documentation
```

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Git**

### 1. Clone Repository
```bash
git clone https://github.com/Ayush5071/enactus-website2k25.git
cd enactus-website2k25
```

### 2. Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm start
```

### 3. Backend Setup
```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file with your configurations
touch .env

# Add environment variables
MONGODB_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000

# Start server
npm start
```

### 4. Environment Variables

#### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY=your_razorpay_key
```

#### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/enactus
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 📝 Development Guidelines

### 🎨 Code Style
- Use **functional components** with hooks
- Follow **ES6+** syntax conventions
- Use **Tailwind CSS** for styling
- Implement **responsive design** principles
- Add **JSDoc comments** for complex functions

### 📦 Component Structure
```jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

/**
 * Component description
 * @param {Object} props - Component props
 * @param {string} props.title - Component title
 */
const ComponentName = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="component-styles"
    >
      <h2>{title}</h2>
      {children}
    </motion.div>
  );
};

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default ComponentName;
```

### 🗂 File Naming Conventions
- **Components**: PascalCase (e.g., `TeamCard.jsx`)
- **Pages**: PascalCase (e.g., `Home.jsx`)
- **Utilities**: camelCase (e.g., `utils.js`)
- **Assets**: kebab-case (e.g., `team-photo.jpg`)

---

## 📚 API Documentation

### Authentication Endpoints
```javascript
POST /api/auth/send-otp     // Send OTP to phone/email
POST /api/auth/verify-otp   // Verify OTP and login
GET  /api/auth/profile      // Get user profile
```

### Order Management
```javascript
GET    /api/orders          // Get all orders
POST   /api/orders          // Create new order
GET    /api/orders/:id      // Get specific order
PUT    /api/orders/:id      // Update order status
DELETE /api/orders/:id      // Cancel order
```

### News & Updates
```javascript
GET    /api/news            // Get all news
POST   /api/news            // Create news (admin)
PUT    /api/news/:id        // Update news (admin)
DELETE /api/news/:id        // Delete news (admin)
```

---

## 🚀 Deployment

### Frontend (Netlify)
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Configure environment variables
5. Deploy automatically on push

### Backend (Heroku/Railway)
1. Create new app on platform
2. Connect GitHub repository
3. Configure environment variables
4. Set start command: `npm start`
5. Deploy automatically on push

### Database (MongoDB Atlas)
1. Create cluster on MongoDB Atlas
2. Configure network access
3. Create database user
4. Get connection string
5. Update environment variables

---

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** feature branch: `git checkout -b feature/amazing-feature`
4. **Commit** changes: `git commit -m 'Add amazing feature'`
5. **Push** to branch: `git push origin feature/amazing-feature`
6. **Submit** pull request

### Pull Request Guidelines
- Write clear, descriptive titles
- Include detailed description of changes
- Add screenshots for UI changes
- Ensure all tests pass
- Follow code style guidelines
- Update documentation if needed

### Issue Reporting
- Use issue templates
- Provide detailed reproduction steps
- Include browser/OS information
- Add relevant screenshots/logs

---

## 📞 Support & Contact

- **Website**: [Enactus MNNIT](https://enactus-mnnit2k25.netlify.app)
- **Email**: contact@enactusmnnit.org
- **GitHub**: [Repository Issues](https://github.com/Ayush5071/enactus-website2k25/issues)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Enactus MNNIT Team** - For vision and guidance
- **React Community** - For amazing ecosystem
- **Tailwind CSS** - For beautiful styling system
- **MongoDB** - For reliable database solution
- **Netlify** - For seamless deployment

---

<div align="center">
  <p>Made with ❤️ by Enactus MNNIT Allahabad</p>
  <p>Empowering communities through entrepreneurial action</p>
</div>
