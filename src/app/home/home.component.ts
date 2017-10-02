import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imagesRef = '';
    ipv4 = '';
    posts: any[] = [
        {
            id: 1, image: 'assets/images/thumb1.svg',
            title: 'Automatização de Investimentos na bolsa de valores',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus consequat, dolor eget faucibus ullamcorper, sem massa auctor neque, eleifend ultrices erat nulla consequat metus. Pellentesque eu interdum nisl. Vivamus faucibus turpis quis velit fringilla, sed placerat urna cursus. Aliquam sapien orci, mattis et tincidunt eu, fermentum a massa. Maecenas sit amet justo pulvinar orci bibendum interdum. Aliquam lectus nunc, tincidunt vitae lectus ut, eleifend mollis arcu. In mollis sodales libero.
      Donec imperdiet arcu ante, vel tempor ante sodales at. Curabitur
      sed lacinia orci. Integer tempus mi in nisl ullamcorper, id accumsan
      risus malesuada. Sed viverra velit congue purus finibus tempor.
      Pellentesque non tempus tellus, vitae vehicula arcu. Praesent euismod
       dictum imperdiet. Aliquam erat volutpat. Fusce iaculis quam sem,
       scelerisque blandit ipsum dictum non. Donec mollis lorem nec
       tristique fringilla.`
        },
        {
            id: 2, image: 'assets/images/thumb1.svg',
            title: 'Automatização de Investimentos na bolsa de valores',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus consequat, dolor eget faucibus ullamcorper, sem massa auctor neque, eleifend ultrices erat nulla consequat metus. Pellentesque eu interdum nisl. Vivamus faucibus turpis quis velit fringilla, sed placerat urna cursus. Aliquam sapien orci, mattis et tincidunt eu, fermentum a massa. Maecenas sit amet justo pulvinar orci bibendum interdum. Aliquam lectus nunc, tincidunt vitae lectus ut, eleifend mollis arcu. In mollis sodales libero.
      Donec imperdiet arcu ante, vel tempor ante sodales at. Curabitur
      sed lacinia orci. Integer tempus mi in nisl ullamcorper, id accumsan
      risus malesuada. Sed viverra velit congue purus finibus tempor.
      Pellentesque non tempus tellus, vitae vehicula arcu. Praesent euismod
       dictum imperdiet. Aliquam erat volutpat. Fusce iaculis quam sem,
       scelerisque blandit ipsum dictum non. Donec mollis lorem nec
       tristique fringilla.`
        },
        {
            id: 3, image: 'assets/images/thumb1.svg',
            title: 'Automatização de Investimentos na bolsa de valores',
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus consequat, dolor eget faucibus ullamcorper, sem massa auctor neque, eleifend ultrices erat nulla consequat metus. Pellentesque eu interdum nisl. Vivamus faucibus turpis quis velit fringilla, sed placerat urna cursus. Aliquam sapien orci, mattis et tincidunt eu, fermentum a massa. Maecenas sit amet justo pulvinar orci bibendum interdum. Aliquam lectus nunc, tincidunt vitae lectus ut, eleifend mollis arcu. In mollis sodales libero.
      Donec imperdiet arcu ante, vel tempor ante sodales at. Curabitur
      sed lacinia orci. Integer tempus mi in nisl ullamcorper, id accumsan
      risus malesuada. Sed viverra velit congue purus finibus tempor.
      Pellentesque non tempus tellus, vitae vehicula arcu. Praesent euismod
       dictum imperdiet. Aliquam erat volutpat. Fusce iaculis quam sem,
       scelerisque blandit ipsum dictum non. Donec mollis lorem nec
       tristique fringilla.`
        }
    ];

    constructor(private angularFire: AngularFireDatabase,
                private jsonp: Jsonp) {
    }

    ngOnInit() {
        this.getIpv4()
    }

    getIpv4() {
        this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
            .map(response => response.json())
            .subscribe(data => {
               this.ipv4 = data['ip']
            });
    }

    saveLead(name, email, lastname) {
        this.angularFire.list("leads").push({
            name: name,
            lastname: lastname,
            email: email,
            ipv4: this.ipv4
        }).then(newLead => {
            console.log(newLead.key);
            console.log(newLead)
        }, error => {
            console.log(error.message);
        });
    }
}
