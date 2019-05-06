import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

  users = [
    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },    {
      id:1,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:2,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    },
    {
      id:3,
      name : 'ahmed',
      lastname : 'hakked',
      address:'98  rue La Boétie Île-de-France',
      phone :'+216 216 452'
    }
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
 
  }

  // delete user 
  delete(id){
    console.log(id);
  }

}
