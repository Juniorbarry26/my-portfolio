import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPartComponent } from './end-part.component';

describe('EndPartComponent', () => {
  let component: EndPartComponent;
  let fixture: ComponentFixture<EndPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EndPartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
