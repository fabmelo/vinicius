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
  }

  getDataClient(){
    this.feedService.getClient().subscribe(
      (res: any) => {
        this.dataClient = res;
      },
      (error: any) => {
        console.error(error.statusText);
      });
  }

}
