import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWeirdoComponent } from './tech-weirdo.component';

describe('TechWeirdoComponent', () => {
  let component: TechWeirdoComponent;
  let fixture: ComponentFixture<TechWeirdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechWeirdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechWeirdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
