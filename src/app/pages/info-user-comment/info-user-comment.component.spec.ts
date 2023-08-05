import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUserCommentComponent } from './info-user-comment.component';

describe('InfoUserCommentComponent', () => {
  let component: InfoUserCommentComponent;
  let fixture: ComponentFixture<InfoUserCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoUserCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoUserCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
