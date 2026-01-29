import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudComputing } from './cloud-computing';

describe('CloudComputing', () => {
  let component: CloudComputing;
  let fixture: ComponentFixture<CloudComputing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudComputing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudComputing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
