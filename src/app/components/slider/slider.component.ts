import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  // templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  template: `
    <input
      id="hrzRange"
      class="hrzRange"
      [(ngModel)]="Hrz"
      min="659.25"
      max="1318.51"
      step=".01"
      type="range"
      name="pitch"
    />
    <div class="pitches">
      <button class="note-btn" id="E" (click)="pitch($event)">E</button>
      <button class="note-btn" id="F" (click)="pitch($event)">F</button>
      <button class="note-btn" id="F#" (click)="pitch($event)">F#</button>
      <button class="note-btn" id="G" (click)="pitch($event)">G</button>
      <button class="note-btn" id="G#" (click)="pitch($event)">G#</button>
      <button class="note-btn" id="A" (click)="pitch($event)">A</button>
      <button class="note-btn" id="Bb" (click)="pitch($event)">Bb</button>
      <button class="note-btn" id="B" (click)="pitch($event)">B</button>
      <button class="note-btn" id="C" (click)="pitch($event)">C</button>
      <button class="note-btn" id="C#" (click)="pitch($event)">C#</button>
      <button class="note-btn" id="D" (click)="pitch($event)">D</button>
      <button class="note-btn" id="D#" (click)="pitch($event)">D#</button>
    </div>
    <div *ngIf="Hrz!; isNan" class="output">
      The pitch is {{ Hrz | hrzToPitch }} at {{ Hrz }} Hrz.
    </div>
  `,
})
export class SliderComponent implements OnInit {
  constructor() {}

  public Hrz: number = NaN;
  slider = document.getElementById('hrzRange');

  ngOnInit(): void {}

  //Get pitch of particular note
  pitch(event: any) {
    if (event.currentTarget.id == 'E') {
      this.Hrz = 659.25;
    }
    if (event.currentTarget.id == 'F') {
      this.Hrz = 698.46;
    }
    if (event.currentTarget.id == 'F#') {
      this.Hrz = 739.99;
    }
    if (event.currentTarget.id == 'G') {
      this.Hrz = 783.99;
    }
    if (event.currentTarget.id == 'G#') {
      this.Hrz = 830.61;
    }
    if (event.currentTarget.id == 'A') {
      this.Hrz = 880.0;
    }
    if (event.currentTarget.id == 'Bb') {
      this.Hrz = 932.33;
    }
    if (event.currentTarget.id == 'B') {
      this.Hrz = 987.77;
    }
    if (event.currentTarget.id == 'C') {
      this.Hrz = 1046.5;
    }
    if (event.currentTarget.id == 'C#') {
      this.Hrz = 1108.73;
    }
    if (event.currentTarget.id == 'D') {
      this.Hrz = 1174.66;
    }
    if (event.currentTarget.id == 'D#') {
      this.Hrz = 1244.51;
    }
    console.log(event.currentTarget.id);
  }
}
