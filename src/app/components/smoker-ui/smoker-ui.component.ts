import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-smoker-ui',
  templateUrl: './smoker-ui.component.html',
  styleUrls: ['./smoker-ui.component.scss']
})
export class SmokerUiComponent implements OnInit {
  smoker_name:string = 'David';
  smoked = this.getInfo();
  
  constructor(private titleService: Title,
    private http:HttpClient) {}
  ngOnInit() {
    this.titleService.setTitle('Smokoff | Dashboard');
    this.getInfo();
  }

  public getInfo(){
    return this.http.get('http://postman-echo.com/get')
  }

}
