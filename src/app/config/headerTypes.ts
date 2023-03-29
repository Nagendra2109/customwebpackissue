export function getHeaderTypesConfig(): any {
  const headerTypes = window.app.config.headerTypes || {};

  return {
    ...headerTypes,

    headerConfig: {
      CIPCW: {
        UIElements: { CIP_ID: true, CW_ID: true },
        visibility: true
      }
    }
  };
}
