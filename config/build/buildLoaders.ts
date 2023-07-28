import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
 //Если не исопользовать тайпскрипт, то нужно подключить еще babel-loader
 //Typescript уже умеет в React

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader
    ]
}