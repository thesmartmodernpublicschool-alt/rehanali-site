# The Smart Modern Public School – Official Website

A complete, professional, modern and fully responsive **static school management website** for **The Smart Modern Public School**.

Built with clean **HTML5**, **CSS3** and **JavaScript**. Ready to upload to GitHub and deploy with **GitHub Pages** or any standard web hosting.

---

## Features

- Fully responsive design (Desktop, Laptop, Tablet, Mobile)
- Professional education-themed blue/white color scheme
- Sticky navigation header with mobile hamburger menu
- Beautiful hero section with call-to-action buttons
- About section with Mission, Vision & Core Values
- Principal’s Message section
- Why Choose Us cards with icons and hover effects
- Animated statistics counters
- Dedicated pages: Academics, Admissions, Facilities, Teachers, Gallery, Contact
- Admission form with front-end validation and success message
- Contact form with validation
- Image gallery with category filters and lightbox
- News & Events section
- FAQ accordion
- Scroll-to-top button
- Smooth scrolling and scroll-reveal animations
- SEO optimized (titles, meta descriptions, Open Graph, semantic HTML)
- Accessible (labels, ARIA, keyboard support, alt texts)
- Easy to customize – clear placeholders for contact info, images and teachers

---

## Folder Structure

```
the-smart-modern-public-school/
│
├── index.html              # Homepage
├── about.html              # About Us page
├── academics.html          # Academic programs
├── admissions.html         # Admissions + application form
├── facilities.html         # School facilities
├── teachers.html           # Teachers / faculty
├── gallery.html            # Photo gallery
├── contact.html            # Contact page + form
│
├── css/
│   └── style.css           # Main stylesheet
│
├── js/
│   └── script.js           # All interactive features
│
├── images/                 # (Optional) Place your own images here
│   └── gallery/
│
└── README.md               # This file
```

---

## How to Run Locally

1. Download or clone this project.
2. Open the folder `the-smart-modern-public-school`.
3. Double-click `index.html` **or** open it with any modern browser (Chrome, Firefox, Edge, Safari).
4. No server or build step is required – it works as pure static files.

---

## How to Upload to GitHub

1. Create a new repository on GitHub (e.g. `the-smart-modern-public-school`).
2. Upload **all files and folders** from this project into the repository.
3. Make sure the structure remains the same (especially `index.html` in the root).

### Using Git (recommended)

```bash
git init
git add .
git commit -m "Initial commit - The Smart Modern Public School website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/the-smart-modern-public-school.git
git push -u origin main
```

---

## How to Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Choose branch: **main** and folder: **/ (root)**.
5. Click **Save**.
6. After a few moments, your site will be live at:

```
https://YOUR_USERNAME.github.io/the-smart-modern-public-school/
```

---

## How to Customize the Website

### 1. Replace School Logo

- Currently using a placeholder image from Unsplash.
- Replace the logo image URL in every HTML file (search for `logo`).
- Or place your logo file as `images/logo.png` and update the `src` attribute to `images/logo.png`.

### 2. Replace School Images

All images currently use high-quality royalty-free Unsplash URLs. To use your own:

1. Place your photos in the `images/` folder (and `images/gallery/` for gallery).
2. Update the `src` attributes in the HTML files to point to your local images, e.g.:

```html
<img src="images/school-building.jpg" alt="School Building">
```

Suggested image files (as mentioned in the original request):

- `images/logo.png`
- `images/school-building.jpg`
- `images/principal.jpg`
- `images/admission.jpg`
- `images/teacher1.jpg`, `teacher2.jpg`, `teacher3.jpg`
- `images/classroom.jpg`, `laboratory.jpg`, `library.jpg`, `playground.jpg`
- Gallery images inside `images/gallery/`

### 3. Change School Contact Information

Search and replace these placeholders in **all HTML files** (especially footer and contact page):

| Placeholder              | Replace With              |
|--------------------------|---------------------------|
| `YOUR SCHOOL ADDRESS`    | Your full school address  |
| `YOUR PHONE NUMBER`      | Your phone number         |
| `YOUR WHATSAPP NUMBER`   | WhatsApp number (digits)  |
| `YOUR EMAIL ADDRESS`     | Your school email         |

Also update the social media links:

- Facebook, Instagram, YouTube, WhatsApp links in the footer.

### 4. Change Teachers Information

Edit `teachers.html`:

- Replace sample teacher names, subjects, qualifications and descriptions.
- Replace the Unsplash photo URLs with your teachers’ photos (or place them in `images/`).

**Note:** Current teacher data is clearly marked as sample content.

### 5. Change Admission Information

- Edit the admission process steps and form fields in `admissions.html`.
- Update class options in the “Class Applying For” dropdown if needed.

### 6. Change Gallery Images

- Edit `gallery.html`.
- Replace image URLs or point them to files in `images/gallery/`.
- Update `data-category` attributes if you change categories.
- Filter buttons can also be customized.

### 7. Add or Remove Pages

1. Create a new HTML file following the same structure as existing pages.
2. Add a navigation link in the header of **every** page.
3. Add the link in the footer as well.
4. Update active class logic if needed (handled automatically by `script.js` based on filename).

---

## Connecting Forms to a Backend (Optional)

The admission and contact forms currently work with **front-end validation only** and show a success message. They do **not** send data anywhere.

To actually receive submissions you can use free services:

### Option A – Formspree (easiest)

1. Sign up at [formspree.io](https://formspree.io).
2. Create a form and get the endpoint URL.
3. Change the form tag, for example:

```html
<form id="admissionForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

4. Remove or adjust the JavaScript submit handler if you want the form to submit normally.

### Option B – Netlify Forms

If you host on Netlify, add `netlify` attribute to the form:

```html
<form id="admissionForm" name="admission" method="POST" data-netlify="true">
```

### Option C – Google Forms / Custom Backend

You can also point the form to a Google Form or your own server endpoint.

---

## Technologies Used

- HTML5 (semantic)
- CSS3 (Flexbox, Grid, Custom Properties, Animations)
- Vanilla JavaScript (no frameworks)
- Google Fonts (Poppins + Inter)
- Font Awesome 6 (CDN)

No paid libraries or services are required.

---

## Browser Support

Works on all modern browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari
- Mobile browsers (Android & iOS)

---

## License & Credits

This website template is created for **The Smart Modern Public School**.

Images currently used are from [Unsplash](https://unsplash.com) (royalty-free). Replace them with your own school photos before official use.

---

## Support

If you need to modify the design, add new sections, or connect forms to a backend, simply edit the relevant HTML/CSS/JS files. The code is clean and well-commented for easy customization.

**© 2026 The Smart Modern Public School. All Rights Reserved.**
