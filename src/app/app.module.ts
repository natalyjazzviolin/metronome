import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { HeaderComponent } from './components/header/header.component';
import { HrzToPitchPipe } from './pipes/hrz-to-pitch.pipe';
import { SoundPlayerComponent } from './components/sound-player/sound-player.component';

@NgModule({
  declarations: [AppComponent, SliderComponent, HeaderComponent, HrzToPitchPipe, SoundPlayerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
