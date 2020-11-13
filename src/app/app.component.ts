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
  ) {
  }

  async ngOnInit() {
    await this.getDataClient();
    // await this.getDataFeed(); // Está retornando 405 - Method Not Allowed
    // await this.getDataAuth(); // Está retornando 404 - Not Found
  }

  getDataClient(){
    this.feedService.getClient().subscribe(
      (res: any) => {
        this.dataClient = res;
      },
      (error: any) => {
        console.error(error.statusText);
      }
    );
  }

  getDataFeed(){
    this.feedService.getFeed().subscribe(
      (res: boolean) => {
        console.log("SignIn => ", res);
      },
      (error: any) => {
        console.error(error.statusText);
      }
    );
  }

  getDataAuth(){
    this.feedService.getAuth().subscribe(
      (res: any) => {
        console.log("Auth => ", res);
      },
      (error: any) => {
        console.error(error.statusText);
      }
    );
  }

}
