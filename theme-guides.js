// Add future guides to this array. The archive and full guide view are rendered automatically.
const themeGuides = [
  {
    id: 'fuji-redline',
    posted: '2026-10-22',
    title: 'Build the Fuji Redline setup',
    label: 'BIO-GRID + GRIDLINE',
    summary: 'One artwork. Several ways to build your canvas. Pair warm ivory, dark ink and a sun-red accent with transparent instruments. BIO-GRID also works beautifully alongside other Opulent Hardware widgets, including GRIDLINE Modules: coordinate the palette and background, then choose the controls and readouts that suit your setup.',
    cover: { src: 'assets/fuji-audio-vantage.png', alt: 'BIO-GRID Audio Module on the left and BIO-GRID Vantage on the right over a shared Mount Fuji and sports-car background' },
    products: [
      { name: 'BIO-GRID Audio Module', url: 'audio.html' },
      { name: 'BIO-GRID Command Array', url: 'command.html' },
      { name: 'BIO-GRID Vantage', url: 'vantage.html' },
      { name: 'GRIDLINE Modules · Opulent Hardware', url: 'https://marketplace.elgato.com/@opulenthardware' }
    ],
    palette: [
      { role: 'Artwork red / matching accent', hex: '#C9423D', note: 'Representative sun red sampled from the supplied Fuji artwork.' },
      { role: 'Warm ivory / text', hex: '#EEE7DD', note: 'Sampled from the open sky. Use for main labels and readings.' },
      { role: 'Ink / card surfaces', hex: '#0F1114', note: 'Sampled from the dark architecture. Use translucent surfaces for contrast.' }
    ],
    paletteNote: 'Three core colors, sampled from the supplied background: sun red, warm ivory and dark ink. Screenshots demonstrate the overall look, not verified slider positions or saved presets.',
    steps: [
      { title: 'Choose your pairing', text: 'The first reference shows BIO-GRID Audio Module on the left with BIO-GRID Vantage on the right. The second shows BIO-GRID Command Array with Vantage. The third combines GRIDLINE Modules with Vantage. These are alternative layouts, not one widget switching between products. Install and configure each widget separately.' },
      { title: 'Let the artwork connect the layout', text: 'Use the supplied Fuji landscape as the shared display background where your iCUE layout supports it. Keep the image aligned across the canvas rather than stretching a separate copy into every widget. Leave the car visible on the right and the red sun behind the left-hand instruments. Use the original artwork as supplied; the screenshots are layout references, not backgrounds.' },
      { title: 'Match the red, then set the contrast', text: 'Enable the available custom styling controls on each widget. Use accent #C9423D to echo the red sun, #EEE7DD for text and #0F1114 for card surfaces where independent surface controls are available. Settings vary between widget families.' },
      { title: 'Keep the instruments readable', text: 'Reduce card opacity enough to reveal the landscape, but retain a dark layer behind labels, sliders and sensor readings. Begin with low blur to preserve the car and mountain detail; add a little blur only where busy artwork competes with the readouts. Exact brightness, opacity and blur values depend on the widget and your viewing distance.' },
      { title: 'Give each widget its job', text: 'Audio Module supplies MIX, MIC and MEDIA controls and needs the Opulent Hardware Module Runtime for its full functionality. Command Array brings the reactive sensor core and touch commands; its Stream Deck view requires the Stream Deck desktop app. Vantage adds the compact sensor or clock instrument, shown here in MONO. GRIDLINE Modules provides the alternative system dashboard shown in the third reference. Choose your own sensor assignments: the values pictured are examples.' },
      { title: 'Fill the Personality Bay', text: 'In Command Array, select the supplied silver-car-portrait.jpg image for the Personality Bay user media. The Sensor view reference shows this top-down car image inside the bay, while the Fuji landscape remains behind the widgets. Adjust the available image framing controls to suit your layout.' },
      { title: 'Carry the look beyond BIO-GRID', text: 'Repeat the red accent, ivory text and translucent dark surfaces in other Opulent Hardware widgets that expose those settings. Matching the visual treatment makes separate widgets feel like one composed workspace; it does not require a module launcher or mean the widgets share settings automatically.' }
    ],
    gallery: [
      { src: 'assets/fuji-command-personality-bay.png', alt: 'BIO-GRID Command Array in Sensor view with the top-down silver-car portrait in its Personality Bay, beside BIO-GRID Vantage', caption: 'PERSONALITY BAY // COMMAND ARRAY SENSOR VIEW + VANTAGE' },
      { src: 'assets/fuji-command-vantage.png', alt: 'BIO-GRID Command Array in Stream Deck view beside BIO-GRID Vantage with clock readout', caption: 'LAYOUT 02 // BIO-GRID COMMAND ARRAY + BIO-GRID VANTAGE' },
      { src: 'assets/fuji-gridline-vantage.png', alt: 'GRIDLINE Modules system dashboard beside BIO-GRID Vantage with primary CPU reading', caption: 'LAYOUT 03 // GRIDLINE MODULES + BIO-GRID VANTAGE' },
      { src: 'assets/fuji-background.png', alt: 'Original landscape artwork with Mount Fuji, a red sun and a silver sports car', caption: 'SOURCE ARTWORK // SHARED LANDSCAPE BACKGROUND' },
      { src: 'assets/silver-car-portrait.jpg', alt: 'Top-down silver sports car on a pale grey portrait background', caption: 'PERSONALITY BAY // SOURCE PORTRAIT IMAGE' }
    ],
    files: [
      { name: 'Fuji landscape background', file: 'fuji-background.png', path: 'assets/fuji-background.png', meta: 'PNG // ORIGINAL ARTWORK' },
      { name: 'Personality Bay car image', file: 'silver-car-portrait.jpg', path: 'assets/silver-car-portrait.jpg', meta: 'JPG // USER MEDIA' },
      { name: 'Command Array Personality Bay reference', file: 'fuji-command-personality-bay.png', path: 'assets/fuji-command-personality-bay.png', meta: 'PNG // SENSOR VIEW' },
      { name: 'Audio Module + Vantage reference', file: 'fuji-audio-vantage.png', path: 'assets/fuji-audio-vantage.png', meta: 'PNG // LAYOUT 01' },
      { name: 'Command Array + Vantage reference', file: 'fuji-command-vantage.png', path: 'assets/fuji-command-vantage.png', meta: 'PNG // LAYOUT 02' },
      { name: 'GRIDLINE Modules + Vantage reference', file: 'fuji-gridline-vantage.png', path: 'assets/fuji-gridline-vantage.png', meta: 'PNG // LAYOUT 03' }
    ],
    assetNote: 'Background artwork is supplied as a styling reference, not as an Opulent Hardware original. Artwork and vehicle trademarks belong to their respective owners. Confirm permission and attribution requirements before redistributing or reusing the artwork commercially.'
  },
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
                <div><small>${color.role}</small><strong>${color.hex}</strong><span>${color.pantone || color.note || ''}</span></div>
              </div>
            `).join('')}
          </div>
          <p class="pantone-note">${guide.paletteNote || 'Pantone references are visual approximations from the supplied on-screen colors. Confirm against a current physical Pantone guide before print production.'}</p>
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
          ${guide.assetNote ? `<p class="pantone-note">${guide.assetNote}</p>` : ''}
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
