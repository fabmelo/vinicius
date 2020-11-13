import { UtilService } from './util.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, retry } from "rxjs/operators";

const URL = "https://5fab0d94dbbef70016d4813a.mockapi.io";
const URLFeed = "http://webfeeder.cedrotech.com";
const LOGIN = "viniciusmcruvinel";
const PASSWORD = "102030";

@Injectable(
  { providedIn: 'root' }
)
export class FeedService {

  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService
  ) {
    this.headers.append('login', LOGIN);
    this.headers.append('password', PASSWORD);
  }

  getClient():  Observable<Array<any>>{
    return this.httpClient
        .get<Array<any>>(`${URL}/client`)
        .pipe(retry(1), catchError(error => this.utilService.handleError(error)));
  }

  getSignIn(): Observable<boolean>{
    return this.httpClient
      .get<boolean>(`${URLFeed}/SignIn`)
      .pipe(retry(1), catchError(error => this.utilService.handleError(error)));
  }

  getAuth(): Observable<any>{
    return this.httpClient
      .get<any>(`${URLFeed}/token/authentication?login=${LOGIN}&password=${PASSWORD}`)
      .pipe(retry(1), catchError(error => this.utilService.handleError(error)));
  }

}

