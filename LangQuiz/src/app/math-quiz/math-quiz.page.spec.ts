import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MathQuizPage } from './math-quiz.page';

describe('MathQuizPage', () => {
  let component: MathQuizPage;
  let fixture: ComponentFixture<MathQuizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathQuizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MathQuizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
