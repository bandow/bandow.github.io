const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash:5].css",
    disable: process.env.NODE_ENV === "development"
});
const config={
	context: path.resolve(__dirname, './src'),
    entry: {
        app:'./scripts/app.js',
    },
    output:{
        // path: path.resolve(__dirname, './dist'),
        path: path.resolve(__dirname, './'),
        filename: 'scripts/[name]-[chunkhash:5].js',
    },
    module: {
        rules: [
         	{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: [ "html-loader" ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader",
                    publicPath:"../"              //真是个坑。坑死人了
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  'url-loader?limit=3500&name=images/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
    plugins: [
       new htmlWebpackPlugin({
            filename:'index.html',
            template:'views/index.html',
            inject:'body',  //指定js放那个位子 比如body
            chunks:['app'],   //指定那个js
       }),
       
       //转化sass的方法
       extractSass
    ]
}
module.exports=config;