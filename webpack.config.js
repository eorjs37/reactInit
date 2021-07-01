const path = require('path');
module.exports = {
    mode : 'development',
    target : ['web', 'es5'],
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
                        presets: [
                            ['@babel/preset-env', {
                                targets :{
                                    browsers : ['> 1% in  KR']
                                },
                                debug: true,
                            }]
                            ,'@babel/preset-react'], //JSX로 만든 코드들을 변환
                    }
                }
            }
        ]
    },

    output: {
        filename: "app.js", // 아웃풋 시킬 파일명
        path: path.join(__dirname,'dist'),  // 아웃풋 할 폴더
    },
    devServer:{
        publicPath: '/dist/', //devServer경로
        hot:true, //화면이 변경 될때 전체 파일 로드 하는게 아니라 한개만 로드
        overlay: true,//에러를 브라우저에 표시
        stats:'errors-only', //에러 표시 기준
        historyApiFallback: true, // 무조건 index.html로 향하도록
    }
}