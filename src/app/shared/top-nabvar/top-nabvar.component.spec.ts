import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNabvarComponent } from './top-nabvar.component';

describe('TopNabvarComponent', () => {
  let component: TopNabvarComponent;
  let fixture: ComponentFixture<TopNabvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNabvarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNabvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
