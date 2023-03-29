export function getLoginConfig(): any {
  const loginConfig = window.app.config.login || {};

  return {
    ...loginConfig,

    /******************** PARTICULAR CONFIGURATION FOR OUR LOGIN PAGE *************************/
    clientLogo: 'app/common/resources/img/client-logo.png',
    accLogo: 'app/common/resources/img/acn-login-page.png',
    appTitle: 'ARIS APPLICATION TEMPLATE'
  };
}
