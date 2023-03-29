import { getApplicationConfig } from './application';
import { getChartsConfig } from './charts';
import { getFooterTypesConfig } from './footerTypes';
import { getHeaderTypesConfig } from './headerTypes';
import { getLoginConfig } from './login';
import { getMenuConfig } from './menu';
import { getPlatformConfig } from './platform';

import { getBreadCrumConfig } from './breadCrumbs';
import { getTilesConfig } from './tiles';
import { getRestrictedCharacters } from './restrictedCharacters';

export function getAppLocalConfiguration(): any {
  console.log('Executing getAppLocalConfiguration');

  // Get App Configuration
  window.app.config.application = getApplicationConfig();
  window.app.config.footerTypes = getFooterTypesConfig();
  window.app.config.headerTypes = getHeaderTypesConfig();
  window.app.config.menu = getMenuConfig();
  window.app.config.chartsConfig = getChartsConfig();
  window.app.config.platform = getPlatformConfig();
  window.app.config.login = getLoginConfig();
  window.app.config.tiles = getTilesConfig();
  window.app.config.restrictedCharacters = getRestrictedCharacters();
  window.app.config.breadCrumConfig = getBreadCrumConfig();
}
