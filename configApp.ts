
import { getApplicationConfig } from 'src/app/config/application';
import { getChartsConfig } from 'src/app/config/charts';
import { getFooterTypesConfig } from 'src/app/config/footerTypes';
import { getHeaderTypesConfig } from 'src/app/config/headerTypes';
import { getLoginConfig } from 'src/app/config/login';
import { getMenuConfig } from 'src/app/config/menu';
import { getPlatformConfig } from 'src/app/config/platform';

import { getBreadCrumConfig } from 'src/app/config/breadCrumbs';
import { getTilesConfig } from 'src/app/config/tiles';
import { getRestrictedCharacters } from 'src/app/config/restrictedCharacters';

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