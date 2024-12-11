import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  
import { ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './post/post.module';
import { IdFormatPipe } from './id-format.pipe';

  
@NgModule({
  declarations: [
    AppComponent,
    IdFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }