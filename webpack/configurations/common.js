// Paths
import { source, build } from '../paths';

// Webpack modules
import {
    loadJavaScript,
    loadFonts,
    loadImages,
    setupHtml
} from '../modules';

// Instruments
import merge from 'webpack-merge';

export const generateCommonConfiguration = () => {
    return merge(
        // Loaders
        loadJavaScript(),
        loadFonts(),
        loadImages(),

        // Plugins
        setupHtml(),
        {
            entry: {
                source,
            },
            output: {
                path:       build,
                publicPath: '/',
            },
            resolve: {
                extensions: ['.mjs', '.js', '.json', '.css', '.png', '.jpg'],
                modules:    [source, 'node_modules'],
            }
        }
    );
};
