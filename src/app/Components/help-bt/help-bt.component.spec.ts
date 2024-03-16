import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBtComponent } from './help-bt.component';

describe('HelpBtComponent', () => {
  let component: HelpBtComponent;
  let fixture: ComponentFixture<HelpBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpBtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
