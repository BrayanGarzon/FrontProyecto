import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPerfilUsuarioComponent } from './info-perfil-usuario.component';

describe('InfoPerfilUsuarioComponent', () => {
  let component: InfoPerfilUsuarioComponent;
  let fixture: ComponentFixture<InfoPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
