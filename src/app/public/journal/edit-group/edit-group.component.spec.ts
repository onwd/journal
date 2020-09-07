import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicJournalEditGroupPageComponent } from './edit-group.component';

describe('PublicJournalEditGroupPageComponent', () => {
  let component: PublicJournalEditGroupPageComponent;
  let fixture: ComponentFixture<PublicJournalEditGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PublicJournalEditGroupPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicJournalEditGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
