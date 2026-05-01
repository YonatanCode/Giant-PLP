const bikesProducts = [
  {
    id: 'talon-2',
    availabilityMiles: 18,
    title: 'Talon 2',
    url: 'https://www.giant-bicycles.com/us/talon-2-2025',
    description:
      'A light, capable hardtail built to keep climbing effort low while still feeling stable and responsive on everyday trails.',
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
    id: 'anthem-advanced-sl-frameset',
    availabilityMiles: 62,
    title: 'Anthem Advanced SL Frameset',
    url: 'https://www.giant-bicycles.com/us/anthem-advanced-sl-frameset',
    description:
      'An ultralight carbon frameset made for building a feathery XC race bike with sharp handling and efficient suspension feel.',
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
    id: 'anthem-x-advanced-sl-1',
    availabilityMiles: 95,
    title: 'Anthem X Advanced SL 1',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-1',
    description:
      'A top-tier XC bike engineered to save weight for faster climbing, quicker acceleration, and race-day speed.',
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
    id: 'xtc-advanced-29-1',
    availabilityMiles: 34,
    title: 'XTC Advanced 29 1',
    url: 'https://www.giant-bicycles.com/us/xtc-advanced-29-1',
    description:
      'A lightweight 29er hardtail built to maximize power-to-weight efficiency with crisp steering and fast XC response.',
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
    id: 'anthem-x-advanced-sl-2',
    availabilityMiles: 77,
    title: 'Anthem X Advanced SL 2',
    url: 'https://www.giant-bicycles.com/us/anthem-x-advanced-sl-2',
    description:
      'A lightweight XC platform that trims climbing burden while keeping enough control and confidence for rough singletrack.',
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

const row = document.getElementById('products-grid');
const emptyState = document.getElementById('empty-state');
const resultsCount = document.getElementById('results-count');
const searchContent = document.getElementById('search-content');
const filtersToggleButton = document.getElementById('filters-toggle');
const filtersToggleLabel = document.getElementById('filters-toggle-label');
const availabilityToggle = document.getElementById('availability-toggle');
const availabilityDetails = document.getElementById('availability-details');
const locationInput = document.getElementById('location-input');
const locationSuggestions = document.getElementById('location-suggestions');
const availabilityHelper = document.getElementById('availability-helper');
const distanceFilter = document.getElementById('distance-filter');
const distanceRange = document.getElementById('distance-range');
const distanceOutput = document.getElementById('distance-output');
const sortSelect = document.getElementById('sort-select');

const AVAILABILITY_DISTANCE_MIN = 1;
const AVAILABILITY_DISTANCE_STEP = 1;
const MAX_COMPARE_ITEMS = 3;
const TOUCH_QUERY = '(hover: none), (pointer: coarse)';
const PRICE_DISCLAIMER = '0% APR Finance';
const compareSelection = new Set();

const state = {
  filtersVisible: true,
  availabilityOnly: false,
  locationQuery: locationInput.value,
  maxDistance: getAvailabilityDistanceConfig().defaultDistance,
  sortBy: sortSelect.value
};

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

function parseCurrencyAmount(value) {
  if (!value) {
    return null;
  }

  const numericValue = Number(String(value).replace(/[^0-9.]/g, ''));
  return Number.isFinite(numericValue) ? numericValue : null;
}

function getDiscountPercentage(price) {
  const currentAmount = parseCurrencyAmount(price?.amount);
  const oldAmount = parseCurrencyAmount(price?.oldAmount);

  if (!currentAmount || !oldAmount || oldAmount <= currentAmount) {
    return null;
  }

  return Math.round(((oldAmount - currentAmount) / oldAmount) * 100);
}

function renderSecondaryMarkup(product) {
  const price = product.price;
  const discountPercentage = getDiscountPercentage(price);
  const isDiscounted = price?.mode === 'discount' || price?.mode === 'from-discount';

  if (!isDiscounted || !price?.oldAmount || !discountPercentage) {
    return `<p class="finance-copy">${PRICE_DISCLAIMER}</p>`;
  }

  return `
    <p class="finance-copy">${PRICE_DISCLAIMER}</p>
    <p class="disclaimer">Lowest price in 30 days before the discount: ${price.oldAmount} -${discountPercentage}%</p>
    <p class="disclaimer">Regular price: ${price.oldAmount} -${discountPercentage}%</p>
  `;
}

function getAvailabilityDistances(products = bikesProducts) {
  return products
    .map((product) => Number(product.availabilityMiles))
    .filter(Number.isFinite)
    .sort((a, b) => a - b);
}

function getAvailabilityDistanceConfig(products = bikesProducts) {
  const distances = getAvailabilityDistances(products);

  if (!distances.length) {
    return {
      defaultDistance: AVAILABILITY_DISTANCE_MIN,
      maxDistance: AVAILABILITY_DISTANCE_MIN
    };
  }

  const defaultDistance = distances[Math.min(2, distances.length - 1)];
  const furthestDistance = distances[distances.length - 1];

  return {
    defaultDistance,
    maxDistance: Math.max(defaultDistance, Math.ceil(furthestDistance * 1.5))
  };
}

function hasAvailabilityLocation() {
  return state.locationQuery.trim().length > 0;
}

function isAvailabilityFilterActive() {
  return state.availabilityOnly && hasAvailabilityLocation();
}

function initializeAvailabilityDistance() {
  const { defaultDistance } = getAvailabilityDistanceConfig();
  state.maxDistance = defaultDistance;
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
  article.dataset.productId = product.id;
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
      <div class="selector-group" aria-label="Available colors"></div>
      <label class="compare-toggle">
        <span>Compare</span>
        <span class="compare-toggle__box">
          <input type="checkbox" name="compare" data-product-id="${product.id}" ${compareSelection.has(product.id) ? 'checked' : ''} />
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

  const selectorGroup = article.querySelector('.selector-group');
  const mainImage = article.querySelector('.product-card__image');
  const hoverImage = article.querySelector('.product-card__hover-image');

  function applySelection(optionKey) {
    const selectedEntry = product.colors.find((entry) => entry.key === optionKey) || product.colors[0];
    const [primaryImage, secondaryImage] = selectedEntry.images;

    mainImage.src = primaryImage;
    mainImage.alt = `${product.title} in ${selectedEntry.label}`;

    if (secondaryImage) {
      hoverImage.src = secondaryImage;
      hoverImage.alt = `${product.title} alternate view in ${selectedEntry.label}`;
      article.classList.add('has-hover-media');
    } else {
      hoverImage.removeAttribute('src');
      hoverImage.alt = '';
      article.classList.remove('has-hover-media');
    }

    selectorGroup.querySelectorAll('button').forEach((button) => {
      const isSelected = button.dataset.option === selectedEntry.key;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  product.colors.forEach((color, index) => {
    const swatch = createSwatch(color, index === 0, applySelection);
    swatch.dataset.option = color.key;
    selectorGroup.appendChild(swatch);
  });

  applySelection(product.colors[0].key);
  return article;
}

function getFilteredProducts() {
  let products = [...bikesProducts];

  if (isAvailabilityFilterActive()) {
    products = products.filter((product) => product.availabilityMiles <= state.maxDistance);
  }

  if (state.sortBy === 'price-low') {
    products.sort((a, b) => (parseCurrencyAmount(a.price.amount) || 0) - (parseCurrencyAmount(b.price.amount) || 0));
  }

  if (state.sortBy === 'price-high') {
    products.sort((a, b) => (parseCurrencyAmount(b.price.amount) || 0) - (parseCurrencyAmount(a.price.amount) || 0));
  }

  return products;
}

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
    const match = Array.from(rows.keys()).find((value) => Math.abs(value - top) <= 2);
    const rowKey = match ?? top;

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
  if (!isTouchInteractionMode() && !card.classList.contains('product-card--edge-right')) {
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

function showDisabledCompareTooltip(toggle) {
  row.querySelectorAll('.compare-toggle.show-tooltip').forEach((entry) => {
    if (entry !== toggle) {
      entry.classList.remove('show-tooltip');
    }
  });

  toggle.classList.add('show-tooltip');
  positionCompareTooltip(toggle);
}

function syncFilterUi() {
  const { defaultDistance, maxDistance } = getAvailabilityDistanceConfig();
  const distanceValue = state.maxDistance > 0 ? Math.min(state.maxDistance, maxDistance) : defaultDistance;
  const distanceUnit = distanceValue === 1 ? 'mile' : 'miles';
  const distanceLabel = `${distanceValue} ${distanceUnit} away`;
  const hasLocation = hasAvailabilityLocation();
  const shouldShowDistanceFilter = state.availabilityOnly && hasLocation;
  const shouldShowAvailabilityHelper = state.availabilityOnly && !hasLocation;

  state.maxDistance = distanceValue;
  distanceRange.min = String(AVAILABILITY_DISTANCE_MIN);
  distanceRange.max = String(maxDistance);
  distanceRange.step = String(AVAILABILITY_DISTANCE_STEP);
  distanceRange.value = String(distanceValue);
  distanceRange.style.setProperty('--range-fill-percent', `${maxDistance > AVAILABILITY_DISTANCE_MIN ? (distanceValue / maxDistance) * 100 : 0}%`);
  distanceOutput.value = distanceLabel;
  distanceOutput.textContent = distanceLabel;
  availabilityDetails.hidden = !state.availabilityOnly;
  availabilityHelper.hidden = !shouldShowAvailabilityHelper;
  distanceFilter.hidden = !shouldShowDistanceFilter;
  distanceRange.disabled = !shouldShowDistanceFilter;
  locationInput.disabled = !state.availabilityOnly;
  if (shouldShowAvailabilityHelper) {
    locationInput.setAttribute('aria-describedby', 'availability-helper');
  } else {
    locationInput.removeAttribute('aria-describedby');
  }
  filtersToggleLabel.textContent = state.filtersVisible ? 'Hide filters' : 'Show filters';
  filtersToggleButton.setAttribute('aria-pressed', String(state.filtersVisible));
  searchContent.classList.toggle('search-page__content--filters-hidden', !state.filtersVisible);
}

function renderCatalog() {
  const visibleProducts = getFilteredProducts();
  const visibleIds = new Set(visibleProducts.map((product) => product.id));

  Array.from(compareSelection).forEach((id) => {
    if (!visibleIds.has(id)) {
      compareSelection.delete(id);
    }
  });

  row.innerHTML = '';
  visibleProducts.forEach((product) => {
    row.appendChild(createCard(product));
  });

  resultsCount.textContent = String(visibleProducts.length);
  if (emptyState) emptyState.hidden = visibleProducts.length > 0;
  row.hidden = visibleProducts.length === 0;

  updateCompareAvailability();
  updateTooltipEdgeAlignment();
}

availabilityToggle.addEventListener('change', () => {
  state.availabilityOnly = availabilityToggle.checked;
  syncFilterUi();
  renderCatalog();
});

// ─── Location suggestions ──────────────────────────────────────────────────

const LOCATION_CITY_SUGGESTIONS = [
  'New York, NY', 'Brooklyn, NY', 'Queens, NY', 'Bronx, NY', 'Staten Island, NY',
  'Jersey City, NJ', 'Hoboken, NJ', 'Newark, NJ', 'Bayonne, NJ', 'Weehawken, NJ',
  'Los Angeles, CA', 'San Francisco, CA', 'San Diego, CA', 'Sacramento, CA', 'San Jose, CA',
  'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX',
  'Dallas, TX', 'Austin, TX', 'Jacksonville, FL', 'Fort Worth, TX', 'Columbus, OH',
  'Charlotte, NC', 'Indianapolis, IN', 'Seattle, WA', 'Denver, CO', 'Nashville, TN',
  'Las Vegas, NV', 'Portland, OR', 'Baltimore, MD', 'Milwaukee, WI', 'Atlanta, GA',
  'Kansas City, MO', 'Raleigh, NC', 'Minneapolis, MN', 'Tampa, FL', 'New Orleans, LA'
];

const LOCATION_ZIP_MAP = {
  '10001': 'New York, NY', '10002': 'New York, NY', '10003': 'New York, NY',
  '10004': 'New York, NY', '10005': 'New York, NY', '10006': 'New York, NY',
  '10007': 'New York, NY', '10009': 'New York, NY', '10010': 'New York, NY',
  '10011': 'New York, NY', '10012': 'New York, NY', '10013': 'New York, NY',
  '10014': 'New York, NY', '10016': 'New York, NY', '10017': 'New York, NY',
  '10018': 'New York, NY', '10019': 'New York, NY', '10021': 'New York, NY',
  '10022': 'New York, NY', '10023': 'New York, NY', '10024': 'New York, NY',
  '10025': 'New York, NY', '10026': 'New York, NY', '10027': 'New York, NY',
  '10028': 'New York, NY', '10036': 'New York, NY',
  '11201': 'Brooklyn, NY', '11202': 'Brooklyn, NY', '11203': 'Brooklyn, NY',
  '11204': 'Brooklyn, NY', '11205': 'Brooklyn, NY', '11206': 'Brooklyn, NY',
  '11207': 'Brooklyn, NY', '11208': 'Brooklyn, NY', '11209': 'Brooklyn, NY',
  '07302': 'Jersey City, NJ', '07304': 'Jersey City, NJ', '07306': 'Jersey City, NJ',
  '07307': 'Jersey City, NJ', '07310': 'Jersey City, NJ'
};

let activeSuggestionIndex = -1;

function getMatchingSuggestions(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  if (/^\d/.test(q)) {
    const cities = [...new Set(
      Object.entries(LOCATION_ZIP_MAP)
        .filter(([zip]) => zip.startsWith(q))
        .map(([, city]) => city)
    )];
    return cities.slice(0, 6);
  }

  return LOCATION_CITY_SUGGESTIONS.filter((s) => s.toLowerCase().startsWith(q)).slice(0, 6);
}

function renderLocationSuggestions() {
  const matches = getMatchingSuggestions(locationInput.value);
  activeSuggestionIndex = -1;
  locationInput.removeAttribute('aria-activedescendant');

  if (!matches.length) {
    locationSuggestions.hidden = true;
    locationSuggestions.innerHTML = '';
    return;
  }

  locationSuggestions.innerHTML = matches.map((suggestion, i) =>
    `<li class="location-suggestions__item" role="option" id="location-suggestion-${i}" aria-selected="false">${suggestion}</li>`
  ).join('');

  locationSuggestions.querySelectorAll('.location-suggestions__item').forEach((item) => {
    item.addEventListener('mousedown', (event) => {
      event.preventDefault();
      selectLocationSuggestion(item.textContent);
    });
  });

  locationSuggestions.hidden = false;
}

function selectLocationSuggestion(value) {
  locationInput.value = value;
  locationSuggestions.hidden = true;
  locationSuggestions.innerHTML = '';
  activeSuggestionIndex = -1;
  locationInput.removeAttribute('aria-activedescendant');

  const locationWasEntered = hasAvailabilityLocation();
  state.locationQuery = locationInput.value;
  if (!locationWasEntered && hasAvailabilityLocation()) {
    initializeAvailabilityDistance();
  }
  syncFilterUi();
  renderCatalog();
}

function updateActiveSuggestion(index) {
  const items = locationSuggestions.querySelectorAll('.location-suggestions__item');
  items.forEach((item, i) => {
    item.classList.toggle('location-suggestions__item--active', i === index);
    item.setAttribute('aria-selected', String(i === index));
  });

  if (index >= 0 && items[index]) {
    locationInput.setAttribute('aria-activedescendant', `location-suggestion-${index}`);
  } else {
    locationInput.removeAttribute('aria-activedescendant');
  }
}

locationInput.addEventListener('input', () => {
  const locationWasEntered = hasAvailabilityLocation();
  state.locationQuery = locationInput.value;

  if (!locationWasEntered && hasAvailabilityLocation()) {
    initializeAvailabilityDistance();
  }

  renderLocationSuggestions();
  syncFilterUi();
  renderCatalog();
});

locationInput.addEventListener('keydown', (event) => {
  if (locationSuggestions.hidden) return;

  const items = locationSuggestions.querySelectorAll('.location-suggestions__item');

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    activeSuggestionIndex = Math.min(activeSuggestionIndex + 1, items.length - 1);
    updateActiveSuggestion(activeSuggestionIndex);
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    activeSuggestionIndex = Math.max(activeSuggestionIndex - 1, -1);
    updateActiveSuggestion(activeSuggestionIndex);
  } else if (event.key === 'Enter' && activeSuggestionIndex >= 0) {
    event.preventDefault();
    selectLocationSuggestion(items[activeSuggestionIndex].textContent);
  } else if (event.key === 'Escape') {
    locationSuggestions.hidden = true;
    locationSuggestions.innerHTML = '';
    activeSuggestionIndex = -1;
  }
});

locationInput.addEventListener('blur', () => {
  setTimeout(() => {
    locationSuggestions.hidden = true;
    locationSuggestions.innerHTML = '';
    activeSuggestionIndex = -1;
  }, 150);
});

distanceRange.addEventListener('input', () => {
  state.maxDistance = Number(distanceRange.value);
  syncFilterUi();
  renderCatalog();
});

let rangeDragging = false;
let rangeLastX = 0;

distanceRange.addEventListener('pointerdown', (event) => {
  rangeDragging = true;
  rangeLastX = event.clientX;
});

document.addEventListener('mousemove', (event) => {
  if (rangeDragging) rangeLastX = event.clientX;
});

document.addEventListener('pointerup', () => {
  if (!rangeDragging) return;
  rangeDragging = false;

  const rect = distanceRange.getBoundingClientRect();

  if (rangeLastX < rect.left) {
    distanceRange.value = distanceRange.min;
    distanceRange.dispatchEvent(new Event('input'));
  } else if (rangeLastX > rect.right) {
    distanceRange.value = distanceRange.max;
    distanceRange.dispatchEvent(new Event('input'));
  }
});

sortSelect.addEventListener('change', () => {
  state.sortBy = sortSelect.value;
  renderCatalog();
});

filtersToggleButton.addEventListener('click', () => {
  state.filtersVisible = !state.filtersVisible;
  syncFilterUi();
  updateTooltipEdgeAlignment();
});

row.addEventListener('change', (event) => {
  if (!event.target.matches('input[name="compare"]')) {
    return;
  }

  const productId = event.target.dataset.productId;

  if (event.target.checked) {
    compareSelection.add(productId);
  } else {
    compareSelection.delete(productId);
  }

  updateCompareAvailability();

  if (isTouchInteractionMode()) {
    event.target.blur();
    document.activeElement?.blur?.();
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
  showDisabledCompareTooltip(disabledToggle);
});

row.addEventListener(
  'touchstart',
  (event) => {
    if (event.target.closest('.compare-toggle.is-disabled')) {
      event.preventDefault();
    }
  },
  { passive: false }
);

row.addEventListener(
  'touchend',
  (event) => {
    const disabledToggle = event.target.closest('.compare-toggle.is-disabled');

    if (!disabledToggle) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    showDisabledCompareTooltip(disabledToggle);
  },
  { passive: false }
);

row.addEventListener(
  'mouseleave',
  (event) => {
    const toggle = event.target.closest('.compare-toggle.show-tooltip');

    if (toggle) {
      toggle.classList.remove('show-tooltip');
    }
  },
  true
);

row.addEventListener(
  'mouseenter',
  (event) => {
    const toggle = event.target.closest('.compare-toggle.is-disabled');

    if (toggle) {
      positionCompareTooltip(toggle);
    }
  },
  true
);

window.addEventListener('resize', updateTooltipEdgeAlignment);
window.addEventListener('resize', () => {
  row.querySelectorAll('.compare-toggle.is-disabled').forEach((toggle) => {
    positionCompareTooltip(toggle);
  });
});

syncFilterUi();
renderCatalog();

// ─── Filter group collapse/expand ─────────────────────────────────────────

document.getElementById('filters-panel').addEventListener('click', (event) => {
  const header = event.target.closest('.filter-group__header');
  if (!header) return;

  const section = header.closest('.filter-group');
  const isOpen = section.classList.contains('filter-group--open');
  const symbol = header.querySelector('.filter-group__symbol');

  section.classList.toggle('filter-group--open', !isOpen);
  header.setAttribute('aria-expanded', String(!isOpen));
  if (symbol) symbol.textContent = isOpen ? '+' : '−';
});

// ─── Store selection modal ────────────────────────────────────────────────

const STORES = [
  { id: 'gogo-gone', name: 'GoGo Gone', distance: '0.8 miles' },
  { id: 'nyc-velo-eastside', name: 'NYC Velo Eastside', distance: '1.3 miles' },
  { id: 'giant-jersey-city', name: 'Giant Jersy City - Grove Street Bicycles', distance: '2.2 miles' },
  { id: 'central-park-bikes', name: 'Central Park Bikes', distance: '2.3 miles' },
  { id: 'brooklyn-bridge-cycles', name: 'Brooklyn Bridge Cycles', distance: '2.6 miles' },
  { id: 'times-square-bikes', name: 'Times Square Bikes', distance: '2.7 miles' },
  { id: 'wall-street-wheels', name: 'Wall Street Wheels', distance: '3.0 miles' },
  { id: 'harlem-pedals', name: 'Harlem Pedals', distance: '3.2 miles' },
  { id: 'chelsea-cycle-shop', name: 'Chelsea Cycle Shop', distance: '3.2 miles' },
  { id: 'soho-spin-bikes', name: 'SoHo Spin Bikes', distance: '3.7 miles' },
];

const storeModalOverlay = document.getElementById('store-modal-overlay');
const storeModalClose = document.getElementById('store-modal-close');
const storeModalLocation = document.getElementById('store-modal-location');
const storeModalList = document.getElementById('store-modal-list');
const storeModalApply = document.getElementById('store-modal-apply');
const openStoreModalBtn = document.getElementById('open-store-modal');
const storePills = document.getElementById('store-pills');
const storesLabel = document.querySelector('.availability-stores-btn__label');
const filterAvailablePickup = document.getElementById('filter-available-pickup');

let selectedStoreIds = new Set();
let pendingStoreIds = new Set();

function openStoreModal() {
  pendingStoreIds = new Set(selectedStoreIds);
  storeModalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  storeModalLocation.focus();
  renderModalList();
}

function closeStoreModal() {
  storeModalOverlay.hidden = true;
  document.body.style.overflow = '';
}

function renderModalList() {
  const hasLocation = storeModalLocation.value.trim().length > 0;
  storeModalList.hidden = !hasLocation;
  if (!hasLocation) return;

  storeModalList.innerHTML = STORES.map((store) => `
    <label class="store-modal__item">
      <span class="compare-toggle__box">
        <input class="store-modal__item-checkbox" type="checkbox" value="${store.id}" ${pendingStoreIds.has(store.id) ? 'checked' : ''} />
        <span class="checkbox-ui" aria-hidden="true"></span>
      </span>
      <span class="store-modal__item-name">${store.name}</span>
      <span class="store-modal__item-distance">${store.distance}</span>
    </label>
  `).join('');

  storeModalList.querySelectorAll('.store-modal__item-checkbox').forEach((cb) => {
    cb.addEventListener('change', () => {
      if (cb.checked) pendingStoreIds.add(cb.value);
      else pendingStoreIds.delete(cb.value);
    });
  });
}

function applyStoreSelection() {
  selectedStoreIds = new Set(pendingStoreIds);
  if (selectedStoreIds.size > 0 && filterAvailablePickup) {
    filterAvailablePickup.checked = true;
  }
  renderStorePills();
  updateStoresLabel();
  closeStoreModal();
}

function renderStorePills() {
  if (selectedStoreIds.size === 0) {
    storePills.hidden = true;
    return;
  }
  storePills.hidden = false;
  storePills.innerHTML = Array.from(selectedStoreIds).map((id) => {
    const store = STORES.find((s) => s.id === id);
    if (!store) return '';
    return `<span class="store-pill"><span>${store.name}</span><button class="store-pill__remove" type="button" data-store-id="${id}" aria-label="Remove ${store.name}">&times;</button></span>`;
  }).join('');

  storePills.querySelectorAll('.store-pill__remove').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectedStoreIds.delete(btn.dataset.storeId);
      renderStorePills();
      updateStoresLabel();
    });
  });
}

function updateStoresLabel() {
  if (!storesLabel) return;
  const n = selectedStoreIds.size;
  storesLabel.textContent = n === 0 ? 'All stores' : `${n} store${n > 1 ? 's' : ''} selected`;
}

openStoreModalBtn.addEventListener('click', openStoreModal);
storeModalClose.addEventListener('click', closeStoreModal);
storeModalApply.addEventListener('click', applyStoreSelection);
storeModalLocation.addEventListener('input', renderModalList);

storeModalOverlay.addEventListener('click', (event) => {
  if (event.target === storeModalOverlay) closeStoreModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !storeModalOverlay.hidden) closeStoreModal();
  if (event.key === 'Escape' && !storesRangeOverlay.hidden) closeStoresRangeModal();
});

// ─── Stores in range modal ────────────────────────────────────────────────

const storesRangeOverlay = document.getElementById('stores-range-overlay');
const storesRangeClose = document.getElementById('stores-range-close');
const storesRangeTitle = document.getElementById('stores-range-title');
const storesRangeList = document.getElementById('stores-range-list');
const showStoresInRangeBtn = document.getElementById('show-stores-in-range');

function parseStoreDistance(distanceStr) {
  return parseFloat(distanceStr);
}

function openStoresRangeModal() {
  const withinRange = STORES.filter((store) => parseStoreDistance(store.distance) <= state.maxDistance);
  const unit = state.maxDistance === 1 ? 'mile' : 'miles';
  storesRangeTitle.textContent = `Stores within ${state.maxDistance} ${unit}`;
  storesRangeList.innerHTML = withinRange.length
    ? withinRange.map((store) => `
        <div class="stores-range__item">
          <span class="stores-range__item-name">${store.name}</span>
          <span class="stores-range__item-distance">${store.distance}</span>
        </div>
      `).join('')
    : `<p style="color: var(--Contrast-Variant); font-size: var(--Font-Size-Body-S);">No stores found within this range.</p>`;
  storesRangeOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  storesRangeClose.focus();
}

function closeStoresRangeModal() {
  storesRangeOverlay.hidden = true;
  document.body.style.overflow = '';
}

showStoresInRangeBtn.addEventListener('click', openStoresRangeModal);
storesRangeClose.addEventListener('click', closeStoresRangeModal);
storesRangeOverlay.addEventListener('click', (event) => {
  if (event.target === storesRangeOverlay) closeStoresRangeModal();
});
