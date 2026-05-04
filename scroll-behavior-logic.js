(function (root, factory) {
  const api = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }

  root.ScrollBehaviorLogic = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function shouldHandleSplitWheel({ isDesktopSplitScrollActive, ctrlKey, deltaX, deltaY }) {
    if (!isDesktopSplitScrollActive || ctrlKey) {
      return false;
    }

    if (Math.abs(deltaY) <= Math.abs(deltaX) || deltaY === 0) {
      return false;
    }

    return true;
  }

  function getFiltersAreaWheelPlan({ isFiltersSticky, canScrollFilters, canScrollPage }) {
    if (!canScrollFilters && !canScrollPage) {
      return { handled: false, mode: 'none' };
    }

    if (!isFiltersSticky) {
      return canScrollPage
        ? { handled: true, mode: 'page-only' }
        : { handled: true, mode: 'filters-only' };
    }

    if (canScrollFilters && canScrollPage) {
      return { handled: true, mode: 'filters-and-page' };
    }

    if (canScrollFilters) {
      return { handled: true, mode: 'filters-only' };
    }

    return { handled: true, mode: 'page-only' };
  }

  function getProductsAreaWheelPlan({ deltaY, canScrollFilters, canScrollPage }) {
    const primary = deltaY > 0 ? 'page' : 'filters';
    const secondary = deltaY > 0 ? 'filters' : 'page';
    const canScrollPrimary = primary === 'page' ? canScrollPage : canScrollFilters;
    const canScrollSecondary = secondary === 'page' ? canScrollPage : canScrollFilters;

    if (!canScrollPrimary && !canScrollSecondary) {
      return { handled: false, primary: null, secondary: null };
    }

    return {
      handled: true,
      primary,
      secondary
    };
  }

  return {
    getFiltersAreaWheelPlan,
    getProductsAreaWheelPlan,
    shouldHandleSplitWheel
  };
});
