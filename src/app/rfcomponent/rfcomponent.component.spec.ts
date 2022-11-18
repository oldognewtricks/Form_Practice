import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFComponentComponent } from './rfcomponent.component';

describe('RFComponentComponent', () => {
  let component: RFComponentComponent;
  let fixture: ComponentFixture<RFComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
