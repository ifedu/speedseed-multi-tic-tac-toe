export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",
    "scripts": {
        "i": "npm install",
        "preinstall": "yo speedseed:construct",
        "update": "yo speedseed --update=true",
        "start": "gulp build.dev --dev",
        "build": "gulp build",
        "build.dev": "gulp build.dev --dev",
        "build.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dev --dev",
        "build.dev.open": "gulp build.dev --dev --open",
        "dist": "gulp build.dist --dist",
        "dist.dev": "gulp build.dist.dev --dev --dist",
        "dist.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dist.dev --dev",
        "dist.dev.open": "gulp build.dist.dev --dev --dist --open",
        "gulp": "gulp",
        "test": "gulp test --spec",
        "test.dev": "gulp test.dev --dev --spec"
    },
    "dependencies": {
        "react": "16.0.0",
        "react-dom": "16.0.0"
    },
    "devDependencies": {
        "@types/browser-sync": "0.0.37",
        "@types/connect-history-api-fallback": "1.3.1",
        "@types/del": "3.0.0",
        "@types/extract-text-webpack-plugin": "3.0.0",
        "@types/gulp": "4.0.5",
        "@types/gulp-htmlmin": "1.3.31",
        "@types/gulp-plumber": "0.0.32",
        "@types/lodash": "4.14.85",
        "@types/node": "8.0.53",
        "@types/run-sequence": "0.0.30",
        "@types/webpack": "3.8.1",
        "browser-sync": "2.18.13",
        "connect-history-api-fallback": "1.5.0",
        "del": "3.0.0",
        "gulp": "3.9.1",
        "gulp-cssmin": "0.2.0",
        "gulp-htmlmin": "3.0.0",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.0",
        "gulp-plumber": "1.1.0",
        "http-proxy-middleware": "0.17.4",
        "lodash": "4.17.4",
        "run-sequence": "2.2.0",
        "ts-node": "3.3.0",
        "tsconfig-paths": "2.4.0",
        "tslint": "5.8.0",
        "typescript": "2.6.1",
        "css-loader": "0.28.7",
        "extract-text-webpack-plugin": "3.0.2",
        "html-loader": "0.5.1",
        "modify-file-loader": "1.0.0",
        "pug-html-loader": "1.1.5",
        "raw-loader": "0.5.1",
        "style-loader": "0.19.0",
        "ts-loader": "3.1.1",
        "webpack": "3.8.1",
        "babel-preset-react": "6.24.1",
        "babel-core": "6.26.0",
        "babel-loader": "7.1.2",
        "babel-plugin-transform-decorators-legacy": "1.3.4",
        "babel-preset-es2015": "6.24.1",
        "babel-preset-es2016": "6.24.1",
        "babel-preset-es2017": "6.24.1",
        "babel-preset-stage-0": "6.24.1",
        "node-sass": "4.7.2",
        "sass-loader": "6.0.6",
        "@types/jasmine": "2.8.2",
        "@types/karma": "1.7.2",
        "jasmine": "2.8.0",
        "karma": "1.7.1",
        "karma-chrome-launcher": "2.2.0",
        "karma-coverage": "1.1.1",
        "karma-jasmine": "1.1.0",
        "karma-phantomjs-launcher": "1.0.4",
        "phantomjs-prebuilt": "2.1.16"
    },
    "engines": {
        "node": ">=6.0.0"
    }
}