import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveform01Component } from './reactiveform01.component';

describe('Reactiveform01Component', () => {
  let component: Reactiveform01Component;
  let fixture: ComponentFixture<Reactiveform01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveform01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveform01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
