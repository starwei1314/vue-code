const path=require('path')
//引入webpack
const webpack=require("webpack")//启用热更新的第二步
//引入插件的模块
const HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
    //配置入口文件和输出的文件
    entry:path.join(__dirname,"./src/main.js"),//这里需要写的是webpack需要打包的文件
    output:{
        //输出文件的相关配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件名,需要输出到那个文件夹之中
        filename:"bundle.js"//
    },
    devServer:{
        //这是配置dev-server命令参数的第二种形式
        open:true,//自动在浏览器端打开
        port:3000, //在3000端口打开
        contentBase:"src",//指定托管的根目录
        hot:true//启用热更新的第一步
    },
    plugins:[
        //配置插件的节点
        //创建一个新的实例对象
        new webpack.HotModuleReplacementPlugin(),//启用热更新的第三步
        //安装插件
        //如果不传入任何配置选项,默认也会创建一个index.html文件托管在服务器的根路径中
        //只不过这个HTML是空的,title默认的是webpack app  需要自己重新设置
        new HtmlWebpackPlugin({
            title:"有些人走着走着就散了",//如果模板中有title的设置就会覆盖着里的配置
            template:'./src/index.html'
        })

    ],
    module:{
        rules:[
            {test:/\.css/,use:["style-loader","css-loader"]},
            {test:/\.less/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.scss/,use:["style-loader","css-loader","sass-loader"]},
            //加载图片  字体图标时设置匹配规则
            {test:/\.(png|jpg|gif|bmp|jpeg)$/,use:[
                {loader:"url-loader",
                options:{
                    limit:81920
            }
                
                }
            ]},
            {test:/\.(eto|svg|ttf|woff|woff2)$/,use:[
                {loader:"url-loader"}
            ]}
        ]
    },
    mode:'development'
}