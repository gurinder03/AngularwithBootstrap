import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Title = "ngFor lession";
color = 'blue';
Users = ['Gurinder','Inder','Jass','Harry','Preet'];
Students = [
  { EmployeeID:'001', EmpDetail : 
  [
    {Name : 'Gurinder'}, {Country : 'India'},{Mobile : '7382368712'},
    {City : 'Chandigarh'},{PinCode : '140140'},
    
    {Education : 'BCA'}
  ]},
  {EmployeeID:'002', EmpDetail : 
  [
    {Name : 'Harry'},{Country : 'USA'},{Mobile : '5656467465'},
    {City : 'San Franco'},{PinCode : '05552'},{Education : 'M.Tech'}
  ]},
  {EmployeeID:'003', EmpDetail : 
  [
    {Name : 'Mr. Paul'},{Country : 'Canada'},{Mobile : '978868777'},
    {City : 'Brampton'},{PinCode : '75775'},{Education : 'MSC IT'}
  ]},
]
}
