import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentiacteComponent } from './authentiacte.component';

describe('AuthentiacteComponent', () => {
  let component: AuthentiacteComponent;
  let fixture: ComponentFixture<AuthentiacteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthentiacteComponent]
    });
    fixture = TestBed.createComponent(AuthentiacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
