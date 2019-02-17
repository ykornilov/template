// Paths
import { source } from '../paths';

// PostCSS plugins
import imports from 'postcss-import';

export const loadPostCSS = () => ({
    loader:  'postcss-loader',
    options: {
        ident:   'postcss',
        plugins: () => {
            return [
                imports({
                    getPath:        source,
                    skipDuplicates: true,
                })
            ];
        },
        sourceMap: true,
    },
});

export const loadDevelopmentCss = () => ({
    module: {
        rules: [
            {
                test:    /\.css$/,
                include: [source, /node_modules/],
                use:     [
                    {
                        loader:  'style-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader:  'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    loadPostCSS()
                ],
            }
        ],
    },
});
