import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicListElementComponent } from './music-list-element.component';

describe('MusicListElementComponent', () => {
  let component: MusicListElementComponent;
  let fixture: ComponentFixture<MusicListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
