import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableAddComponent } from './responsable-add.component';

describe('ResponsableAddComponent', () => {
  let component: ResponsableAddComponent;
  let fixture: ComponentFixture<ResponsableAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsableAddComponent]
    });
    fixture = TestBed.createComponent(ResponsableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
