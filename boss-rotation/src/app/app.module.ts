import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BossesComponentComponent } from './components/bosses-component/bosses-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponentComponent } from './components/timer-component/timer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    BossesComponentComponent,
    TimerComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
