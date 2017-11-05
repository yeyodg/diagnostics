import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

}
