const path = require('path');
module.exports = {
    mode : 'development',
    resolve:{ //확장자를 설정함으로써 웹팩이 알아서 해석하도록 세팅
        extensions :['.js','.jsx']
    },
    entry :{
        app : ['./src/index'] //최종 엔트리(시작점) 파일 
    },

    module:{
        rules: [
            {
                test: /\.jsx$/, //로딩할 파일 지정
                exclude: path.join(__dirname,'node_modules'), //로더할 필요 없는 것
                use:{
                    loader : "babel-loader",
                    options:{
                        presets: ["@babel/preset-env",'@babel/preset-react'],
                    }
                }
            }
        ]
    },

    output: {
        filename: "app.js", // 아웃풋 시킬 파일명
        path: path.join(__dirname,'dist'),  // 아웃풋 할 폴더
    },
}