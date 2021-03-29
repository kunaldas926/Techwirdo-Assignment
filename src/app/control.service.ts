import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor() { }

  company = [
    {
      name: "ram",
      title: "das",
      type: "text"
    },
    {
      name: "ram", //this one will not show as the name is already present
      title: "pal",
      type: "password"
    },
    {
      name: "shivam",
      title: "singh",
      type: "email"
    },
    {
      name: "navin",
      title: "gupta",
      type: "password"
    },
    {
      name: "naman",
      title: "agarwal",
      type: "text"
    },
  ]

  mod_comapny() { //this function is used to filter the static data to remove the redundant data from the json array of objects
    let name_temp = []
    let mod_comp = []
    this.company.forEach(function (item) {
      if (!name_temp.includes(item.name)) {
        mod_comp.push(item)
        name_temp.push(item.name)
      }
    })
    // console.log(mod_comp)
    return mod_comp
  }


  sendData(data) {
    console.log(data)
  }
}
