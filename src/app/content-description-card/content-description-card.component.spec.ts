import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDescriptionCardComponent } from './content-description-card.component';

describe('ContentDescriptionCardComponent', () => {
  let component: ContentDescriptionCardComponent;
  let fixture: ComponentFixture<ContentDescriptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDescriptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDescriptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
