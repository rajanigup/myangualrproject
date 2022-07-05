import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexampleComponent } from './dexample.component';

describe('DexampleComponent', () => {
  let component: DexampleComponent;
  let fixture: ComponentFixture<DexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
