const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'] //Loaders para procesar archivos css
            },
            {
                test: /\.js$/, // Regex para identificar archivos js
                exclude: /node_modules/, //Excluir la carpeta node modules
                use: {
                    loader: 'babel-loader', //Loader para hacer compatible js modernos
                    options:{
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map', //Genera source map para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, //Habilitar comprensión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};