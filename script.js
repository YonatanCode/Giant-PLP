const bikesProducts = [
  {
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

function createGearImage(label, accent, secondaryAccent = accent) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="936" height="624" viewBox="0 0 936 624">
      <rect width="936" height="624" rx="36" fill="#ffffff"/>
      <rect x="128" y="112" width="680" height="400" rx="32" fill="#f8f8fa" stroke="#dedee0" stroke-width="10"/>
      <rect x="184" y="168" width="568" height="288" rx="24" fill="${accent}" opacity="0.12"/>
      <circle cx="256" cy="312" r="76" fill="${accent}" opacity="0.22"/>
      <circle cx="680" cy="312" r="76" fill="${secondaryAccent}" opacity="0.22"/>
      <rect x="280" y="246" width="376" height="132" rx="24" fill="#ffffff"/>
      <text x="468" y="302" text-anchor="middle" font-family="Open Sans, Arial, sans-serif" font-size="34" font-weight="700" fill="#111111">${label}</text>
      <text x="468" y="350" text-anchor="middle" font-family="Open Sans, Arial, sans-serif" font-size="24" fill="#58626e">GIANT GEAR</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const gearProducts = [
  {
    catalog: 'wheel-systems',
    title: 'CXR X1',
    url: 'https://www.giant-bicycles.com/us/cxr-x1-2023',
    description:
      'A lightweight carbon wheel option built for gravel speed, responsive handling, and confident mixed-terrain control.',
    price: {
      mode: 'discount',
      amount: '$660',
      oldAmount: '$1,100'
    },
    secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options',
    tag: {
      type: 'new',
      label: 'New'
    },
    selectorType: 'variants',
    variants: [
      {
        key: 'front',
        label: 'Front',
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/wsmr1wm4rliqbca7wp6w/GIANT-CXR-X1-HOOKLESS-DB-FW-350000307-1.jpg'
        ],
        price: {
          mode: 'discount',
          amount: '$660',
          oldAmount: '$1,100'
        },
        secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options'
      },
      {
        key: 'rear-hg',
        label: 'Rear HG',
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/xevhtoiwixxqyra4xtqz/GIANT-CXR-X1-HOOKLESS-DB-RW-350000325-1.jpg'
        ],
        price: {
          mode: 'discount',
          amount: '$660',
          oldAmount: '$1,100'
        },
        secondary: 'MSRP excluding sales tax, shipping & handling, and dealer-installed options'
      }
    ]
  },
  {
    catalog: 'wheel-systems',
    title: 'SLR 1 42 Front Wheel',
    url: 'https://www.giant-bicycles.com/us/slr-1-42-front-wheel-2021',
    description:
      'A lightweight carbon road wheel built for efficient acceleration, steady handling, and all-around speed on varied terrain.',
    price: {
      mode: 'regular',
      amount: '$685'
    },
    tag: null,
    images: [
      'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/jz4qlmoxiwj3hy4jfu5z/SLR-1-42-FW_1.jpg',
      'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/tx9n1ofgwccmvm5qytf1/SLR-1-42-FW_2.jpg'
    ]
  },
  {
    catalog: 'tires',
    title: 'Maxxis Minion DHF Mountain Bike Tire',
    url: 'https://www.giant-bicycles.com/us/maxxis-minion-dhf-mountain-bike-tire-2023',
    description:
      'A benchmark trail tire built to balance rolling speed with strong braking bite and confident cornering traction.',
    price: {
      mode: 'from-discount',
      amount: '$42',
      oldAmount: '$105'
    },
    secondary:
      'MSRP excluding sales tax, shipping & handling, destination fees, e-bike battery recycling fees and dealer-installed options. Dealer prices and fees may vary.',
    tag: {
      type: 'sale',
      label: 'Save 60%'
    },
    colors: [
      {
        key: 'tan-wall',
        label: 'Tan Wall',
        colors: ['#1f1f21', '#b98d62'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/nm6xmgxfkxteh0j2oye4/Minion-DHF-3Q-Tanwall.jpg'
        ]
      },
      {
        key: 'black',
        label: 'Black',
        colors: ['#0f0f10'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/wv5ruvra3vqz9lsdtd5c/Minion-DHF-3Q.jpg'
        ]
      }
    ]
  },
  {
    catalog: 'tires',
    title: 'Vittoria Mezcal XC Race',
    url: 'https://www.giant-bicycles.com/us/vittoria-mezcal-xc-race',
    description:
      'A fast-rolling XC race tire tuned for low drag, reliable grip, and efficient speed across hardpack and mixed trails.',
    price: {
      mode: 'regular',
      amount: '$103.99'
    },
    tag: null,
    colors: [
      {
        key: 'black',
        label: 'Black',
        colors: ['#111111'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/pxf5pdtvcs6v8uv316jv/MezcalXCRace_SideBlack.png'
        ]
      },
      {
        key: 'brown-black',
        label: 'Brown / Black',
        colors: ['#181818', '#8a684d'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/mgyznc8seyqrui5q2xqd/Mezcal-XC-RaceSideTan.png'
        ]
      }
    ]
  },
  {
    catalog: 'helmets',
    title: 'Rev Pro Mips Helmet',
    url: 'https://www.giant-bicycles.com/us/rev-pro-mips-helmet-2026',
    description:
      'A high-performance road helmet shaped for cooling airflow, aero efficiency, and confident protection on demanding rides.',
    price: {
      mode: 'regular',
      amount: '$300'
    },
    tag: null,
    colors: [
      {
        key: 'matte-black',
        label: 'Matte Black',
        colors: ['#161616'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/xz2idjnmjvdzff34675o/GIANTREVPROMIPSMATTEBLACK80000300380000300480000300580000300680000300780000300801.png'
        ]
      },
      {
        key: 'matte-white',
        label: 'Matte White',
        colors: ['#d9dce1'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/u1qpez0njc9tjoooscq6/GIANTREVPROMIPSMATTEWHITE800003009800003010800003011800003012800003013800003014011.png'
        ]
      },
      {
        key: 'matte-grey',
        label: 'Matte Grey',
        colors: ['#8e9197'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/xyyoixnrlztvufvrorvr/GIANTREVPROMIPSMATTEGRAY80000302180000302280000302380000302480000302580000302601.png'
        ]
      }
    ]
  },
  {
    catalog: 'helmets',
    title: 'Rev Elite',
    url: 'https://www.giant-bicycles.com/us/rev-elite',
    description:
      'A lightweight road helmet that blends modern ventilation, secure fit, and everyday race-inspired comfort.',
    price: {
      mode: 'regular',
      amount: '$190'
    },
    tag: null,
    colors: [
      {
        key: 'gloss-panther-black',
        label: 'Gloss Panther Black',
        colors: ['#141414'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/juvwgh6tirtityswqtjg/_44A0579.jpg'
        ]
      },
      {
        key: 'matte-white-silver',
        label: 'Matte White / Silver',
        colors: ['#f1f1ef', '#c9cbcf'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/hbb551kimjfdtavdoddi/_44A0775.jpg'
        ]
      },
      {
        key: 'gloss-ultra-navy',
        label: 'Gloss Ultra Navy',
        colors: ['#3817a1'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/u84hid0ebypbcykgow3v/_44A0635.jpg'
        ]
      },
      {
        key: 'matte-castle-rock',
        label: 'Matte Castle Rock',
        colors: ['#777777', '#373737'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/mntzb9tupw70apvoebtn/_44A0759.jpg'
        ]
      }
    ]
  },
  {
    catalog: 'helmets',
    title: 'Path MIPS Mens Helmet',
    url: 'https://www.giant-bicycles.com/us/path-mips-mens-helmet-2022',
    description:
      'A versatile everyday helmet designed for comfortable ventilation, extended coverage, and relaxed all-ride confidence.',
    price: {
      mode: 'from',
      amount: '$45'
    },
    tag: null,
    colors: [
      {
        key: 'matte-metal',
        label: 'Matte Metal',
        colors: ['#bfbca0', '#f1f1ee'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/egqly3zyprstqtk6ly3k/PATH-MIPS-MATTE-METAL-TOPO-800002477-800002478.jpg'
        ]
      },
      {
        key: 'black-blue',
        label: 'Black / Blue',
        colors: ['#101113', '#3f78e8'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/egqly3zyprstqtk6ly3k/PATH-MIPS-MATTE-METAL-TOPO-800002477-800002478.jpg'
        ]
      },
      {
        key: 'matte-phantom-green',
        label: 'Matte Phantom Green',
        colors: ['#687867'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/bpaombjbeu3nfnlbjkmm/PATH-MIPS-PHANTOM-GREEN-TOPO-800002479-800002480.jpg'
        ]
      },
      {
        key: 'matte-panther-black',
        label: 'Matte Panther Black',
        colors: ['#151515'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/zlmynwhvmwqyd2comfmy/PATH-MIPS-PANTHER-BLACK-TOPO-800002483-800002484.jpg'
        ]
      },
      {
        key: 'matte-white',
        label: 'Matte White',
        colors: ['#e8eaee'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/pgudxhqhociblrksbbxy/PATH-MIPS-MATTE-WHITE-800002570-800002571-800002599-800002500.jpg'
        ]
      }
    ]
  },
  {
    catalog: 'apparel',
    title: 'Transcend Mens Baggy Short',
    url: 'https://www.giant-bicycles.com/us/transcend-mens-baggy-short',
    description:
      'A relaxed riding short with stretch fabric, adjustable fit, and everyday utility for trail or gravel sessions.',
    price: {
      mode: 'regular',
      amount: '$44.99'
    },
    tag: null,
    colors: [
      {
        key: 'blue',
        label: 'Blue',
        colors: ['#2e58a6'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/trjofjdvjte83mpzpr53/16364-68.jpg'
        ]
      }
    ]
  },
  {
    catalog: 'apparel',
    title: 'Giant Factory Off Road Team Replica XC Bib Short',
    url: 'https://www.giant-bicycles.com/us/giant-factory-off-road-team-replica-xc-bib-short-2024',
    description:
      'A pro-inspired XC bib short combining race-ready compression, breathable support, and long-ride comfort.',
    price: {
      mode: 'regular',
      amount: '$175'
    },
    tag: {
      type: 'best-seller',
      label: 'Online Exclusive'
    },
    colors: [
      {
        key: 'black',
        label: 'Black',
        colors: ['#111111'],
        images: [
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/spxe5kwyyyqnm6riyuos/GIANTGFORTREPLICAXCBIBSHORT@BLACKFRONT@860002661;860002662;860002663;860002664;860002665;860002666.jpg',
          'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_2000%2Cq_80/okg0urbv6rn3u7cug2im/GIANTGFORTREPLICAXCBIBSHORT@BLACKREAR@860002661;860002662;860002663;860002664;860002665;860002666.jpg'
        ]
      }
    ]
  }
];

