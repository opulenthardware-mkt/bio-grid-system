# Content verification — October 22, 2026

## Sources
- Existing live site and its public repository:
  https://opulenthardware-mkt.github.io/bio-grid-system/
  https://github.com/opulenthardware-mkt/bio-grid-system
- Command Array:
  https://marketplace.elgato.com/product/bio-grid-command-array-b25e8c65-4689-4465-a2ab-68a0676e6e77
  Latest visible listing version: 1.1.8. The release notes add Large horizontal support alongside XL.
- Audio Module:
  https://marketplace.elgato.com/product/bio-grid-audio-module-86a97e87-6fb8-49c1-a6f1-9929ba9a31ef
  Supports S/M/L/XL horizontal XENEON EDGE slots. The local 1.1.1 artwork update is described without claiming it is the current published Marketplace version.
- Orbital Watch:
  https://marketplace.elgato.com/product/bio-grid-orbital-watch-6cd7b38c-42d3-49c8-b03f-09bff4a4090e
  Free. TRACK / LAUNCHES / PROGRAMS, up to eight NORAD satellite IDs. Use the conservative Medium/Large/XL sizes specified in the product description; the listing metadata also includes Small, but that conflict is not repeated as a site claim.
- Runtime:
  https://github.com/opulenthardware-mkt/opulent-hardware-module-runtime/releases/latest
  GitHub API confirmed v1.0.2 as latest, with the versioned Windows executable attached.
- Vantage:
  Local latest release materials from 2026-10-20/how/outputs/BIO-GRID-Vantage-Marketplace and packaged manifest.
  Version 1.0.0; iCUE 5.52+, Sensors and FPS providers, MONO and Signal, sensor/clock main tile, FPS/sensor fifth tile, portrait/landscape rectangular LCD layouts.
  User confirmed the published Marketplace link is not ready. Status remains Coming soon.

## QA performed
- Checked JavaScript syntax.
- All ten pages checked at 390px phone width for document overflow and broken loaded images.
- Checked desktop overview and theme guide.
- Verified catalog Free filter displays only Orbital Watch.
- Verified Audio tabs display one correct view at a time.
- Verified Vantage MONO switch changes its image and caption.
- Verified palette and demo transport controls.
- Verified preserved Pilot Signal guide renders, with three download links.
- No browser console errors observed during these checks.
- Local file/link audit is included in the preparation workflow.

This deliverable updates only static website files. No widget package, companion executable, GitHub repository, or live website has been changed.

