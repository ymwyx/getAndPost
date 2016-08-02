'use strict'
var request=require('superagent');
request
    .post('localhost:8050/s')
    .type('form')
    //.param({'name':'ym'})
    .send({name:'y,m'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
/**
 * Created by yinmeng on 16-8-2.
 */
