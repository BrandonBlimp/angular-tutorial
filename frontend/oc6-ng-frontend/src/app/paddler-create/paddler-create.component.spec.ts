import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaddlerCreateComponent } from './paddler-create.component';

describe('PaddlerCreateComponent', () => {
  let component: PaddlerCreateComponent;
  let fixture: ComponentFixture<PaddlerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaddlerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaddlerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
