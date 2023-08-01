import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSitesCategoryComponent } from './show-sites-category.component';

describe('ShowSitesCategoryComponent', () => {
  let component: ShowSitesCategoryComponent;
  let fixture: ComponentFixture<ShowSitesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSitesCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSitesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
