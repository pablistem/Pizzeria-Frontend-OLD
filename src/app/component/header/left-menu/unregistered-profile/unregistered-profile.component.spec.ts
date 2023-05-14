import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredProfileComponent } from './unregistered-profile.component';

describe('UnregisteredProfileComponent', () => {
  let component: UnregisteredProfileComponent;
  let fixture: ComponentFixture<UnregisteredProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisteredProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
