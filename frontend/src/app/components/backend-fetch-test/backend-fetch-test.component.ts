import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

interface user {
  id: number,
  name: string
}

@Component({
  selector: 'app-backend-fetch-test',
  imports: [
    AsyncPipe
  ],
  templateUrl: './backend-fetch-test.component.html',
  styleUrl: './backend-fetch-test.component.scss'
})
export class BackendFetchTestComponent implements OnInit {
  user!: Observable<user>

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.user = this.httpClient.get<user>('api/users')
  }

}
