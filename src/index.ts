/**
 * @module node-static
 */

import nodestatic from 'node-static';
import http from 'http';
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

let MOD_ID = "node-static"

export interface ModuleContext {
  client?:any;
  consumer_key?: string;
  consumer_secret?: string;
  access_token_key?: string;
  access_token_secret?: string;
}

@RpsModule(MOD_ID)
export default class RPSModule {

  constructor(ctx:RpsContext){
  }

  @rpsAction({verbName:'serve-static'})
  async serverStatic (ctx:RpsContext,opts:Object, publicFolder:string, port?:number) : Promise<http.Server>{
    let file = new nodestatic.Server(publicFolder);
    let p = port || 8080
 
    return http.createServer(function (request, response) {
        request.addListener('end', function () {
            file.serve(request, response);
        }).resume();
    }).listen(p);

  }
}
