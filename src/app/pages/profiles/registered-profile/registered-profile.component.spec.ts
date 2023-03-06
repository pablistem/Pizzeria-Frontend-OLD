import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredProfileComponent } from './registered-profile.component';

describe('RegisteredProfileComponent', () => {
  let component: RegisteredProfileComponent;
  let fixture: ComponentFixture<RegisteredProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
