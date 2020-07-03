import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players = [
    { 
      img : "https://image.freepik.com/free-vector/robotic-ninja-e-sports-logo-gaming-mascot_71220-46.jpg",
      name : "KGB - Razor",
      rank: "Mestre",
      pts: 240,
      views: 2500,
    },

    { 
      img : "https://image.freepik.com/free-vector/ninja-mascot-esport-gaming-logo_96628-44.jpg",
      name : "Kacson",
      rank: "Sábio",
      pts: 240,
      views: 2500,
    },

    { 
      img : "https://i.pinimg.com/originals/29/16/16/29161609811520dcacd9b29b591d7fbc.png",
      name : "Kacson",
      rank: "Sábio",
      pts: 240,
      views: 2500,
    },

    
  ]

  constructor() { }

  ngOnInit() {
  }

}
