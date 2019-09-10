import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGLoadderComponent } from './svgloadder.component';

describe('SVGLoadderComponent', () => {
  let component: SVGLoadderComponent;
  let fixture: ComponentFixture<SVGLoadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGLoadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGLoadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
