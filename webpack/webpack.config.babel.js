// Presets
import { generateDevelopmentConfiguration } from './configurations';

// Instruments
import openBrowser from 'react-dev-utils/openBrowser';

export default () => {
    setImmediate(() => openBrowser('http://localhost:3000'));

    return generateDevelopmentConfiguration();
};
