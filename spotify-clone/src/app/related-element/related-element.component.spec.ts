import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedElementComponent } from './related-element.component';

describe('RelatedElementComponent', () => {
  let component: RelatedElementComponent;
  let fixture: ComponentFixture<RelatedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
