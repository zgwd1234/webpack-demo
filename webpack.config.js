const { resolve} = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    entry:"",//默认index.js
    output:{
        filename:"main.js",//默认main.js
        path:resolve(__dirname,"dist") //
    },
    //loader 让webpack去处理那些非js文件
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    "style-loader",//创建一个标签，将js中的css样式字符串，加入到head中的style标签中
                    "css-loader"  //将css文件以字符串的形式加载到js中 执行顺序从下往上，从右往左
                ]
            },
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            }
        ],
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"  //指定生成的html文件，以该文件为模板
        })
    ],
    mode:"development",
    devServer:{
        port:8080
    }
   

}