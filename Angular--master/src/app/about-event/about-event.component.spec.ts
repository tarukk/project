import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEventComponent } from './about-event.component';

describe('AboutEventComponent', () => {
  let component: AboutEventComponent;
  let fixture: ComponentFixture<AboutEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
