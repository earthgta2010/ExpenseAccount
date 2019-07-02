import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadComponent } from './Upload/Upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes = [
  { path: 'Upload', component: UploadComponent },
  { path: 'Dashboard', component: DashboardComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
