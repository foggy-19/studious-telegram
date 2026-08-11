import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should toggle the selected item when filtered', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.listFilter = 1;
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('.todo-item input') as HTMLInputElement;
    checkbox.click();

    expect(app.items[0].completed).toBe(true);
    expect(app.items[2].completed).toBe(false);
  });

  it('should keep the shifted item checkbox state when filtering', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.listFilter = 1;
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector('.todo-item input') as HTMLInputElement;
    checkbox.click();
    fixture.detectChanges();

    const remainingCheckbox = fixture.nativeElement.querySelector('.todo-item input') as HTMLInputElement;
    expect(remainingCheckbox.checked).toBe(false);
    expect(app.items[2].completed).toBe(false);
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('todo');
  });
});
