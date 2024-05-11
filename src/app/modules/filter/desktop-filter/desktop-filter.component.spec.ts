import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopFilterComponent } from './desktop-filter.component';

describe('DesctopFilterComponent', () => {
  let component: DesktopFilterComponent;
  let fixture: ComponentFixture<DesktopFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesktopFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
