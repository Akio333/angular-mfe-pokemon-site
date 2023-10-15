import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterMfComponent } from './footer-mf.component';

describe('FooterMfComponent', () => {
  let component: FooterMfComponent;
  let fixture: ComponentFixture<FooterMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
