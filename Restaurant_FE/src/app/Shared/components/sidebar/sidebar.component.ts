import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  userRole: string = '';

  menuItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/admin/dashboard',
      roles: ['ADMIN', 'CUSTOMER']
    },
    {
      title: 'Categories',
      icon: 'appstore',
      route: '/admin/categories',
      roles: ['ADMIN'],
      children: [
        {
          title: 'Add Category',
          route: '/admin/category',
          icon: 'plus'
        },
        {
          title: 'View Categories',
          route: '/admin/categories',
          icon: 'eye'
        }
      ]
    },
    {
      title: 'Products',
      icon: 'shopping',
      route: '/admin/products',
      roles: ['ADMIN'],
      children: [
        {
          title: 'View Products',
          route: '/admin/products',
          icon: 'eye'
        }
      ]
    },
    {
      title: 'Menu',
      icon: 'book',
      route: '/admin/menu-management',
      roles: ['ADMIN']
    },
    {
      title: 'Orders',
      icon: 'shopping-cart',
      route: '/customer/orders',
      roles: ['ADMIN', 'CUSTOMER']
    },
    {
      title: 'Settings',
      icon: 'setting',
      route: '/settings',
      roles: ['ADMIN', 'CUSTOMER']
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userRole = StorageService.getUserRole() || 'CUSTOMER';
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    StorageService.logout();
    this.router.navigate(['/login']);
  }

  hasAccess(roles: string[]): boolean {
    return roles.includes(this.userRole);
  }

  getUserName(): string {
    const user = StorageService.getUser();
    return user?.name || user?.email || 'User';
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }
}
