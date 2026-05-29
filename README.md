# AIT Themes - Website & Modular Admin Dashboard

AIT Themes is a modern, responsive digital themes marketplace website integrated with a comprehensive, modular Administrator Dashboard. The application is built using standard semantic HTML5 structures, Tailwind CSS styling, Inter typography, and Lucide icons, with persistent state simulation powered entirely by client-side `localStorage`.

---

## 📂 Project Structure

```bash
ait-themes/
├── admin/                     # Administrator Dashboard Panel
│   ├── component/             # Common shared layouts (loaded dynamically via JS)
│   │   ├── sidebar.html       # Sidebar drawer navigation menu
│   │   ├── navbar.html        # Top header navigation & theme toggler
│   │   └── footer.html        # Bottom page footer
│   ├── index.html             # Core Analytics Overview & KPI counters
│   ├── themes.html            # Themes grid management (CRUD)
│   ├── users.html             # User database management & role filters
│   ├── transactions.html      # Invoice logs & transaction log table
│   ├── settings.html          # Profile configurator & General site settings
│   ├── form.html              # Standard forms & validation controls
│   ├── form-wizard.html       # Stepper page pagination wizard
│   ├── form-editor.html       # WYSIWYG text editor, Live Form Builder, Markdown previewer
│   ├── select.html            # Multi-select, custom dropdown selectors
│   ├── datepicker.html        # Date picker inputs & mock event calendar
│   ├── modal.html             # Overlay modal trigger panels
│   ├── alert.html             # Notification banners & soft status badges
│   ├── table.html             # Paginated datatables & inline filter querying
│   └── icons.html             # Customizable stroke/color Lucide catalog tool
├── assets/                    # Shared assets (CSS, images, icons)
│   └── css/
│       └── style.css          # Custom scrollbars, animations, and typography styles
├── components/                # Frontend client-side sections (e.g. Header, Footer)
├── pages/                     # Supplemental frontend pages
├── index.html                 # Frontend client Landing page
├── services.html              # Frontend marketplace services
├── pricing.html               # Digital item pricing plans
├── about.html                 # About US corporate description
├── contact.html               # Contact & support ticketing
├── blog.html                  # Blog index list
├── blog-single.html           # Full blog post reader page
├── login.html                 # Login entry screen
├── register.html              # Account creation screen
├── forgot-password.html       # Password retrieval recovery page
├── 404.html                   # 404 Not Found fallback screen
└── README.md                  # Project documentation (this file)
```

---

## ⚡ Features & Modules

### 1. Frontend Client Website
- **Landing Page & Navigation**: Showcase premium digital themes, pricing features, and testimonials.
- **Member Authentication**: Securely mock log in, register accounts, and trigger password reset links with real-time UI status alerts.

### 2. Admin Core Dashboard
- **Analytics Overview**: Dynamic revenue trends and category share graphs (via Chart.js), metric indicators (Net Revenue, Downloads, New Users, Conversion Rate).
- **Themes Management (CRUD)**: Create, Read, Update, and Delete digital themes. Fully responsive cards, rating configurations, download trackers, and pricing converters syncing instantly across other pages.
- **Users Management**: Active search filter, select role qualifiers (Admin, Editor, Member), account profile edit modals, and user deleting scripts.
- **Transactions & Invoices**: Billing logs table displaying dates, prices, status tags, and invoice download prompts.

### 3. Utility Components
- **Form Controls & Wizards**: Form elements with success/error validation feedback outlines, custom multi-step setup steppers, and conditional next-page button guards.
- **Form Editor Suite**: 
  - *WYSIWYG Rich Text Editor*: Toolbar supporting Bold, Italic, lists, headings, and link inserting.
  - *Dynamic Form Builder*: Drag/click to construct custom forms, customize field labels or placeholders, live-test inputs, and export JSON schemas.
  - *Markdown Previewer*: Real-time Markdown parser that renders styled HTML on-the-fly.
- **Date & Select Dropdowns**: Custom dropdown select lists, native calendar datepickers, and date-range comparison prompts.
- **Interactive Datatables**: Searchable, paginated support tickets CRUD list and separate inline-field query tables (syncing database updates back-and-forth).
- **Icons Preview Utility**: Curated list of 70 popular Lucide icons categorized with a customize panel supporting **live stroke width sliders** and **color themes preset picker** that update all vector icons on the screen instantly, plus code snippet copying options.

---

## ⚙️ Persistent State Systems (LocalStorage)

The application maintains a unified mock database across pages using browser `localStorage` parameters:
- `ait_themes`: Array of themes data, pricing, download counts, and category labels.
- `ait_users`: Registered user records, system roles, email addresses, and unsplash avatars.
- `ait_tickets`: Support tickets datatable registry.
- `color-theme`: Restores light/dark interface state uniformly across all static HTML navigations.
- `sidebar-minimized`: Remembers whether the administrator side menu is minimized to icon-only view.

---

## 🚀 How to Run the Project

1. **Prerequisites**: No database engines or compile servers are required. The project relies on standard web-browser rendering.
2. **Local Server (Optional)**: To avoid potential browser CORS security policies while fetching component HTML files dynamically, run the directory through a local web server:
   - Using Python: `python3 -m http.server 8000` (Visit `http://localhost:8000`)
   - Using Node.js: `npx serve`
3. **Usage**: Open `index.html` in your browser to view the client-facing homepage, or navigate directly to `login.html` to access the admin modules using default session profiles.
