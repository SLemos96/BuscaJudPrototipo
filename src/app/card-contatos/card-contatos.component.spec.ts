import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContatosComponent } from './card-contatos.component';

describe('CardContatosComponent', () => {
  let component: CardContatosComponent;
  let fixture: ComponentFixture<CardContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
