import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftListsComponent } from './gift-lists.component';

describe('GiftListsComponent', () => {
  let component: GiftListsComponent;
  let fixture: ComponentFixture<GiftListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