const row = document.getElementById('card-row');
const tabs = Array.from(document.querySelectorAll('.plp-tab'));
const MAX_COMPARE_ITEMS = 3;
const TOUCH_QUERY = '(hover: none), (pointer: coarse)';
const PRICE_DISCLAIMER = '0% APR Finance';
const wheelSystemsProducts = gearProducts.filter((product) => product.catalog === 'wheel-systems');
const tiresProducts = gearProducts.filter((product) => product.catalog === 'tires');
const helmetsProducts = gearProducts.filter((product) => product.catalog === 'helmets');
const apparelProducts = gearProducts.filter((product) => product.catalog === 'apparel');
const catalogs = {
  bikes: bikesProducts,
  'wheel-systems': wheelSystemsProducts,
  tires: tiresProducts,
  helmets: helmetsProducts,
  apparel: apparelProducts
};
let activeCatalogKey = 'bikes';

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

function createVariantPill(variant, selected, onSelect) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `variant-pill${selected ? ' is-selected' : ''}`;
  button.innerHTML = `<span class="variant-pill__label">${variant.label}</span>`;
  button.setAttribute('aria-pressed', String(selected));
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    onSelect(variant.key);
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
  const showCompare = activeCatalogKey === 'bikes';
  const showDescription = activeCatalogKey === 'bikes';

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
      <div class="selector-group" aria-label="Available options"></div>
      ${showCompare ? `
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
      ` : '<span class="compare-toggle compare-toggle--ghost" aria-hidden="true"></span>'}
    </div>
    <div class="product-card__copy">
      <a class="product-card__text-link" href="${product.url}" aria-label="Read more about ${product.title}">
        <div class="title-group">
          <h2 class="product-title">${product.title}</h2>
          ${showDescription ? `<p class="product-description">${product.description}</p>` : ''}
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
  const pricingContainer = article.querySelector('.product-card__pricing');

  function applySelection(optionKey) {
    const usesVariants = product.selectorType === 'variants';
    const entries = usesVariants ? product.variants : product.colors;
    const selectedEntry = entries.find((entry) => entry.key === optionKey) || entries[0];
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

    if (usesVariants) {
      pricingContainer.innerHTML = `
        ${renderPriceMarkup(selectedEntry.price || product.price)}
        ${renderSecondaryMarkup({
          secondary: selectedEntry.secondary || product.secondary,
          disclaimers: selectedEntry.disclaimers || product.disclaimers
        })}
      `;
    }

    selectorGroup.querySelectorAll('button').forEach((button) => {
      const isSelected = button.dataset.option === selectedEntry.key;
      button.classList.toggle('is-selected', isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });
  }

  if (product.selectorType === 'variants') {
    selectorGroup.classList.add('selector-group--variants');
    selectorGroup.setAttribute('aria-label', 'Available product variants');
    product.variants.forEach((variant, index) => {
      const pill = createVariantPill(variant, index === 0, applySelection);
      pill.dataset.option = variant.key;
      selectorGroup.appendChild(pill);
    });
    applySelection(product.variants[0].key);
    return article;
  }

  if (!product.colors?.length) {
    selectorGroup.classList.add('selector-group--ghost');

    const [primaryImage, secondaryImage] = product.images || [];
    mainImage.src = primaryImage;
    mainImage.alt = product.title;

    if (secondaryImage) {
      hoverImage.src = secondaryImage;
      hoverImage.alt = `${product.title} alternate view`;
      article.classList.add('has-hover-media');
    } else {
      hoverImage.removeAttribute('src');
      hoverImage.alt = '';
      article.classList.remove('has-hover-media');
    }

    return article;
  }

  selectorGroup.classList.add('swatches');
  selectorGroup.setAttribute('aria-label', 'Available colors');
  product.colors.forEach((color, index) => {
    const swatch = createSwatch(color, index === 0, applySelection);
    swatch.dataset.option = color.key;
    selectorGroup.appendChild(swatch);
  });

  applySelection(product.colors[0].key);
  return article;
}

function renderCatalog(catalogKey) {
  activeCatalogKey = catalogKey;
  row.innerHTML = '';

  catalogs[catalogKey].forEach((product) => {
    row.appendChild(createCard(product));
  });

  updateCompareAvailability();
  updateTooltipEdgeAlignment();
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
  showDisabledCompareTooltip(disabledToggle);
});

row.addEventListener('touchstart', (event) => {
  if (event.target.closest('.compare-toggle.is-disabled')) {
    event.preventDefault();
  }
}, { passive: false });

row.addEventListener('touchend', (event) => {
  const disabledToggle = event.target.closest('.compare-toggle.is-disabled');

  if (!disabledToggle) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  showDisabledCompareTooltip(disabledToggle);
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

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const nextKey = tab.dataset.tab;

    if (!nextKey || nextKey === activeCatalogKey) {
      return;
    }

    tabs.forEach((entry) => {
      const isActive = entry === tab;
      entry.classList.toggle('is-active', isActive);
      entry.setAttribute('aria-selected', String(isActive));
    });

    renderCatalog(nextKey);
  });
});

renderCatalog(activeCatalogKey);
