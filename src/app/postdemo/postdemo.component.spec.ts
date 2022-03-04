import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdemoComponent } from './postdemo.component';

describe('PostdemoComponent', () => {
  let component: PostdemoComponent;
  let fixture: ComponentFixture<PostdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
