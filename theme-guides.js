// Add future guides to this array. The archive and full guide view are rendered automatically.
const themeGuides = [
  {
    id: 'pilot-signal-dash',
    posted: '2026-10-08',
    title: 'Build the Pilot Signal Dash',
    label: 'Command + Audio',
    summary: 'Recreate the red-orange BIO-GRID command deck with a looping pixel-art scanner bay and a matching audio console.',
    cover: {
      src: 'assets/theme-command-audio-dashboard.png',
      alt: 'BIO-GRID Command Array and Audio Module arranged side by side in a red-orange theme'
    },
    products: [
      {
        name: 'BIO-GRID Audio Module',
        url: 'https://marketplace.elgato.com/product/bio-grid-audio-module-86a97e87-6fb8-49c1-a6f1-9929ba9a31ef'
      },
      {
        name: 'Command Array',
        url: 'https://marketplace.elgato.com/product/bio-grid-command-array-b25e8c65-4689-4465-a2ab-68a0676e6e77'
      }
    ],
    palette: [
      { role: 'Text', hex: '#EDF7CE', pantone: 'PANTONE 7485 C', note: 'nearest screen-to-print reference' },
      { role: 'Accent', hex: '#E85D3F', pantone: 'PANTONE 7417 C', note: 'nearest screen-to-print reference' },
      { role: 'Background', hex: '#172327', pantone: 'PANTONE 5463 C', note: 'nearest screen-to-print reference' }
    ],
    steps: [
      {
        title: 'Install the two modules',
        text: 'Add Command Array and BIO-GRID Audio Module from Elgato Marketplace. Use Command Array for telemetry, media, and the reactive core; use Audio Module for the media session and transport controls.'
      },
      {
        title: 'Build the side-by-side layout',
        text: 'Place Command Array on the left and Audio Module on the right. Give Command Array roughly two thirds of the horizontal space so its telemetry and personality bay stay readable.'
      },
      {
        title: 'Apply the Pilot Signal palette',
        text: 'Enable Custom Style in Widget Personalization. Enter the exact HEX values below for text, accent, and background. Keep glass blur low and background transparency high so the technical grid remains crisp.'
      },
      {
        title: 'Load the scanner animation',
        text: 'In Display and Services, choose the included Pilot Scanner GIF for Scanner Image or GIF. Leave Cinematic Mode off for the lightweight looping GIF, or enable it when using a video source.'
      },
      {
        title: 'Tune the readouts',
        text: 'Adjust Bio Readout, Reactive Core, and clock text sizes for your viewing distance. Set the Operational Start Date you want the dashboard to track, then confirm the local app status is connected.'
      }
    ],
    gallery: [
      {
        src: 'assets/theme-scanner-pilot.gif',
        alt: 'Looping pixel-art pilot at a spacecraft command console',
        caption: 'PERSONALITY BAY // PILOT SCANNER LOOP'
      },
      {
        src: 'assets/theme-widget-settings.png',
        alt: 'BIO-GRID settings showing display, scanner media, and widget personalization controls',
        caption: 'SETTINGS REFERENCE // CUSTOM STYLE VALUES'
      }
    ],
    files: [
      { name: 'Pilot Scanner Loop', file: 'theme-scanner-pilot.gif', path: 'assets/theme-scanner-pilot.gif', meta: 'GIF // 1920 × 1080' },
      { name: 'Completed Dash Reference', file: 'theme-command-audio-dashboard.png', path: 'assets/theme-command-audio-dashboard.png', meta: 'PNG // 2557 × 716' },
      { name: 'Widget Settings Reference', file: 'theme-widget-settings.png', path: 'assets/theme-widget-settings.png', meta: 'PNG // 781 × 567' }
    ]
  }
];

const guideList = document.querySelector('[data-guide-list]');
const guideDetail = document.querySelector('[data-guide-detail]');

if (guideList && guideDetail) {
  const formatDate = date => new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(new Date(`${date}T12:00:00`)).toUpperCase();

  const renderGuide = guide => {
    guideDetail.innerHTML = `
      <article class="guide-post">
        <div class="guide-hero">
          <img src="${guide.cover.src}" alt="${guide.cover.alt}">
          <div class="guide-hero-stamp"><span>FIELD NOTE</span><strong>${guide.label}</strong></div>
        </div>
        <header class="guide-post-header">
          <div class="guide-post-meta"><span>POSTED // ${formatDate(guide.posted)}</span><span>RECIPE // ${guide.steps.length} STEPS</span></div>
          <h3>${guide.title}</h3>
          <p>${guide.summary}</p>
          <div class="guide-products">
            ${guide.products.map(product => `<a class="button button-primary" href="${product.url}" target="_blank" rel="noopener">${product.name}</a>`).join('')}
          </div>
        </header>

        <section class="guide-block" aria-labelledby="palette-${guide.id}">
          <div class="guide-block-heading"><span>01</span><h4 id="palette-${guide.id}">Palette coordinates</h4></div>
          <div class="palette-grid">
            ${guide.palette.map(color => `
              <div class="palette-chip">
                <i style="--theme-color:${color.hex}" aria-hidden="true"></i>
                <div><small>${color.role}</small><strong>${color.hex}</strong><span>${color.pantone}</span></div>
              </div>
            `).join('')}
          </div>
          <p class="pantone-note">Pantone references are visual approximations from the supplied on-screen colors. Confirm against a current physical Pantone guide before print production.</p>
        </section>

        <section class="guide-block" aria-labelledby="steps-${guide.id}">
          <div class="guide-block-heading"><span>02</span><h4 id="steps-${guide.id}">Build sequence</h4></div>
          <ol class="guide-steps">
            ${guide.steps.map((step, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><div><h5>${step.title}</h5><p>${step.text}</p></div></li>`).join('')}
          </ol>
        </section>

        <section class="guide-block" aria-labelledby="media-${guide.id}">
          <div class="guide-block-heading"><span>03</span><h4 id="media-${guide.id}">Reference frames</h4></div>
          <div class="guide-gallery">
            ${guide.gallery.map(item => `<figure><img src="${item.src}" alt="${item.alt}" loading="lazy"><figcaption>${item.caption}</figcaption></figure>`).join('')}
          </div>
        </section>

        <section class="guide-block" aria-labelledby="files-${guide.id}">
          <div class="guide-block-heading"><span>04</span><h4 id="files-${guide.id}">Files used</h4></div>
          <div class="guide-files">
            ${guide.files.map(file => `
              <a href="${file.path}" download="${file.file}">
                <span><strong>${file.name}</strong><small>${file.file}</small></span>
                <em>${file.meta}</em><b>DOWNLOAD ↓</b>
              </a>
            `).join('')}
          </div>
        </section>
      </article>
    `;
  };

  document.querySelector('[data-guide-count]').textContent = String(themeGuides.length).padStart(2, '0');
  guideList.innerHTML = themeGuides.map((guide, index) => `
    <button type="button" class="guide-list-item${index === 0 ? ' active' : ''}" data-guide-id="${guide.id}" aria-pressed="${index === 0}">
      <span>${formatDate(guide.posted)}</span>
      <strong>${guide.title}</strong>
      <small>${guide.label}</small>
    </button>
  `).join('');

  guideList.addEventListener('click', event => {
    const button = event.target.closest('[data-guide-id]');
    if (!button) return;
    const guide = themeGuides.find(item => item.id === button.dataset.guideId);
    if (!guide) return;
    guideList.querySelectorAll('[data-guide-id]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderGuide(guide);
  });

  renderGuide(themeGuides[0]);
}
