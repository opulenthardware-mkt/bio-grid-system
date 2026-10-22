# BIO-GRID website refresh

This is the complete static website for the existing GitHub Pages repository:
https://github.com/opulenthardware-mkt/bio-grid-system

## Preview
Open index.html locally, or serve this folder with any static web server.
No package installation, build step, framework, or backend is required.

## Replace the GitHub Pages website
1. Download and extract the provided ZIP.
2. Open the bio-grid-system repository on GitHub.
3. Choose Add file → Upload files.
4. Drag the CONTENTS of this folder into the upload area, including assets/.
5. Keep index.html at the repository root. Do not put everything inside another enclosing folder.
6. Commit with a message such as "Refresh BIO-GRID website navigation and widget collection".
7. Leave the existing GitHub Pages main branch / root publishing setting unchanged.
8. Wait for the Pages deployment to finish, then refresh the website.

Keep all your existing files unless you deliberately want to remove them. Uploading files with the same paths replaces their current contents; other files remain. The supplied pages do not link to unreleased performance-module artwork.

## New structure
- index.html: concise overview and three clear navigation paths
- widgets.html: all four products, working filters, compatibility comparison
- command.html: Command Array detail and Large / XL information
- audio.html: MIX / MIC / MEDIA views, product video and companion requirement
- vantage.html: feature preview, MONO / Signal switch and compatible display information
- orbital.html: free Orbital Watch details and Marketplace download
- customize.html: interactive palette, canvas, card color and card-opacity demonstration
- guides.html: the existing Pilot Signal theme guide and all original downloads
- setup.html: Runtime download, widget-specific setup and troubleshooting
- roadmap.html: a general "more is coming" teaser
- styles.css / script.js: shared visual system and interactions
- guide-styles.css / theme-guides.js: preserved original theme-guide content and styles
- assets/: imagery, theme downloads and the Audio Module video
- sitemap.xml / robots.txt: search-engine discovery for the existing public domain

## Vantage status
The Vantage Marketplace link is not live yet. It is intentionally labeled Coming soon.
When it is published:
- Add its verified Marketplace URL to vantage.html as the primary purchase button.
- Update the badge in widgets.html and the notice on vantage.html.
- Update the preview wording in setup.html and index.html.
Do not invent a product URL.

## Keep links working
The index page redirects the old #modules, #system, #ecosystem, #customize, #theme-guides and #roadmap bookmarks to the relevant new pages.
All internal paths are relative, so the site works under the /bio-grid-system/ GitHub Pages subdirectory.

## Updating content
All product information lives directly in the individual HTML files and remains readable without JavaScript.
Theme-guide posts are in theme-guides.js.
The Audio product video is local, silent, and only loads when played; it does not autoplay.
Vantage remains a preview until you supply the published listing.

