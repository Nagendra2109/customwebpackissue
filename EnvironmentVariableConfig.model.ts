export interface EnvironmentVariableConfig {
    activeSpringProfile: string;
    activeUIEnv: string;
    dpRedirectURL: string;
    matomoHost: string;
    liveAnalysisUrl: string;
    dpVideoBlobURL: string;
    petrolyticsNavUrl: string;
    cpgNavUrl: string;
    iMomNavUrl: string;
    msalAuthorityURL: string;
    dpDemoScriptBlobURL: string;
    districtHeatDemoNavURL: string;
    wellManagementNavUrl: string;
    accentureADConfig: {
      tenantId: string;
      clientId: string;
      redirectUri: string;
      expireOffsetSeconds: number;
    };
    dpADConfig: {
      tenantId: string;
      clientId: string;
      redirectUri: string;
      expireOffsetSeconds: number;
    };
    osiPIConfig: {
      condenserURL: string;
      throughputURL: string;
      access_spills_response_url: string;
      access_jet_engine_response_url: string;
      districtHeatDemoNavURL: string;
    };
    singleSPA: {
      commonScripts: string[];
      apps: [
        {
          appName: string;
          bindURL: string;
          targetURL: string;
        }
      ];
    };
  }
  