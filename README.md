# Giant PLP Prototype

## Local Preview

Run a local server from this folder and open `http://localhost:8000/index.html`.

## Regression Guardrails

Run:

```bash
npm test
```

This runs the no-dependency scroll behavior regression tests in `scroll-behavior.test.js`.

## Scroll Behavior Contract

These rules are intentional and should stay true unless we explicitly redesign the experience:

1. Scrolling over the product area should move the page/cards first when going down, then hand off to the filters.
2. Scrolling back up over the product area should bring the filters back first, then the page.
3. Scrolling over the filters should move the page too once the filters are in sticky mode.
4. Any UI change that affects filter height must continue to call `scheduleFiltersStickyRefresh()` so sticky/internal scrolling stays in sync.

## Manual Smoke Check

After changing `script.js`, `styles.css`, or filter markup:

1. Open the page and confirm product cards render and titles are visible.
2. Hover the product side and scroll down until the cards finish moving; confirm the filters keep moving after that.
3. Hover the filters and scroll; confirm the page still moves and the filters do not get stranded.
4. Open and close several filter groups and confirm the `+ / -` icon does not jump.
