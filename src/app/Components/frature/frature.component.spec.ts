import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FratureComponent } from './frature.component';

describe('FratureComponent', () => {
  let component: FratureComponent;
  let fixture: ComponentFixture<FratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FratureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
