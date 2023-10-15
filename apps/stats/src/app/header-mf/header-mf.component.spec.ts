import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderMfComponent } from './header-mf.component';

describe('HeaderMfComponent', () => {
  let component: HeaderMfComponent;
  let fixture: ComponentFixture<HeaderMfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMfComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
