import path from 'path';

export default (env, argv) => {

    return {
        entry: './src/index.js',
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }]
        },
        resolve: {
            extensions: ['.js']
        },
        output: {
            filename: 'task.js',
            path: path.resolve('dist'),
            library: {
                type: 'module'
            },
            module: true,
            chunkFormat: 'module'
        },
        experiments: {
            outputModule: true
        },
        target: 'node20'
    };
};