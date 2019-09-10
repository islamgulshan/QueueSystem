import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGLoadder2Component } from './svgloadder2.component';

describe('SVGLoadder2Component', () => {
  let component: SVGLoadder2Component;
  let fixture: ComponentFixture<SVGLoadder2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGLoadder2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGLoadder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
