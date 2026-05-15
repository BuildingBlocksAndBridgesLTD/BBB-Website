# Building Blocks and Bridges — Website

A complete, free-to-host website for Building Blocks and Bridges LTD with a built-in content management system (CMS) so you can update photos, testimonials, and contact details without touching code.

---

## What's in here

- **Homepage** with hero, mission, services, student voices, "how we work" steps, benefits, testimonials, and enquiry form
- **4 service pages** — Music Enrichment, Mentoring & Interventions, Sporting Enrichment, Animal Therapy & Respite
- **Who We Are** — Jamah's story
- **Get in Contact** — phone, email, and enquiry form
- **Privacy Policy** — including safeguarding and media consent
- **CMS at /admin** — log in to edit testimonials, student voices, photos, and contact details
- **Enquiry form** that emails enquiries straight to Jamah's inbox

---

## Setting it up (one-time, takes about 30 minutes)

You'll need a free account on three services:
1. **GitHub** — stores the code
2. **Netlify** — hosts the live site for free + powers the CMS login
3. **Formspree** — receives the enquiry form submissions (free for 50/month)

### Step 1 — Put the code on GitHub

1. Sign up at [github.com](https://github.com) if you don't have an account.
2. Click the **+** in the top right → **New repository**.
3. Name it `bbb-website` (or anything you like). Keep it **Public**. Click **Create repository**.
4. On the next page, follow the "…or upload an existing repository" instructions, OR install [GitHub Desktop](https://desktop.github.com/) which gives you a drag-and-drop interface — much easier.
5. Drag the entire project folder (everything in this zip) into your new repository.

### Step 2 — Deploy to Netlify

1. Sign up at [netlify.com](https://netlify.com) using your GitHub account.
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub**, then pick your `bbb-website` repo.
4. Build settings should auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**. Wait about 2 minutes.
6. The site is now live at a random URL like `dazzling-otter-123abc.netlify.app`.

### Step 3 — Connect your domain

1. In Netlify, go to **Site settings → Domain management → Add a custom domain**.
2. Enter `buildingblocksandbridges.com`.
3. Netlify will give you DNS settings. Go to wherever you bought the domain and update the DNS records as shown.
4. It takes anywhere from 10 minutes to a few hours to propagate. Once done, the site is live on your real domain. HTTPS is automatic and free.

### Step 4 — Turn on the CMS

1. In Netlify, go to **Site settings → Identity → Enable Identity**.
2. Under **Registration**, set it to **Invite only** (this stops randoms creating accounts).
3. Under **Services → Git Gateway**, click **Enable Git Gateway**.
4. Go to the **Identity** tab in your Netlify dashboard → **Invite users** → enter Jamah's email.
5. Jamah gets an invite email, clicks the link, sets a password — done.
6. To log in to the CMS, go to `buildingblocksandbridges.com/admin/` and sign in.

### Step 5 — Connect the enquiry form

1. Sign up at [formspree.io](https://formspree.io) with Jamah's email.
2. Create a new form, call it "BBB Enquiries". Free plan allows 50 submissions/month.
3. Copy the form ID (looks like `xayzbcde`).
4. In the CMS at `/admin/`, go to **Contact Details → Formspree Form ID** and paste the ID in.
5. Save. Done — enquiries now go straight to Jamah's email.

---

## Using the CMS (after setup)

Go to `buildingblocksandbridges.com/admin/` and log in.

You can edit:
- **Testimonials** — add, edit, remove. Mark one as "Featured" to show it as the big pull-quote on the homepage.
- **Student Voices** — short quotes from young people, grouped by pathway (music/mentoring/sport/animal).
- **Photos** — upload new images for the homepage, services, or about page.
- **Contact Details** — phone, email, credentials line in the footer.

After clicking **Save**, the site automatically rebuilds and goes live in about 30 seconds.

---

## Running it locally (optional — for testing changes)

If you want to preview the site on your own computer before publishing:

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in a browser. Changes auto-refresh.

To build a production version:
```bash
npm run build
```

---

## What you're NOT paying for

- **Hosting**: free on Netlify forever (up to 100GB bandwidth/month — way more than you'll use)
- **HTTPS / SSL certificate**: free, automatic
- **CMS**: free (Decap CMS + Netlify Identity, both free)
- **Domain**: you already paid for `buildingblocksandbridges.com`
- **Enquiry form**: free up to 50/month on Formspree

Total monthly cost: **£0**.

If you ever exceed Formspree's free 50 enquiries/month limit, their paid plan is about £8/month — but that's a nice problem to have.

---

## Need to make a bigger change?

For changes that need editing code (new sections, new pages, redesigns), you can either:
- Open the files in any code editor and edit, then commit/push to GitHub — Netlify auto-deploys.
- Hire a developer for one-off changes (the codebase is standard React + Vite, anyone can work on it).

---

## Files map

```
bbb-site/
├── public/
│   ├── admin/             ← CMS lives here
│   │   ├── index.html
│   │   └── config.yml     ← CMS configuration
│   ├── images/uploads/    ← Uploaded photos go here automatically
│   └── favicon.svg
├── src/
│   ├── components/        ← Reusable bits (nav, footer, forms)
│   ├── pages/             ← Each page of the site
│   ├── data/              ← JSON files edited via the CMS
│   │   ├── testimonials.json
│   │   ├── studentVoices.json
│   │   ├── images.json
│   │   └── config.json
│   └── styles/global.css  ← All the styling
├── netlify.toml           ← Netlify build settings
└── package.json
```
