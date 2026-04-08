# LEEMDO Project Cart

A B2B marketplace web application connecting service providers (call centers, BPO companies, IT firms) with project providers seeking outsourcing services.

## Overview

LEEMDO Project Cart is a single-page application that serves as a premier platform for:
- BPO (Business Process Outsourcing) projects
- Call center campaigns
- IT services
- Franchise opportunities

## Technology Stack

- **Frontend**: Plain HTML/CSS/JavaScript (No frameworks)
- **Styling**: Custom CSS with CSS variables for theming
- **Data**: Hardcoded mock data in JavaScript
- **State**: Uses localStorage for tracking
- **No backend** - All functionality is client-side only

## Project Structure

```
├── index.html          # Main SPA with all views
├── js/
│   ├── app.js         # Router, navigation, auth
│   ├── ui.js          # Modals, toasts, navbar, animations
│   ├── data.js        # Mock data (projects, franchises)
│   ├── projects.js    # Project listing & filtering
│   ├── franchises.js  # Franchise listing & filtering
│   ├── dashboard.js   # User dashboard
│   └── investors.js   # Business opportunities
├── css/
│   ├── main.css       # Design system, variables, typography
│   ├── components.css # UI components
│   ├── layout.css     # Layout styles
│   └── animations.css # Scroll reveal, particles
└── assets/img/        # Logo images
```

## Features

### Views
- **Home**: Hero section, featured projects, stats, testimonials, FAQ
- **Projects**: Browse 24+ BPO/IT projects with filtering (type, country, industry, payout)
- **Franchises**: Browse 16 franchise opportunities with sector/investment filters
- **Dashboard**: User dashboard with applications, messages, settings
- **About**: Company information
- **Careers**: Job listings
- **Contact**: Contact form with WhatsApp integration

### Key Functionality
- Real-time filtering and search
- Modal-based detail views
- WhatsApp integration for contact forms
- Responsive design for mobile/desktop
- Scroll reveal animations

## How to Run

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. No build process or server required

## WhatsApp Integration

All contact forms redirect to WhatsApp with pre-filled messages:
- Phone: +91 84384 43477

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved.

---

Created by Abdul kalam azad A and Aswin C