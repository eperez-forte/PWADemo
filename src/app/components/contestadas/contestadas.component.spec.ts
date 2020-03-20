import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestadasComponent } from './contestadas.component';

describe('ContestadasComponent', () => {
  let component: ContestadasComponent;
  let fixture: ComponentFixture<ContestadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
