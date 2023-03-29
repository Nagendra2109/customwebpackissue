export function getMenuConfig(): any {
  const menuConfig = window.app.config.menu || {};

  return {
    ...menuConfig,

    /******************** PARTICULAR CONFIGURATION FOR OUR APPLICATION MENU *************************/
    menu_config: [
      {
        text: 'MENU_HOME',
        link: 'page/home',
        icon: 'fa fa-home fa-lg',
        enabled: true
      },
      {
        text: 'MENU_UC1',
        icon: 'fa fa-caret-down',
        permission: 'PERM_VIEW_UC1',
        subMenuItems: [
          {
            text: 'MENU_DASHBOARD_UC1',
            link: 'page/todo',
            enabled: true
          },
          {
            text: 'MENU_GEOSPATIAL_VIEW',
            link: 'page/geopage',
            enabled: true
          },
          {
            text: 'MENU_SCHEMATIC_VIEW',
            link: 'page/schematicdiag/LA:arislngschematic',
            enabled: true
          }
        ]
      },
      {
        text: 'MENU_UC2',
        icon: 'fa fa-caret-down',
        permission: 'PERM_VIEW_UC2',
        subMenuItems: [
          {
            text: 'MENU_DASHBOARD_UC2',
            link: 'page/todo',
            enabled: true
          },
          {
            text: 'MENU_GEOSPATIAL_VIEW',
            link: 'page/geopage',
            enabled: true
          },
          {
            text: 'MENU_SCHEMATIC_VIEW',
            link: 'page/schematicdiag/LA:arislngschematic',
            enabled: true
          }
        ]
      },
      {
        text: 'MENU_UC3',
        icon: 'fa fa-caret-down',
        permission: 'PERM_VIEW_UC3',
        subMenuItems: [
          {
            text: 'MENU_DASHBOARD_UC3',
            link: 'page/todo',
            enabled: true
          },
          {
            text: 'MENU_GEOSPATIAL_VIEW',
            link: 'page/geopage',
            enabled: true
          },
          {
            text: 'MENU_SCHEMATIC_VIEW',
            link: 'page/schematicdiag/LA:arislngschematic',
            enabled: true
          }
        ]
      },
      {
        text: 'MENU_ADMIN_SETTINGS',
        icon: 'fa fa-caret-down',
        permission: 'ROLE_CEO',
        subMenuItems: [
          {
            text: 'MENU_EMAIL_LIST',
            link: 'page/emaillist',
            enabled: true
          },
          // {
          //   text: 'MENU_DATASOURCE_MAINT',
          //   link: 'page/datasourcemaint',
          //   enabled: true
          // },
          {
            text: 'MENU_LOGGING_INFORMATION',
            link: 'page/logginginformation',
            enabled: true
          },
          {
            text: 'MENU_USER_GROUP_MANAGEMENT',
            link: 'page/usergroupmanagement',
            permission: 'ROLE_ADMIN',
            enabled: true
          },
          {
            text: 'MENU_GLOBAL_PARAMETERS',
            link: 'page/globalparameters',
            permission: 'ROLE_ADMIN',
            enabled: true
          },
          {
            text: 'MENU_AUDIT_LOG',
            link: 'page/auditlog',
            permission: 'ROLE_ADMIN',
            enabled: true
          },
          {
            text: 'MENU_ASSET_CONFIG_DATA',
            link: 'page/assetconfigdata',
            permission: 'ROLE_ADMIN',
            enabled: true
          },
          {
            text: 'MENU_FILE_UPLOAD',
            link: 'page/fileupload',
            permission: 'ROLE_ADMIN',
            enabled: true
          }
        ]
      },
      {
        text: 'MENU_SUPPORT',
        icon: 'fa fa-weixin fa-lg',
        link: 'https://accentureplc.service-now.com/clientportal'
      },
      {
        text: 'MENU_TERMS_OF_USE',
        icon: 'fa fa-handshake-o',
        link: 'page/legalTerms'
      },
      {
        text: 'MENU_DEV_MENU',
        icon: 'fa fa-caret-down',
        permission: 'PERM_VIEW_TEST_PAGES',
        subMenuItems: [
          {
            text: 'MENU_FORM_COMP_GALLERY',
            link: 'page/formcompgallery',
            enabled: true
          },
          {
            text: 'MENU_CHART_GALLERY',
            link: 'page/chartgallery',
            enabled: true
          },
          {
            text: 'MENU_MAIL_TEST',
            link: 'page/arisMailTest',
            enabled: true
          },
          {
            text: 'MENU_CACHE_TEST',
            link: 'page/cacheTest',
            enabled: true
          },
          {
            text: 'MENU_GEO_CHARTS_TEST',
            link: 'page/geopage',
            enabled: true
          },
          {
            text: 'Metadata',
            link: 'page/metadatalog',
            enabled: true
          },
          {
            text: 'MENU_SWAGGER_UI',
            permission: 'ACTIVE_PROFILE_LOCAL',
            link: 'spring/swagger-ui.html',
            enabled: true
          },
          {
            text: 'MENU_SWAGGER_UI',
            permission: 'ACTIVE_PROFILE_DEV',
            link: 'spring/swagger-ui.html',
            enabled: true
          },
          {
            text: 'MENU_ENDPOINTS',
            permission: 'ACTIVE_PROFILE_LOCAL',
            link: 'rest/endpoints/listurlmappings',
            enabled: false
          },
          {
            text: 'MENU_JVM_METRICS',
            link: 'spring/metrics',
            enabled: true
          },
          {
            text: 'MENU_SVG_TEST',
            link: 'page/svgSchematic',
            enabled: true
          }
        ]
      },
      {
        text: 'MENU_LOG_OUT',
        icon: 'glyphicon glyphicon-log-out',
        link: 'logout',
        enabled: true
      },
      {
        text: 'MENU_CLOSE',
        icon: 'fa fa-times-circle-o fa-lg',
        link: 'close',
        enabled: true
      }
    ]
  };
}
