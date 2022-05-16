import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPipeComponent } from './learning-pipe.component';

describe('LearningPipeComponent', () => {
  let component: LearningPipeComponent;
  let fixture: ComponentFixture<LearningPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
