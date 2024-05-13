import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMobileComponent } from './main-mobile.component';

describe('MainMobileComponent', () => {
  let component: MainMobileComponent;
  let fixture: ComponentFixture<MainMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
