import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableEditComponent } from './responsable-edit.component';

describe('ResponsableEditComponent', () => {
  let component: ResponsableEditComponent;
  let fixture: ComponentFixture<ResponsableEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableEditComponent]
    });
    fixture = TestBed.createComponent(ResponsableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
