import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNLDevComponent } from './sobre-nldev.component';

describe('SobreNLDevComponent', () => {
  let component: SobreNLDevComponent;
  let fixture: ComponentFixture<SobreNLDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreNLDevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreNLDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
