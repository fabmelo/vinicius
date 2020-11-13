import { FeedService } from './services/feed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dataClient: Array<any>;

  constructor(
    private feedService: FeedService
  ) {}

  async ngOnInit() {
    await this.getDataClient();
    await this.postDatagetSignIn();
    await this.postDataAuth();
    await this.getDataFeed();
  }

  getDataClient(){
    this.feedService.getClient().subscribe(
      (res: any) => {
        this.dataClient = res;
      },
      (error: any) => {
        console.error("ERRO: ", error.statusText);
      }
    );
  }

  postDatagetSignIn(){
    this.feedService.postSignIn().subscribe(
      (res: boolean) => {
        console.log("SignIn => ", res);
      },
      (error: any) => {
        console.error("ERRO: ", error.statusText);
      }
    );
  }

  postDataAuth(){
    this.feedService.postAuth().subscribe(
      (res: any) => {
        console.log("Auth => ", res);
      },
      (error: any) => {
        console.error("ERRO: ", error.statusText);
      }
    );
  }

  getDataFeed(){
    this.feedService.getFeed().subscribe(
      (res: any) => {
        console.log("Feed => ", res);
      },
      (error: any) => {
        console.error("ERRO: ", error.statusText);
      }
    );
  }

}
