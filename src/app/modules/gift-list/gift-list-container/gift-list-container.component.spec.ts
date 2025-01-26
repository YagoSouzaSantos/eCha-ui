import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListContainerComponent } from './gift-list-container.component';

describe('GiftListContainerComponent', () => {
  let component: GiftListContainerComponent;
  let fixture: ComponentFixture<GiftListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
