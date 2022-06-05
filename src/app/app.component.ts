import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Title = "SwitchCase lession";
color = 'blue';
Users = ['Gurinder','Inder','Jass','Harry','Preet'];
Students = [{name:'Gurinder',Country : 'India'},{name:'Inder',Country : 'Canada'},{name:'Preet',Country : 'USA'}]
}
