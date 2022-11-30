import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutofillManualComponent } from './autofill-manual.component';

describe('AutofillManualComponent', () => {
  let component: AutofillManualComponent;
  let fixture: ComponentFixture<AutofillManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutofillManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutofillManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
