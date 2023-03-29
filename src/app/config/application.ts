export function getApplicationConfig(): any {
  const applicationConfig = window.app.config.application || {};

  return {
    ...applicationConfig,

    /******************** PARTICULAR CONFIGURATION FOR OUR APPLICATION *************************/
    /****** Add here the configuration of ARIS that we wish overwrite for our Application ******/

    mocks_path: './app/mocks',
    autorefresh: {
      available: true,
      defaultValue: true
    },
    aris_core_path: './app/aris-core-ui-ng/src',
    headerConfig: {
      links: [
        { id: 'UC1_ID', text: 'UC1', path: '#/page/todo', icon: 'aris_nav_logo.png', permission: 'PERM_VIEW_UC1' },
        { id: 'UC2_ID', text: 'UC2', path: '#/page/todo', icon: 'aris_nav_logo.png', permission: 'PERM_VIEW_UC2' },
        { id: 'UC3_ID', text: 'UC3', path: '#/page/todo', icon: 'aris_nav_logo.png', permission: 'PERM_VIEW_UC3' }
      ],
      logopath: 'app/common/resources/img/acc-top-navbar.png',
      logoText: [{ text: 'Aris Template', color: 'u-color-cream' }, { text: 'Platform', color: 'u-color-orange' }],
      altText: 'VIS Application',
      template: '',
      UIElements: { All: true },
      visibility: true
    },

    googleAnalytics: {
      disable: false,
      accountId: 'UA-99971998-1',
      applicationId: 'VISAPP'
    }
  };
}
