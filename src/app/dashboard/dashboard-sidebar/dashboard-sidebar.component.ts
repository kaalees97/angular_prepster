import { Component } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.css'
})
export class DashboardSidebarComponent {

  constructor(
    private router:Router,
  ){}

  logout() { 
    localStorage.clear();   
    Swal.fire({
      title: "Your are Logged Out",
      icon: "info",
    }).then((result) => {
      if (result.isConfirmed)
      {
        this.router.navigate(['/login']);
      }
      // else                  
      // {
      //   this.router.navigate(['/login']);
      // }
    });
}

}
