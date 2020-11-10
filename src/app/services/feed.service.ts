import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { retry } from "rxjs/operators";

const URL = "https://5fab0d94dbbef70016d4813a.mockapi.io";

@Injectable(
  { providedIn: 'root' }
)
export class FeedService {

  constructor(private httpClient: HttpClient) {}

  getClient():  Observable<Array<any>>{
    return this.httpClient
        .get<Array<any>>(`${URL}/client`)
        .pipe(retry(2));
  }

}

