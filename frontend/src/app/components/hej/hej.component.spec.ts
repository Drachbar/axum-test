import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HejComponent } from './hej.component';

describe('HejComponent', () => {
  let component: HejComponent;
  let fixture: ComponentFixture<HejComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HejComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HejComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
