import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExampleComponent } from './checkbox-example.component';

describe('CheckboxExampleComponent', () => {
  let component: CheckboxExampleComponent;
  let fixture: ComponentFixture<CheckboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
