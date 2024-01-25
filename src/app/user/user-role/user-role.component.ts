import { Component } from '@angular/core';
import { DashboardMobileSidebarComponent } from '../../dashboard/dashboard-mobile-sidebar/dashboard-mobile-sidebar.component';
import { DashboardMobileToggleComponent } from '../../dashboard/dashboard-mobile-toggle/dashboard-mobile-toggle.component';
import { DashboardSidebarComponent } from '../../dashboard/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [
    DashboardMobileSidebarComponent,
    DashboardMobileToggleComponent,
    DashboardSidebarComponent,
  ],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.css'
})
export class UserRoleComponent {

}
