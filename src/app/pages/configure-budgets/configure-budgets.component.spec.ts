import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureBudgetsComponent } from './configure-budgets.component';

describe('ConfigureBudgetsComponent', () => {
  let component: ConfigureBudgetsComponent;
  let fixture: ComponentFixture<ConfigureBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureBudgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
