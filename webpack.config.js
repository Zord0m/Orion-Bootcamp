const path = require('path');

module.exports = {
    entry: './src/index.ts',  // Ponto de entrada do TypeScript (index.ts)
    module: {
        rules: [
            {
                test: /\.ts$/,  // Aplica a regra a arquivos .ts
                use: 'ts-loader',  // Usa ts-loader para compilar
                exclude: /node_modules/,  // Ignora a pasta node_modules
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],  // Resolve tanto arquivos .ts quanto .js
    },
    output: {
        filename: 'bundle.js',  // Arquivo de saída final
        path: path.resolve(__dirname, 'dist'),  // Diretório onde o bundle será salvo
    },
};
