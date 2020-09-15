import { DataService } from './../../service/httpcall';
import { Component, OnInit } from '@angular/core';
import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private dataservice: DataService) { }
  post: any;

  ngOnInit() {
    this.dataservice.getRestApiData().subscribe(data => {
      this.post = data;
      console.log('This is daa', data);
    });
  }

}
