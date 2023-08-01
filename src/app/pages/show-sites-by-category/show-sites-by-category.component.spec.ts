import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSitesByCategoryComponent } from './show-sites-by-category.component';

describe('ShowSitesByCategoryComponent', () => {
  let component: ShowSitesByCategoryComponent;
  let fixture: ComponentFixture<ShowSitesByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSitesByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSitesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
