export default {
    "description": "<%= project %> with <%= framework %>",
    "name": "<%= project %>",
    "private": true,
    "version": "0.0.0",
    "scripts": {
        "i": "npm install",
        "preinstall": "yo speedseed:construct",
        "update": "yo speedseed --update=true && npm run i",
        "start": "gulp build.dev --dev",
        "build": "gulp build",
        "build.dev": "gulp build.dev --dev",
        "build.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dev --dev",
        "build.dev.open": "gulp build.dev --dev --open",
        "dist": "gulp build.dist --dist",
        "dist.dev": "gulp build.dist.dev --dev --dist",
        "dist.dev.debug": "node --inspect --debug-brk ./node_modules/gulp/bin/gulp.js build.dist.dev --dev",
        "dist.dev.open": "gulp build.dist.dev --dev --dist --open",
        "gulp": "gulp"
    },
    "dependencies": {
        "babel-plugin-transform-custom-element-classes": "0.1.0",
        "webcomponentsjs": "1.0.2"
    },
    "devDependencies": {
        "@types/browser-sync": "0.0.41",
        "@types/connect-history-api-fallback": "1.3.1",
        "@types/del": "3.0.1",
        "@types/extract-text-webpack-plugin": "3.0.3",
        "@types/gulp": "4.0.5",
        "@types/gulp-htmlmin": "1.3.32",
        "@types/gulp-plumber": "0.0.32",
        "@types/lodash": "4.14.116",
        "@types/node": "10.9.2",
        "@types/run-sequence": "0.0.30",
        "@types/webpack": "4.4.11",
        "browser-sync": "2.24.6",
        "connect-history-api-fallback": "1.5.0",
        "del": "3.0.0",
        "gulp": "3.9.1",
        "gulp-cssmin": "0.2.0",
        "gulp-htmlmin": "4.0.0",
        "gulp-minify-inline": "1.0.0",
        "gulp-modify-file": "1.0.1",
        "gulp-plumber": "1.2.0",
        "lodash": "4.17.10",
        "run-sequence": "2.2.1",
        "ts-node": "7.0.1",
        "tsconfig-paths": "3.5.0",
        "tslint": "5.11.0",
        "typescript": "3.0.1",
        "css-loader": "1.0.0",
        "extract-text-webpack-plugin": "4.0.0-beta.0",
        "html-loader": "0.5.5",
        "modify-file-loader": "1.0.0",
        "proxy-middleware": "0.15.0",
        "pug-html-loader": "1.1.5",
        "raw-loader": "0.5.1",
        "style-loader": "0.22.1",
        "ts-loader": "4.5.0",
        "webpack": "4.17.1",
        "babel-core": "6.26.3",
        "babel-loader": "7.1.5",
        "babel-plugin-transform-decorators-legacy": "1.3.5",
        "babel-preset-es2015": "6.24.1",
        "babel-preset-es2016": "6.24.1",
        "babel-preset-es2017": "6.24.1",
        "babel-preset-stage-0": "6.24.1"
    },
    "engines": {
        "node": ">=8.0.0"
    }
}