import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemePageComponent } from './deuxieme-page.component';

describe('DeuxiemePageComponent', () => {
  let component: DeuxiemePageComponent;
  let fixture: ComponentFixture<DeuxiemePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeuxiemePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeuxiemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
