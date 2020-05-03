const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Comb = require('csscomb');
const comb = new Comb('zen');

comb.processPath('./src/assets/scss');

const isDev = process.env.NODE_ENV === 'development'; // Check mode

const cssLoaders = loader => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: { sourceMap: true },
        },
        {
            loader: 'css-loader',
            options: { sourceMap: true },
        },
    ];

    if (loader) loaders.push(loader);
    return loaders;
}

const babelOptions = preset => {
    const options = {
        presets: [
            '@babel/preset-env',
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if (preset) options.presets.push(preset);
    return options;
}

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: `[name].css`,
        }),
    ];

    return base;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: [
            '@babel/polyfill',
            './index.js'
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.jpg', '.png'],
        alias: {
            '@Components': path.resolve(__dirname, 'src/Components'),
            '@': path.resolve(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(jpg|svg|png)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            }
        ],
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
}