import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  displayMenu(event:any){
    var element = document.getElementById("display-menu-div");
    if(element != null){
      if(event.currentTarget.checked){
        element.style.display = 'block';
        this.checked = true;
      }else{
        element.style.display = 'none';
        this.checked = false;
      }
    }
  }
  displayMenuOnImage(){
    var element = document.getElementById("display-menu-div");
    if(element != null){
      console.log(element);
      if(this.checked){
        element.style.display = 'block';
      }else{
        element.style.display = 'none';
      }
    }
  }
  
}
