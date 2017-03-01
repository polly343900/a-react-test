'use strict';

const app = require('koa')();
const bodyparser = require('koa-bodyparser');
const port =  7878;

app.use(function *(next){
    this.set('Access-Control-Allow-Origin', 'http://localhost:8000');
    this.set('Access-Control-Allow-Credentials', true);
    this.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    this.set('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')

    if (this.method === 'OPTIONS') {
        this.status = 204;
    } else {
        yield next;
    }
});

app.use(bodyparser());

app.use(function*(next) {
    try {
        yield next;
    } catch (e) {
        console.log(e);
        this.body = e;
    }
});

app.use(function*() {
    let moduleName = this.query.apiName || this.request.body.apiName;
    if (moduleName) {
        let modulePath = './mock/' + moduleName;
        require.cache[require.resolve(modulePath)] && delete require.cache[require.resolve(modulePath)];
        let _method = require(modulePath);
        let data = _method(this.query.apiName ? this.query : this.request.body);
        this.body = data;
    }
});

app.listen(port, function() {
    console.log('sys running');
});
