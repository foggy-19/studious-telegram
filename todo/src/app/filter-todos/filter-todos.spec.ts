import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTodos } from './filter-todos';

describe('FilterTodos', () => {
  let component: FilterTodos;
  let fixture: ComponentFixture<FilterTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterTodos],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterTodos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
