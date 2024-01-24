import { Component } from '@angular/core';
import { DashboardSidebarComponent } from '../dashboard-sidebar/dashboard-sidebar.component';
import { DashboardMobileSidebarComponent } from '../dashboard-mobile-sidebar/dashboard-mobile-sidebar.component';
import { DashboardMobileToggleComponent } from '../dashboard-mobile-toggle/dashboard-mobile-toggle.component';
@Component({
  selector: 'app-dashboard-index',
  standalone: true,
  imports: [
            DashboardSidebarComponent,
            DashboardMobileSidebarComponent,
            DashboardMobileToggleComponent
          ],
  templateUrl: './dashboard-index.component.html',
  styleUrl: './dashboard-index.component.css'
})
export class DashboardIndexComponent {

}
