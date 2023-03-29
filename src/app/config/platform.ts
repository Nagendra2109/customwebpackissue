export function getPlatformConfig(): any {
  const platformConfig = window.app.config.platform || {};

  return {
    ...platformConfig,
    AWA: './'
  };

}
