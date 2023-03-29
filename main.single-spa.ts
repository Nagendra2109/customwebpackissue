import 'zone.js/dist/zone';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

import { registerApplication, start } from 'single-spa';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppModule } from 'src/app/app.module';
import { environment } from 'src/environments/environment';

import { singleSpaPropsSubject } from 'single-spa-props';
import { getAppLocalConfiguration } from 'configApp';
import { EnvironmentVariableConfig } from 'EnvironmentVariableConfig.model';

if (environment.production) {
  enableProdMode();
}

declare global {
  interface Window {
    app: any;
    System: any;
    environmentVariableConfig: EnvironmentVariableConfig;
  }
}
window.app = window.app || { config: {} };
window.System = window.System || {};
window.environmentVariableConfig = window.environmentVariableConfig || ({} as EnvironmentVariableConfig);

getAppLocalConfiguration();

/** load single-spa apps start **/
let loadedScriptCount: number = 0;

loadConfigApp();

function loadConfigApp() {
  fetch('./app/common/appConfig/environment-variable-config.json', { method: 'get' }).then((response) => {
    response.json().then((config: EnvironmentVariableConfig) => {
      window.environmentVariableConfig = config;
      config.singleSPA.commonScripts.forEach((key) => {
        loadSpaScripts(key);
      });
      platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .catch((err) => {
          if (window.environmentVariableConfig.activeUIEnv != 'prod') {
            console.log(err);
          }
        });
    });
  });
}

function loadSpaScripts(src:any) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
  script.onload = () => {
    checkIfSpaScriptsLoaded();
  };
}

function checkIfSpaScriptsLoaded() {
  if (++loadedScriptCount === window.environmentVariableConfig.singleSPA.commonScripts.length) {
    console.log('single-spa scripts are loaded.');
    registerApps();
  }
}

function registerApps() {
  window.environmentVariableConfig.singleSPA.apps.forEach((appInfo) => {
    registerApplication(
      appInfo.appName,
      () => {
        console.log('single-spa app is called.');
        return window.System.import(appInfo.targetURL);
      },
      (location) => {
        return location.pathname.startsWith(appInfo.bindURL);
      }
    );

    console.log('single-spa apps are registered.');
    start();
  });
}
/** load single-spa apps end **/

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root/>',
  Router,
  NgZone
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
