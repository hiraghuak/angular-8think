import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomebodyComponent } from './home_page/homebody/homebody.component';
import { AboutusComponent } from './home_page/aboutus/aboutus.component';
import { PageNotFoundComponent } from './home_page/page-not-found/page-not-found.component';
import { OurservicesComponent } from './home_page/ourservices/ourservices.component';
import { BusinessServiceComponent } from './ourservice_page/business-service/business-service.component';
import { OfficeSpaceComponent } from './ourservice_page/office-space/office-space.component';
import { CurrentAccountComponent } from './ourservice_page/current-account/current-account.component';
import { MentorsCoachingComponent } from './ourservice_page/mentors-coaching/mentors-coaching.component';
import { InsightsOnDemandComponent } from './ourservice_page/insights-on-demand/insights-on-demand.component';
import { TermsConditionsComponent } from './home_page/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './home_page/privacy-policy/privacy-policy.component';
import { BlogComponent } from './home_page/blog/blog.component';
import { FaqComponent } from './home_page/faq/faq.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: HomebodyComponent },
  { path: 'home', component: HomebodyComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'ourservice', component: OurservicesComponent },
  { path: 'ourservice/business-service', component: BusinessServiceComponent },
  { path: 'ourservice/office-space', component: OfficeSpaceComponent },
  { path: 'ourservice/current-account', component: CurrentAccountComponent },
  { path: 'ourservice/mentors-coaching', component: MentorsCoachingComponent },
  { path: 'ourservice/insights-on-demand', component: InsightsOnDemandComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faq', component: FaqComponent },
  // { path: 'contactus', component: HomebodyComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
