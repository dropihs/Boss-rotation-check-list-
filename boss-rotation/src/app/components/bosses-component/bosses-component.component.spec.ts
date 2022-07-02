import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesComponentComponent } from './bosses-component.component';

describe('BossesComponentComponent', () => {
  let component: BossesComponentComponent;
  let fixture: ComponentFixture<BossesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BossesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
