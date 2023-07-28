import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
 //Если не исопользовать тайпскрипт, то нужно подключить еще babel-loader
 //Typescript уже умеет в React

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const styleLoaders =
    {
        test: /\.s[ac]ss$/i,
            use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
    }


    return [
        typescriptLoader, styleLoaders
    ]
}