import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { InfoCompComponent } from './info-comp/info-comp.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TabberComponent } from './tabber/tabber.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    
    AppComponent,
    InfoCompComponent,
    SearchFormComponent,
    TabberComponent
    

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
