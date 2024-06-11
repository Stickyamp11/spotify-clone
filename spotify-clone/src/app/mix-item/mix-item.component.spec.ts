import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixItemComponent } from './mix-item.component';

describe('MixItemComponent', () => {
  let component: MixItemComponent;
  let fixture: ComponentFixture<MixItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
