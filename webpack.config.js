const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',


    // webpack 4では、エントリーポイントを指定しなければ自動的に「src/index.js」がエントリーポイントに、
    // 出力先を指定しなければ自動的に「dist/main.js」に出力されます。
    entry: `${__dirname}/src/main/node/src/index.js`,
    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/src/main/resources/static`,
        // 出力ファイル名
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.tag.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'riot-tag-loader',
                    options: {
                        hot: true,
                        type: 'es6'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // 対象となるファイルの拡張子(scss)
                test: /\.scss$/,
                // Sassファイルの読み込みとコンパイル
                use: ExtractTextPlugin.extract([
                    // CSSをバンドルするための機能
                    {
                        loader: 'css-loader',
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込まない
                            url: false,
                            // ソースマップの利用有無
                            sourceMap: true,
                            // 空白文字を取り除く
                            minimize: true,
                            // Sass+PostCSSの場合は2を指定
                            importLoaders: 2
                        },
                    },
                    // PostCSSのための設定
                    {
                        loader: 'postcss-loader',
                        options: {
                            // PostCSS側でもソースマップを有効にする
                            sourceMap: true,
                            // ベンダープレフィックスを自動付与する
                            plugins: () => [require('autoprefixer')]
                    },
            },
            // Sassをバンドルするための機能
            {
                loader: 'sass-loader',
                options: {
                    // ソースマップの利用有無
                    sourceMap: true,
                }
            }
        ]),
},
],
},
plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
        riot: 'riot',
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
],
    // source-map方式でないと、CSSの元ソースが追跡できないため
    //devtool: "source-map"
};