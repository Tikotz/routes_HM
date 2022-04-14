import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeAPIComponent } from './free-api.component';

describe('FreeAPIComponent', () => {
  let component: FreeAPIComponent;
  let fixture: ComponentFixture<FreeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
