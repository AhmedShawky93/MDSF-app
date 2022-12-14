import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanDetailsComponent } from './van-details.component';

describe('VanDetailsComponent', () => {
  let component: VanDetailsComponent;
  let fixture: ComponentFixture<VanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
