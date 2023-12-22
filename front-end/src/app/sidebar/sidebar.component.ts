import { Component, OnInit } from '@angular/core';


export type menuItem = {
  icon: string,
  name: string,
  route:any
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuList:menuItem[] =     
    [
      {"icon":"menu","name":"FirstName",route:""},
      {"icon":"analytics","name":"Analytics",route:""},
      {"icon":"person","name":"Users",route:""}
    ]
  


  constructor() { }

  ngOnInit(): void {
  }

}
