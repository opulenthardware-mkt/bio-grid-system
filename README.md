# BIO-GRID website

Static marketing site for the BIO-GRID family of XENEON EDGE widgets.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `bio-grid`.
2. Choose **Add file → Upload files**.
3. Drag every file and folder from this `bio-grid-site` folder into the upload area. `index.html` must be at the repository root.
4. Commit the upload.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose the `main` branch and `/ (root)`, then select **Save**.

GitHub will show the public site address after publishing finishes.

## Add the Audio Module marketplace link

Open `index.html`, find `Marketplace link coming soon`, and replace that span with an anchor using the same button classes:

```html
<a class="button button-primary" href="YOUR_AUDIO_MODULE_URL">View on Elgato Marketplace</a>
```

## Included files

- `index.html` — page content and metadata
- `styles.css` — responsive BIO-GRID visual system
- `script.js` — navigation, customization demo, and roadmap tabs
- `assets/` — product imagery

No build tools or web server are required. The site can also be previewed locally by opening `index.html`.
