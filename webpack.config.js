const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

module.exports = [
    {
        mode: process.env.NODE_ENV,
        entry: './src/electron.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: [{ loader: 'ts-loader' }]
                },
                {
                    test: /\.js$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /(node_modules)/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
                {
                    // for css files & typescript interactions
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        '@teamsupercell/typings-for-css-modules-loader',
                        {
                        loader: 'css-loader',
                        options: { modules: true }
                        }
                    ]
                }
            ]
        },
        output: {
            path: path.resolve(__dirname, './dist/'),
            filename: 'electron.js'
        }
    },
    {
        mode: process.env.NODE_ENV,
        entry: './src/react.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use:[{loader: 'ts-loader'}]
                },
                {
                    test: /\.js$/,
                    include: /src/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /(node_modules)/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                    },
                    {
                    // for css files & typescript interactions
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        '@teamsupercell/typings-for-css-modules-loader',
                        {
                        loader: 'css-loader',
                        options: { modules: true }
                        }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/dist/',
            filename: 'react.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
];