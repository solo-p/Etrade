/**
 * Created by Solomon on 9/28/2020.
 */
var etrade = require('./lib/etrade');

var configuration = {
    useSandbox : true|false, //true if not provided

    key : 'CounsumerKey',
    secret : 'ConsumerSecret',
    verboseLogging : true|false //true if not provided


}

var et = new etrade(configuration);