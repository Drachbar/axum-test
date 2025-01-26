import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendFetchTestComponent } from './backend-fetch-test.component';

describe('BackendFetchTestComponent', () => {
  let component: BackendFetchTestComponent;
  let fixture: ComponentFixture<BackendFetchTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendFetchTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendFetchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
