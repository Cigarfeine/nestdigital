import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMl } from './ai-ml';

describe('AiMl', () => {
  let component: AiMl;
  let fixture: ComponentFixture<AiMl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiMl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiMl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
