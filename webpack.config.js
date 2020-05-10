const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const isDev = process.env.NODE_ENV === 'development'; // Check mode

const cssLoaders = loader => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                sourceMap: true
            },
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    autoprefixer()
                ],
                sourceMap: true
            },
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
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src/assets/icons/favicon.ico'),
                to: path.resolve(__dirname, 'dist'),
            }
        ]),
    ];

    return base;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: [
            '@babel/polyfill',
            './index.js',
            './assets/scss/style.sass',
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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 4200,
        hot: isDev,
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
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(jp?g|png|gif|ico)$/,
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
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            extract: true,
                            spriteFilename: './icons/icons.svg',
                            symbolId: filePath => 'icon-' + path.basename(filePath).split('.')[0]
                        }
                    },
                    {
                        loader: 'svgo-loader',
                        options: {
                            plugins: [
                                {convertColors: {currentColor: true}},
                                {removeAttrs: {attrs: '(opacity)'}}
                            ]
                        }
                    },
                ]
            },
        ],
    },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
}