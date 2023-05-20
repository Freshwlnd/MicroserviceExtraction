# SB Admin rewritten in Angular2 and Bootstrap 4

Simple Dashboard Admin App built using Angular 2 and Bootstrap 4

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular2 Theme.

Powered by [StartAngular](http://startangular.com/) & [StrapUI](http://strapui.com/)

##[Demo](http://rawgit.com/start-angular/SB-Admin-BS4-Angular-2/master/dist/prod/)

`SB Admin BS 4 Angular2` provides the following features:

- Allows you to painlessly update the seed tasks of your already existing project.
- Ready to go, statically typed build system using gulp for working with TypeScript.
- Production and development builds.
- Ahead-of-Time compilation support.
- Sample unit tests with Jasmine and Karma including code coverage via istanbul.
- End-to-end tests with Protractor.
- Development server with Livereload.
- Following the best practices for your application’s structure.
- Manager of your type definitions using @types.
- Has autoprefixer and css-lint support.

## How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

In order to start the seed use:

```bash
git clone https://github.com/start-angular/SB-Admin-BS4-Angular-2.git
cd SB-Admin-BS4-Angular-2
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start
# api document for the app
# npm run build.docs

# dev build
npm run build.dev
# prod build
npm run build.prod
# prod build with AoT compilation
npm run build.prod.exp

# dev build of multiple applications (by default the value of --app is "app")
npm start -- --app baz
npm start -- --app foo
npm start -- --app bar
```


### Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

## Environment configuration

If you have different environments and you need to configure them to use different end points, settings, etc. you can use the files `dev.ts` or `prod.ts` in`./tools/env/`. The name of the file is environment you want to use.

The environment can be specified by using:

```bash
npm start -- --config-env ENV_NAME
```

Currently the `ENV_NAME`s are `dev`, `prod`, `staging`, but you can simply add a different file `"ENV_NAME.ts".` file in order to alter extra such environments.

### Directory Structure

```
├── LICENSE
├── README.md
├── gulpfile.ts                <- configuration of the gulp tasks
├── karma.conf.js              <- configuration of the test runner
├── package.json               <- dependencies of the project
├── protractor.conf.js         <- e2e tests configuration
├── src                        <- source code of the application
│   └── client
│       ├── app
│       │   ├── login
│       │   │   ├── login.component.css
│       │   │   ├── login.component.e2e-spec.ts
│       │   │   ├── login.component.html
│       │   │   ├── login.component.spec.ts
│       │   │   ├── login.component.ts
│       │   │   ├── login.module.ts
│       │   │   ├── login.routes.ts
│       │   │   └── index.ts
│       │   ├── dashboard
│       │   │   ├── home
│       │   │   ├── bg-component
│       │   │   ├── blankpage
│       │   │   ├── dashboard.component.css
│       │   │   ├── dashboard.component.e2e-spec.ts
│       │   │   ├── dashboard.component.html
│       │   │   ├── dashboard.component.spec.ts
│       │   │   ├── dashboard.component.ts
│       │   │   ├── dashboard.module.ts
│       │   │   ├── dashboard.routes.ts
│       │   │   └── index.ts
│       │   ├── app.component.html
│       │   ├── app.component.ts
│       │   ├── app.module.ts
│       │   ├── app.routes.ts
│       │   ├── main.ts
│       │   └── shared
│       │       ├── config
│       │       │   └── env.config.ts
│       │       ├── index.ts
│       │       ├── shared.module.ts
│       │       ├── name-list
│       │       │   ├── index.ts
│       │       │   ├── name-list.service.spec.ts
│       │       │   └── name-list.service.ts
│       │       ├── sidebar
│       │       │   ├── index.ts
│       │       │   ├── sidebar.component.html
│       │       │   └── sidebar.component.ts
│       ├── assets
│       │   ├── bootstrao
│       │   └── images
│       │   └── sass
│       ├── testing
│       ├── index.html
│       ├── tsconfig.json
│       └── typings.d.ts
├── test-main.js               <- testing configuration
├── tools
│   ├── README.md              <- build documentation
│   ├── config
│   │   ├── project.config.ts  <- configuration of the specific project
│   │   ├── seed.config.interfaces.ts
│   │   └── seed.config.ts     <- generic configuration of the seed project
│   ├── config.ts              <- exported configuration (merge both seed.config and project.config, project.config overrides seed.config)
│   ├── debug.ts
│   ├── env                    <- environment configuration
│   │   ├── base.ts
│   │   ├── dev.ts
│   │   └── prod.ts
│   ├── manual_typings
│   │   ├── project            <- manual ambient typings for the project
│   │   │   └── sample.package.d.ts
│   │   └── seed               <- seed manual ambient typings
│   │       ├── angular2-hot-loader.d.ts
│   │       ├── autoprefixer.d.ts
│   │       ├── colorguard.d.ts
│   │       ├── connect-livereload.d.ts
│   │       ├── cssnano.d.ts
│   │       ├── doiuse.d.ts
│   │       ├── express-history-api-fallback.d.ts
│   │       ├── istream.d.ts
│   │       ├── karma.d.ts
│   │       ├── merge-stream.d.ts
│   │       ├── open.d.ts
│   │       ├── postcss-reporter.d.ts
│   │       ├── slash.d.ts
│   │       ├── stylelint.d.ts
│   │       ├── systemjs-builder.d.ts
│   │       ├── tildify.d.ts
│   │       ├── tiny-lr.d.ts
│   │       └── walk.d.ts
│   ├── tasks                  <- gulp tasks
│   │   ├── project            <- project specific gulp tasks
│   │   │   └── sample.task.ts
│   │   └── seed               <- seed generic gulp tasks. They can be overriden by the project specific gulp tasks
│   │       ├── build.assets.dev.ts
│   │       ├── build.assets.prod.ts
│   │       ├── build.bundles.app.ts
│   │       ├── build.bundles.ts
│   │       ├── build.docs.ts
│   │       ├── build.html_css.ts
│   │       ├── build.index.dev.ts
│   │       ├── build.index.prod.ts
│   │       ├── build.js.dev.ts
│   │       ├── build.js.e2e.ts
│   │       ├── build.js.prod.ts
│   │       ├── build.js.test.ts
│   │       ├── build.js.tools.ts
│   │       ├── check.versions.ts
│   │       ├── clean.all.ts
│   │       ├── clean.coverage.ts
│   │       ├── clean.dev.ts
│   │       ├── clean.prod.ts
│   │       ├── clean.tools.ts
│   │       ├── copy.js.prod.ts
│   │       ├── css-lint.ts
│   │       ├── e2e.ts
│   │       ├── generate.manifest.ts
│   │       ├── karma.start.ts
│   │       ├── serve.coverage.ts
│   │       ├── serve.docs.ts
│   │       ├── server.prod.ts
│   │       ├── server.start.ts
│   │       ├── tslint.ts
│   │       ├── watch.dev.ts
│   │       ├── watch.e2e.ts
│   │       ├── watch.test.ts
│   │       └── webdriver.ts
│   ├── utils                  <- build utils
│   │   ├── project            <- project specific gulp utils
│   │   │   └── sample_util.ts
│   │   ├── project.utils.ts
│   │   ├── seed               <- seed specific gulp utils
│   │   │   ├── clean.ts
│   │   │   ├── code_change_tools.ts
│   │   │   ├── server.ts
│   │   │   ├── tasks_tools.ts
│   │   │   ├── template_locals.ts
│   │   │   ├── tsproject.ts
│   │   │   └── watch.ts
│   │   └── seed.utils.ts
│   └── utils.ts
├── tsconfig.json              <- configuration of the typescript project (ts-node, which runs the tasks defined in gulpfile.ts)
├── tslint.json                <- tslint configuration
├── typings                    <- typings directory. Contains all the external typing definitions defined with typings
├── typings.json
└── appveyor.yml
```

### 错误排查

* 尝试使用了多种版本的node（如`20.1.0`、`6.10.3`、`4.2.3`等）

  * 太高的版本报错:
```
...
node_modules/natives/index.js:143
    fn(internalBinding)(nm.exports, cachingRequire, nm, nm.filename, '<no dirname available>')
                       ^
ReferenceError: primordials is not defined
...
```

  * 太低的版本报错:
```
npm ERR! Linux 3.10.0-957.el7.x86_64
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install"
npm ERR! node v6.10.3
npm ERR! npm  v3.10.10
npm ERR! path /home/node_modules/.staging/@types/mime-993131a2/package.json
npm ERR! code ENOTDIR
npm ERR! errno -20
npm ERR! syscall open

npm ERR! ENOTDIR: not a directory, open '/home/node_modules/.staging/@types/mime-993131a2/package.json'
```

    * 主要基于低版本进行debug（考虑到适配开发时的环境），针对性排除错误后发现是@type/express包所导致的，但更换了多种版本后仍然失败。
    * 最终灵光一现（在进行了数天的排错后），尝试把node适当升级，参考[node-npm版本对应关系](https://nodejs.org/zh-cn/download/releases)，最终找到了合适的node版本：。

* 目前已新增镜像打包脚本，避免未来重复遇到该问题。