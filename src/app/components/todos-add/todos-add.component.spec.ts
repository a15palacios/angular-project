import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAddComponent } from './todos-add.component';

describe('TodosAddComponent', () => {
  let component: TodosAddComponent;
  let fixture: ComponentFixture<TodosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
