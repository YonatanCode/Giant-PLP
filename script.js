const products = [
  {
    title: 'Talon 2',
    url: 'https://www.giant-bicycles.com/us/talon-2-2025',
    description:
      'A versatile aluminum hardtail built for quick trail laps, everyday dirt rides, and confident off-road progression.',
    price: {
      mode: 'regular',
      amount: '$800'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'new',
      label: 'New'
    },
    colors: [
      {
        key: 'asphalt-green',
        label: 'Asphalt Green',
        colors: ['#004814'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/wajuq4zawnoylmfywmcs/MY25Talon292_ColorAAsphaltGreen.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/igussvzity3zjfmvlzsx/MY25Talon292_ColorAAsphaltGreen-Rear.jpg'
        ]
      },
      {
        key: 'pure-red',
        label: 'Pure Red',
        colors: ['#ff170d'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/mmrtbbejknbooj2vjy9v/MY25Talon292_ColorBPureRed.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/lth4txd1pn9dh3jh0ryc/MY25Talon292_ColorBPureRed-Front.jpg'
        ]
      },
      {
        key: 'dried-matcha',
        label: 'Dried Matcha',
        colors: ['#97936b'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/msj8gqqp6hbexmlqcumz/MY25Talon292_ColorCDriedMatcha.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/rdjipsgbjkai8cy6qezy/MY25Talon292_ColorCDriedMatcha-Rear.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem Advanced SL Frameset',
    url: 'https://www.giant-bicycles.com/us/anthem-advanced-sl-frameset',
    description:
      'A race-focused carbon frameset made for lightweight XC builds with sharp handling and efficient suspension response.',
    price: {
      mode: 'regular',
      amount: '$4,500'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: null,
    award: {
      src: './badge.png',
      alt: 'Best Climbing Bike 2024 Winner'
    },
    colors: [
      {
        key: 'color-a',
        label: 'Color A',
        colors: ['#00649F'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/hbvjwoxk3fv7xa1qoxtw/MY26AnthemAdvancedSL-FR_ColorA.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/itufccwqmvcmgxqi2rd3/MY26AnthemAdvancedSL-FR_ColorA-Front.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem X Advanced SL 1',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-1',
    description:
      'A premium XC machine tuned for explosive climbing, fast descents, and all-out speed on modern race courses.',
    price: {
      mode: 'regular',
      amount: '$8,000'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'best-seller',
      label: 'Best Seller'
    },
    award: {
      src: './badge.png',
      alt: 'Best Climbing Bike 2024 Winner'
    },
    colors: [
      {
        key: 'solar-prominence',
        label: 'Solar Prominence',
        colors: ['#0F0F11', '#D53700'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qbyplgjseicqyfzptegh/MY26AnthemXAdvancedSL1_ColorASolarProminence.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/cmmc7cebz92rqvfanzqn/MY26AnthemXAdvancedSL1_ColorASolarProminence-Front.jpg'
        ]
      }
    ]
  },
  {
    title: 'XTC Advanced 29 1',
    url: 'https://www.giant-bicycles.com/us/xtc-advanced-29-1',
    description:
      'A lightweight 29er hardtail that blends direct power transfer, precise steering, and race-day-ready efficiency.',
    price: {
      mode: 'discount',
      amount: '$3,200',
      oldAmount: '$4,000'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'sale',
      label: 'Save 20%'
    },
    colors: [
      {
        key: 'abyss-black-steampunk',
        label: 'Abyss Black / Steampunk',
        colors: ['#111111', '#8c6133'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qrpefgqfjrzq6x21nwsw/MY26XTCAdvanced291_ColorAAbyssBlack_Bronze.jpg'
        ]
      }
    ]
  },
  {
    title: 'Anthem X Advanced SL 2',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-2',
    description:
      'A fast, capable XC trail bike designed to balance climbing efficiency with extra confidence on rough singletrack.',
    price: {
      mode: 'regular',
      amount: '$5,600'
    },
    secondary: 'MSRP excluding sales tax and dealer fees',
    tag: {
      type: 'new',
      label: 'New'
    },
    colors: [
      {
        key: 'dark-jungle',
        label: 'Dark Jungle',
        colors: ['#2f3a34'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/qrpwlnj9j1d6wfjiv5mc/MY26AnthemXAdvancedSL2_ColorADarkJungle.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/vov07sjl11zhthvh6ret/MY26AnthemXAdvancedSL2_ColorADarkJungle-Rear.jpg'
        ]
      }
    ]
  }
];

const row = document.getElementById('card-row');
const MAX_COMPARE_ITEMS = 3;
const TOUCH_QUERY = '(hover: none), (pointer: coarse)';

function isTouchInteractionMode() {
  return window.matchMedia(TOUCH_QUERY).matches;
}

function createSwatch(color, selected, onSelect) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `swatch${selected ? ' is-selected' : ''}`;
  const [colorA, colorB] = color.colors;
  button.style.setProperty('--swatch-color-a', colorA);
  if (colorB) {
    button.style.setProperty('--swatch-color-b', colorB);
  } else {
    button.style.removeProperty('--swatch-color-b');
  }
  button.setAttribute('aria-label', color.label);
  button.setAttribute('aria-pressed', String(selected));
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(color.key);
    button.blur();
    document.activeElement?.blur?.();
  });
  return button;
}

function renderPriceMarkup(price) {
  if (!price) {
    return '';
  }

  if (price.mode === 'discount') {
    return `
      <div class="price-line price-line--discounted">
        <span class="price-current price-current--sale">${price.amount}</span>
        <span class="price-old">${price.oldAmount}</span>
      </div>
    `;
  }

  if (price.mode === 'from') {
    return `
      <div class="price-line price-line--from">
        <span class="price-current">From ${price.amount}</span>
      </div>
    `;
  }

  if (price.mode === 'from-discount') {
    return `
      <div class="price-line price-line--from-discount">
        <span class="price-prefix">From</span>
        <span class="price-current price-current--sale">${price.amount}</span>
        <span class="price-old">${price.oldAmount}</span>
      </div>
    `;
  }

  return `
    <div class="price-line">
      <span class="price-current">${price.amount}</span>
    </div>
  `;
}

function renderSecondaryMarkup(product) {
  const parts = [];

  if (product.secondary) {
    parts.push(`<p class="finance-copy">${product.secondary}</p>`);
  }

  (product.disclaimers || []).forEach((line) => {
    parts.push(`<p class="disclaimer">${line}</p>`);
  });

  return parts.join('');
}

function renderTagMarkup(tag) {
  if (!tag) {
    return '';
  }

  return `<div class="card-tag card-tag--${tag.type}"><span class="card-tag__label">${tag.label}</span></div>`;
}

function createCard(product) {
  const article = document.createElement('article');
  article.className = 'product-card has-hover-media';
  article.setAttribute('aria-label', `${product.title} product tile`);

  article.innerHTML = `
    <a class="product-card__link" href="${product.url}" aria-label="Open ${product.title} product page"></a>
    <div class="product-card__badges">
      ${renderTagMarkup(product.tag)}
      ${product.award ? `<div class="award-badge-wrap"><img class="award-badge" src="${product.award.src}" alt="${product.award.alt}" /></div>` : ''}
    </div>
    <div class="product-card__media">
      <div class="product-card__media-frame">
        <img class="product-card__image" alt="" />
        <img class="product-card__hover-image" alt="" />
      </div>
    </div>
    <div class="product-card__topline">
      <div class="swatches" aria-label="Available colors"></div>
      <label class="compare-toggle">
        <span>Compare</span>
        <span class="compare-toggle__box">
          <input type="checkbox" name="compare" />
          <span class="checkbox-ui" aria-hidden="true"></span>
          <span class="compare-tooltip" role="tooltip">
            You can compare up to 3 products. Deselect one to add this item.
          </span>
        </span>
      </label>
    </div>
    <div class="product-card__copy">
      <a class="product-card__text-link" href="${product.url}" aria-label="Read more about ${product.title}">
        <div class="title-group">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
        </div>
      </a>
      <div class="product-card__pricing">
        ${renderPriceMarkup(product.price)}
        ${renderSecondaryMarkup(product)}
      </div>
    </div>
  `;

  const swatchContainer = article.querySelector('.swatches');
  const mainImage = article.querySelector('.product-card__image');
  const hoverImage = article.querySelector('.product-card__hover-image');

  function applyColor(colorKey) {
    const color = product.colors.find((entry) => entry.key === colorKey) || product.colors[0];
    const [primaryImage, secondaryImage] = color.images;

    mainImage.src = primaryImage;
    mainImage.alt = `${product.title} in ${color.label}`;

    if (secondaryImage) {
      hoverImage.src = secondaryImage;
      hoverImage.alt = `${product.title} alternate view in ${color.label}`;
      article.classList.add('has-hover-media');
    } else {
      hoverImage.removeAttribute('src');
      hoverImage.alt = '';
      article.classList.remove('has-hover-media');
    }

    swatchContainer.querySelectorAll('.swatch').forEach((swatch) => {
      const isSelected = swatch.dataset.color === color.key;
      swatch.classList.toggle('is-selected', isSelected);
      swatch.setAttribute('aria-pressed', String(isSelected));
    });
  }

  product.colors.forEach((color, index) => {
    const swatch = createSwatch(color, index === 0, applyColor);
    swatch.dataset.color = color.key;
    swatchContainer.appendChild(swatch);
  });

  applyColor(product.colors[0].key);
  return article;
}

products.forEach((product) => {
  row.appendChild(createCard(product));
});

function updateCompareAvailability() {
  const compareInputs = Array.from(row.querySelectorAll('input[name="compare"]'));
  const selectedCount = compareInputs.filter((input) => input.checked).length;

  compareInputs.forEach((input) => {
    const toggle = input.closest('.compare-toggle');
    const shouldDisable = selectedCount >= MAX_COMPARE_ITEMS && !input.checked;

    input.disabled = shouldDisable;

    if (shouldDisable) {
      toggle.classList.add('is-disabled');
      toggle.setAttribute('aria-disabled', 'true');
      return;
    }

    toggle.classList.remove('is-disabled', 'show-tooltip');
    toggle.removeAttribute('aria-disabled');
  });
}

function updateTooltipEdgeAlignment() {
  const cards = Array.from(row.querySelectorAll('.product-card'));
  const rows = new Map();

  cards.forEach((card) => {
    const top = Math.round(card.getBoundingClientRect().top);
    const matches = Array.from(rows.keys()).find((value) => Math.abs(value - top) <= 2);
    const rowKey = matches ?? top;

    if (!rows.has(rowKey)) {
      rows.set(rowKey, []);
    }

    rows.get(rowKey).push(card);
  });

  rows.forEach((rowCards) => {
    rowCards.forEach((card) => card.classList.remove('product-card--edge-right'));
    rowCards[rowCards.length - 1]?.classList.add('product-card--edge-right');
  });
}

function positionCompareTooltip(toggle) {
  const tooltip = toggle.querySelector('.compare-tooltip');
  const card = toggle.closest('.product-card');

  if (!tooltip || !card) {
    return;
  }

  toggle.style.setProperty('--tooltip-shift', '0px');
  if (!card.classList.contains('product-card--edge-right')) {
    return;
  }

  const tooltipRect = tooltip.getBoundingClientRect();
  const viewportPadding = 16;
  let shift = 0;

  if (tooltipRect.right > window.innerWidth - viewportPadding) {
    shift -= tooltipRect.right - (window.innerWidth - viewportPadding);
  }

  if (tooltipRect.left < viewportPadding) {
    shift += viewportPadding - tooltipRect.left;
  }

  toggle.style.setProperty('--tooltip-shift', `${Math.round(shift)}px`);
}

row.addEventListener('change', (event) => {
  if (event.target.matches('input[name="compare"]')) {
    updateCompareAvailability();

    if (isTouchInteractionMode()) {
      event.target.blur();
      document.activeElement?.blur?.();
    }
  }
});

row.addEventListener('click', (event) => {
  const compareToggle = event.target.closest('.compare-toggle');
  const disabledToggle = event.target.closest('.compare-toggle.is-disabled');
  const swatch = event.target.closest('.swatch');

  if (swatch) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (compareToggle) {
    event.stopPropagation();
  }

  if (!disabledToggle) {
    row.querySelectorAll('.compare-toggle.show-tooltip').forEach((toggle) => {
      toggle.classList.remove('show-tooltip');
    });
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  row.querySelectorAll('.compare-toggle.show-tooltip').forEach((toggle) => {
    if (toggle !== disabledToggle) {
      toggle.classList.remove('show-tooltip');
    }
  });

  disabledToggle.classList.add('show-tooltip');
  positionCompareTooltip(disabledToggle);
});

row.addEventListener('touchstart', (event) => {
  if (event.target.closest('.compare-toggle.is-disabled')) {
    event.preventDefault();
  }
}, { passive: false });

row.addEventListener('mouseleave', (event) => {
  const toggle = event.target.closest('.compare-toggle.show-tooltip');

  if (toggle) {
    toggle.classList.remove('show-tooltip');
  }
}, true);

row.addEventListener('mouseenter', (event) => {
  const toggle = event.target.closest('.compare-toggle.is-disabled');

  if (toggle) {
    positionCompareTooltip(toggle);
  }
}, true);

window.addEventListener('resize', updateTooltipEdgeAlignment);
window.addEventListener('resize', () => {
  row.querySelectorAll('.compare-toggle.is-disabled').forEach((toggle) => {
    positionCompareTooltip(toggle);
  });
});

updateCompareAvailability();
updateTooltipEdgeAlignment();
