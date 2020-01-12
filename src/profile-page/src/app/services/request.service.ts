import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RequestService {
    constructor(private http: HttpClient) { }

    getData(getUrl: string) {
        return this.http.get(getUrl);
    }
}