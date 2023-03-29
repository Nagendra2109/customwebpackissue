// PREDEFINED ARIS TILES

// PREDEFINED APPLICATION TILES
// HOME

// DIGITAL TWIN

// PROTOTYPE - SAMPLE GRID/CHART WITH FILTER

export function getTilesConfig() {
  const tiles = window.app.config.tiles || {};

  // Extend property
  return {
    ...tiles

    // ARIS PREDEFINED TILES

    // PROTOTYPE - SAMPLE GRID/CHART WITH FILTER
  };
}
