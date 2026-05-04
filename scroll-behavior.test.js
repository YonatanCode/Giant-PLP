const test = require('node:test');
const assert = require('node:assert/strict');

const {
  getFiltersAreaWheelPlan,
  getProductsAreaWheelPlan,
  shouldHandleSplitWheel
} = require('./scroll-behavior-logic.js');

test('split wheel handling ignores horizontal and ctrl-modified gestures', () => {
  assert.equal(shouldHandleSplitWheel({
    isDesktopSplitScrollActive: true,
    ctrlKey: true,
    deltaX: 0,
    deltaY: 120
  }), false);

  assert.equal(shouldHandleSplitWheel({
    isDesktopSplitScrollActive: true,
    ctrlKey: false,
    deltaX: 120,
    deltaY: 120
  }), false);

  assert.equal(shouldHandleSplitWheel({
    isDesktopSplitScrollActive: true,
    ctrlKey: false,
    deltaX: 0,
    deltaY: 120
  }), true);
});

test('filters area scrolls page only before sticky mode starts', () => {
  assert.deepEqual(getFiltersAreaWheelPlan({
    isFiltersSticky: false,
    canScrollFilters: true,
    canScrollPage: true
  }), {
    handled: true,
    mode: 'page-only'
  });
});

test('filters area scrolls filters and page together once sticky mode is active', () => {
  assert.deepEqual(getFiltersAreaWheelPlan({
    isFiltersSticky: true,
    canScrollFilters: true,
    canScrollPage: true
  }), {
    handled: true,
    mode: 'filters-and-page'
  });
});

test('products area scrolls page first when scrolling down, then hands off to filters', () => {
  assert.deepEqual(getProductsAreaWheelPlan({
    deltaY: 120,
    canScrollFilters: true,
    canScrollPage: true
  }), {
    handled: true,
    primary: 'page',
    secondary: 'filters'
  });
});

test('products area scrolls filters first when scrolling back up', () => {
  assert.deepEqual(getProductsAreaWheelPlan({
    deltaY: -120,
    canScrollFilters: true,
    canScrollPage: true
  }), {
    handled: true,
    primary: 'filters',
    secondary: 'page'
  });
});
