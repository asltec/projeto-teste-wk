import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../../../home/home.component';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-menu',
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
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

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
