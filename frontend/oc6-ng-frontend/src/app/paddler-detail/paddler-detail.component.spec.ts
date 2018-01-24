import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlerDetailComponent } from './paddler-detail.component';

describe('PaddlerDetailComponent', () => {
  let component: PaddlerDetailComponent;
  let fixture: ComponentFixture<PaddlerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddlerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddlerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
