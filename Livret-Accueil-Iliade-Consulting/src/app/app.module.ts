import { NgModule } from '@angular/core';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { AboutusComponent } from './homepage/aboutus/aboutus.component';
import { ManagersComponent } from './homepage/managers/managers.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { Carousel1Component } from './homepage/carousel-1/carousel-1.component';
import { LoginComponent } from './homepage/login/login.component';
import { PhotoiliadeComponent } from './homepage/photoiliade/photoiliade.component';
import { ProjetsComponent } from './projets/projets.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import { CoursComponent } from './cours/cours.component';
import { GroupementhomeComponent } from './groupementhome/groupementhome.component';
import { NostechnologiesComponent } from './homepage/nostechnologies/nostechnologies.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { SquarebuttonComponent } from './squarebutton/squarebutton.component';
import { NosCoursComponent } from './nos-cours/nos-cours.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CoursOpenCellComponent } from './cours-open-cell/cours-open-cell.component';
import { CoursSabAbapComponent } from './cours-sab-abap/cours-sab-abap.component';
import { TotalEnergieComponent } from './total-energie/total-energie.component';
import { ModeOperatoireComponent } from './mode-operatoire/mode-operatoire.component';
import { PlatformeLogicielsComponent } from './platforme-logiciels/platforme-logiciels.component';
import { QuizComponent } from './quiz/quiz.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { QuestionComponent } from './question/question.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { RegisterComponent } from './register/register.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
// import { CompteRenduSapIsuComponent } from './compte-rendu-sap-isu/compte-rendu-sap-isu.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { DashComponent } from './dash/dash.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ActivationComponent } from './activation/activation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SapProjetComponent } from './sap-projet/sap-projet.component';
import { OpencellProjetComponent } from './opencell-projet/opencell-projet.component';
import { SapAbapProjetComponent } from './sap-abap-projet/sap-abap-projet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjetEngieComponent } from './projet-engie/projet-engie.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutusComponent,
    ManagersComponent,
    FooterComponent,
    Carousel1Component,
    LoginComponent,
    ProjetsComponent,
    CompteRenduComponent,
    CoursComponent,
    GroupementhomeComponent,
    NostechnologiesComponent,
    PlateformeComponent,
    SquarebuttonComponent,
    PhotoiliadeComponent, 
    NosCoursComponent, 
    EvaluationComponent,
     CoursOpenCellComponent,
     CoursSabAbapComponent,
     TotalEnergieComponent,
     ModeOperatoireComponent,
     PlatformeLogicielsComponent,
     QuizComponent,
     QuestionComponent,
     ChangeBgDirective,
     RegisterComponent,
     ChatbotComponent,
     ManageUserComponent,
     ActivationComponent,
     SapProjetComponent,
     OpencellProjetComponent,
     SapAbapProjetComponent,
     ProjetEngieComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule.forRoot(),
    HttpClientXsrfModule,
    MatDialogModule,
    NgbModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule
    

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '307028265848-av8ts94q5869pb6msor9uof2hfenq6r6.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
