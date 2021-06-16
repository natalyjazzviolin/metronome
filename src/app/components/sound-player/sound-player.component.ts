import { Component, OnInit } from '@angular/core';
import { FrequencyService } from '../../services/frequency.service';

@Component({
  selector: 'app-sound-player',
  templateUrl: './sound-player.component.html',
  styleUrls: ['./sound-player.component.scss'],
})
export class SoundPlayerComponent implements OnInit {
  private Hrz: number = 880; //Set default frequency
  private audioContext!: AudioContext;
  constructor(private frequencyService: FrequencyService) {}

  ngOnInit() {
    AudioContext =
      (window as any).AudioContext || (window as any).webkitAudioContext;
    this.audioContext = new AudioContext();

    //Observe frequency from Slider component
    this.frequencyService.receiveFrequency().subscribe((data) => {
      console.log(data);
      this.Hrz = data;
    });
  }

  play() {
    let oscillator = this.audioContext.createOscillator();
    oscillator.onended = () => oscillator.disconnect();
    oscillator.connect(this.audioContext.destination);
    oscillator.frequency.value = this.Hrz;
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 1);
  }
}
