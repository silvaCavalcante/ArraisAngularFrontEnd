/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Banner2HoverComponent } from './banner2-hover.component';

describe('Banner2HoverComponent', () => {
  let component: Banner2HoverComponent;
  let fixture: ComponentFixture<Banner2HoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner2HoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner2HoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
