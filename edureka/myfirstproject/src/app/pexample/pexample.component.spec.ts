import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexampleComponent } from './pexample.component';

describe('PexampleComponent', () => {
  let component: PexampleComponent;
  let fixture: ComponentFixture<PexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
