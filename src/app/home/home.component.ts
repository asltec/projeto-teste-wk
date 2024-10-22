import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuItem } from './models/menu.model';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  menuItems: MenuItem[] = [
    {
      label: "Home",
      icon: "",
      routerLink: '/home'
    },
    {
      label: "Clientes",
      icon: "",
      routerLink: '/clientes'
    },
    {
      label: "Produtos",
      icon: "",
      routerLink: '/produtos'
    },
    {
      label: "Pedidos",
      icon: "",
      routerLink: '/pedidos'
    },
  ];

}
