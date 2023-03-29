export function getFooterTypesConfig(): any {
  const footerTypes = window.app.config.footerTypes || {};
  return {
    ...footerTypes,

    footerConfig : {
      all: {
        UIElements: { refreshPage: true, editLayout: true, filter: true },
        visibility: true
      },
      onlyRefreshPage: {
        UIElements: { refreshPage: true, editLayout: false, filter: false },
        visibility: true
      },
      onlyEditLayout: {
        UIElements: { refreshPage: false, editLayout: true, filter: false },
        visibility: true
      },
      onlyFilters: {
        UIElements: { refreshPage: false, editLayout: false, filter: true },
        visibility: true
      },
      exceptFilters: {
        UIElements: { refreshPage: true, editLayout: true, filter: false },
        visibility: true
      },
      exceptEditLayout: {
        UIElements: { refreshPage: true, editLayout: false, filter: true },
        visibility: true
      },
      exceptRefreshPage: {
        UIElements: { refreshPage: false, editLayout: true, filter: true },
        visibility: true
      },
      empty: {
        UIElements: { refreshPage: false, editLayout: false, filter: false },
        visibility: true
      },
      displaynone: {
        UIElements: { refreshPage: false, editLayout: false, filter: false },
        visibility: false
      }
    }
  };
}
