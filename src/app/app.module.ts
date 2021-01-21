import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,} from '@angular/material/button';
import { MatFormFieldModule,} from '@angular/material/form-field';
import { MatInputModule,} from '@angular/material/input';
import { FormComponent } from './util/form/form.component';

@NgModule({
  exports: [
    MatDialogModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    AppComponent,
    FormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
