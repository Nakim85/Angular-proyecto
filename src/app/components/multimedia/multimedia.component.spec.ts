import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaComponent } from './multimedia.component';

describe('MultimediaComponent', () => {
  let component: MultimediaComponent;
  let fixture: ComponentFixture<MultimediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultimediaComponent]
    });
    fixture = TestBed.createComponent(MultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
