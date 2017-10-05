
import { convertSettings } from './convert_settings';
import kibanaSettings from './kibana_settings.json';

// let kibanaConfigService;
let kibanaConfigService = {};

export const configService = {
  init(config) {
    kibanaConfigService = config;
  },

  loadSettings() {
    if (!kibanaConfigService) {
      const error =
`Before calling loadSettings, you must call init and pass
it an instance of the Kibana config service.`;
      throw new Error(error);
    }

    //const kibanaSettings = kibanaConfigService.getAll();
    const settings = convertSettings(kibanaSettings);

    return settings;
  }
};
