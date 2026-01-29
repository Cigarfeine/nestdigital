import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleView } from './single-view';

describe('SingleView', () => {
  let component: SingleView;
  let fixture: ComponentFixture<SingleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
