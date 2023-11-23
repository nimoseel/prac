const path = require('path');

module.exports = {
    mode: 'production', // or development
    entry: './src/index.js', // 진입점 설정
    output: { // 번들링 파일이 위치할 path, 파일명 지정
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};