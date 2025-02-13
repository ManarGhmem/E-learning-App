import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homepage/home.component';
import { LoginComponent } from './homepage/login/login.component';
import { CompteRenduComponent } from './compte-rendu/compte-rendu.component';
import { ProjetsComponent } from './projets/projets.component';
import { CoursComponent } from './cours/cours.component';
import { GroupementhomeComponent } from './groupementhome/groupementhome.component';
import { NosCoursComponent } from './nos-cours/nos-cours.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CoursOpenCellComponent } from './cours-open-cell/cours-open-cell.component';
import { CoursSabAbapComponent } from './cours-sab-abap/cours-sab-abap.component';
import { TotalEnergieComponent } from './total-energie/total-energie.component';
import { ModeOperatoireComponent } from './mode-operatoire/mode-operatoire.component';
import { PlateformeComponent } from './plateforme/plateforme.component';
import { PlatformeLogicielsComponent } from './platforme-logiciels/platforme-logiciels.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ActivationComponent } from './activation/activation.component';
import { SapProjetComponent } from './sap-projet/sap-projet.component';
import { OpencellProjetComponent } from './opencell-projet/opencell-projet.component';
import { SapAbapProjetComponent } from './sap-abap-projet/sap-abap-projet.component';
import { ProjetEngieComponent } from './projet-engie/projet-engie.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'home',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'projets',
    component: ProjetsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'compte-rendu',
    component: CompteRenduComponent,
    canActivate: [authGuard]
  },

  {
    path: 'cours',
    component: CoursComponent,
    canActivate: [authGuard]
  },
  {
    path: 'nos-cours',
    component: NosCoursComponent,
    canActivate: [authGuard]
  },
  {
    path: 'evaluation',
    component: EvaluationComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cours-opencell',
    component: CoursOpenCellComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cours-sababap',
    component: CoursSabAbapComponent,
    canActivate: [authGuard]
  },
  {
    path: 'total-energie',
    component: TotalEnergieComponent,
    canActivate: [authGuard]
  },
  {
    path: 'mode-operatoire',
    component: ModeOperatoireComponent,
    canActivate: [authGuard]
  },
  {
    path: 'platforme-logiciels',
    component: PlatformeLogicielsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [authGuard]
  },

  {
    path: 'question',
    component: QuestionComponent,
    canActivate: [authGuard]
  },
  {
    path: 'chatbot',
    component: ChatbotComponent,
    canActivate: [authGuard]
  },
  {
    path: 'projet-engie',
    component: ProjetEngieComponent,
    canActivate: [authGuard]
  },
  {
    path: 'manageuser',
    component: ManageUserComponent,
    canActivate: [authGuard]
  },

  { path: 'activate', component: ActivationComponent,
  canActivate: [authGuard] },
  { path: 'sap-projet', component: SapProjetComponent,
  canActivate: [authGuard] },
  { path: 'opencell-projet', component: OpencellProjetComponent ,
  canActivate: [authGuard]},
  { path: 'sap-abap-projet', component: SapAbapProjetComponent ,
  canActivate: [authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
