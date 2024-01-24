import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMobileToggleComponent } from './dashboard-mobile-toggle.component';

describe('DashboardMobileToggleComponent', () => {
  let component: DashboardMobileToggleComponent;
  let fixture: ComponentFixture<DashboardMobileToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMobileToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMobileToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
