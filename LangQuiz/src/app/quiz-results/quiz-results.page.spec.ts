import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizResultsPage } from './quiz-results.page';

describe('QuizResultsPage', () => {
  let component: QuizResultsPage;
  let fixture: ComponentFixture<QuizResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
