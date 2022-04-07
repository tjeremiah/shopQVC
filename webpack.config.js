const path = require("path");

module.exports = {
    entry: "./client/main.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
           {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
           }, 
           {
            test: /\.css$/,
            use: [
                 'style-loader',
                 'css-loader'
            ]
          }
        ]
    },
    mode: "development",
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 3000,  
   }  
}