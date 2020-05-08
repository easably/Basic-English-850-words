import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizIELTSPage } from './quiz-ielts.page';

describe('QuizIELTSPage', () => {
  let component: QuizIELTSPage;
  let fixture: ComponentFixture<QuizIELTSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizIELTSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizIELTSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
