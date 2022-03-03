import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancybtnComponent } from './fancybtn.component';

describe('FancybtnComponent', () => {
  let component: FancybtnComponent;
  let fixture: ComponentFixture<FancybtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancybtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancybtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
