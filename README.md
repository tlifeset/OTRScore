# OTRScore.com — Beta Deployment

## File Structure
```
otrscore/
├── index.html              ← Homepage
├── about.html              ← About page
├── methodology.html        ← Scoring methodology
├── personalities.html      ← All personalities grid (add when ready)
├── personality/
│   ├── bill-simmons.html
│   ├── ryen-russillo.html  ← (to be built with your content)
│   ├── colin-cowherd.html
│   ├── stephen-a-smith.html
│   ├── big-cat.html
│   └── dave-portnoy.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── public/
│   └── images/             ← Drop headshots here (bill-simmons.jpg etc)
├── data.js                 ← All site data (scores, takes, etc)
├── vercel.json             ← Vercel deployment config
└── favicon.svg
```

## Deploy to Vercel in 4 steps

1. Go to github.com → New Repository → name it `otrscore-beta` → Create Repository

2. Upload this entire folder (drag and drop in the GitHub web interface, or use GitHub Desktop)

3. Go to vercel.com → Add New Project → Import Git Repository → select `otrscore-beta`

4. Click Deploy — your site will be live at `otrscore-beta.vercel.app` in ~30 seconds

## Connect your GoDaddy domain

In Vercel: Settings → Domains → Add `otrscore.com`

Vercel will show you DNS records to add. In GoDaddy:
- My Products → DNS → Manage → Add these records:
  - Type: A | Name: @ | Value: 76.76.21.21
  - Type: CNAME | Name: www | Value: cname.vercel-dns.com

## Before Launch Checklist

- [ ] Replace About page copy with your own words
- [ ] Add headshot images to /public/images/ (named exactly: bill-simmons.jpg etc)
- [ ] Add remaining personality profile pages
- [ ] Update takes data in data.js with real verified takes
- [ ] Add Terms of Service page (/terms.html)
- [ ] Add Privacy Policy page (/privacy.html)
- [ ] Test on mobile

## Image naming convention
bill-simmons.jpg
ryen-russillo.jpg
colin-cowherd.jpg
stephen-a-smith.jpg
big-cat.jpg
dave-portnoy.jpg

Recommended: square crops, minimum 400×400px, JPG format.
