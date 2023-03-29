export function getBreadCrumConfig() {
  return {
    '/page/geopage': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_GEOSPATIAL_VIEW',
        href: '/page/geopage'
      }
    ],
    '/page/schematicdiag/LA:arislngschematic': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_SCHEMATIC_VIEW',
        href: '/page/schematicdiag/LA:arislngschematic'
      }
    ],
    '/page/schematicdiag/LA:powerunit': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_SCHEMATIC_VIEW_1',
        href: '/page/schematicdiag/LA:arislngschematic'
      },
      {
        linkName: 'MENU_SCHEMATIC_VIEW_2',
        href: '/page/schematicdiag/LA:powerunit'
      }
    ],
    '/page/dt/predictivemodelconfiguration': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_PREDICTIVE_MODEL_UPLOAD',
        href: '/page/dt/predictivemodelconfiguration'
      }
    ],
    '/page/dt/predictivemodel/upload': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_PREDICTIVE_MODEL_UPLOAD',
        href: '/page/dt/predictivemodelconfiguration'
      },
      {
        linkName: 'MODEL_UPLOAD_TITLE',
        href: '/page/dt/predictivemodel/upload'
      }
    ],
    '/page/dt/predictivemodelconfiguration/edit': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_PREDICTIVE_MODEL_UPLOAD',
        href: '/page/dt/predictivemodelconfiguration'
      },
      {
        linkName: 'PREDICTIVE_MODEL_CONFIGURATION_UPLOAD_TITLE',
        href: '/page/dt/predictivemodelconfiguration/edit'
      }
    ],
    '/page/dt/setting/management': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_SETTINGS',
        href: '/page/dt/setting/management'
      }
    ],
    '/page/dt/setting/configuration': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_SETTINGS',
        href: '/page/dt/setting/management'
      },
      {
        linkName: 'CONFIGURE_NEW_SETTINGS_PAGE_TITLE',
        href: '/page/dt/setting/configuration'
      }
    ],
    '/page/dt/agent/management': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_AGENTS',
        href: '/page/dt/agent/management'
      }
    ],
    '/page/dt/agent/configuration': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_AGENTS',
        href: '/page/dt/agent/management'
      },
      {
        linkName: 'AGENT_CONFIG_TITLE',
        href: '/page/dt/agent/configuration'
      }
    ],
    '/page/dt/agent/configuration/**': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_AGENTS',
        href: '/page/dt/agent/management'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_AGENTS_ADD_AND_EDIT',
        href: '/page/dt/agent/configuration/**'
      }
    ],
    '/page/dt/processflow/management': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_PROCESS_FLOW',
        href: '/page/dt/processflow/management'
      }
    ],
    '/page/dt/processflow/configuration': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_PROCESS_FLOW',
        href: '/page/dt/processflow/management'
      },
      {
        linkName: 'CONFIGURE_PROCESS_FLOW',
        href: '/page/dt/processflow/configuration'
      }
    ],
    '/page/dt/processflow/configuration/**': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_PROCESS_FLOW',
        href: '/page/dt/processflow/management'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_CONFIGURE_PROCESS_ADD_AND_EDIT',
        href: '/page/dt/processflow/configuration/**'
      }
    ],
    '/page/dt/simulation/management': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_MANAGE_SIMULATIONS',
        href: '/page/dt/simulation/management'
      }
    ],
    '/page/dt/simulation/run': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_MANAGE_SIMULATIONS',
        href: '/page/dt/simulation/management'
      },
      {
        linkName: 'RUN_SIMULATION',
        href: '/page/dt/simulation/run'
      }
    ],
    '/page/dt/simulation/**': [
      {
        linkName: 'MENU_HOME',
        href: '/page/home'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_MANAGE_SIMULATIONS',
        href: '/page/dt/simulation/management'
      },
      {
        linkName: 'MENU_DIGITAL_TWIN_MANAGE_SIMULATIONS_RESULTS',
        href: '/page/dt/simulation/**'
      }
    ]
  };
}
