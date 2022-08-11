import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingContentComponent } from './routing-content.component';

describe('RoutingContentComponent', () => {
  let component: RoutingContentComponent;
  let fixture: ComponentFixture<RoutingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
