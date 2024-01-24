import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMobileSidebarComponent } from './dashboard-mobile-sidebar.component';

describe('DashboardMobileSidebarComponent', () => {
  let component: DashboardMobileSidebarComponent;
  let fixture: ComponentFixture<DashboardMobileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMobileSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMobileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
