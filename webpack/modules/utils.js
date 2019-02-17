// Plugins
import { HotModuleReplacementPlugin } from 'webpack';

export const setupHotModuleReplacement = () => ({
    plugins: [new HotModuleReplacementPlugin()],
});

