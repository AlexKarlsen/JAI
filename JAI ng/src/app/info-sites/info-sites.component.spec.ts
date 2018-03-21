import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSitesComponent } from './info-sites.component';

describe('InfoSitesComponent', () => {
  let component: InfoSitesComponent;
  let fixture: ComponentFixture<InfoSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
