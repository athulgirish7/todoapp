import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditBookDetailsComponent } from './add-edit-book-details.component';

describe('AddEditBookDetailsComponent', () => {
  let component: AddEditBookDetailsComponent;
  let fixture: ComponentFixture<AddEditBookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditBookDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
