import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hrzToPitch',
})
export class HrzToPitchPipe implements PipeTransform {
  transform(value: number): string {
    if (!isNaN(value)) {
      if (value == 659.25) {
        return 'E';
      } else if (value > 659.25 && value < 698.46) {
        return 'E-ish';
      } else if (value == 698.46) {
        return 'F';
      } else if (value > 698.46 && value < 739.99) {
        return 'F-ish';
      } else if (value == 739.99) {
        return 'F#';
      } else if (value > 739.99 && value < 783.99) {
        return 'F#-ish';
      } else if (value == 783.99) {
        return 'G';
      } else if (value > 783.99 && value < 830.61) {
        return 'G-ish';
      } else if (value == 830.61) {
        return 'G#';
      } else if (value > 830.61 && value < 880.0) {
        return 'G#-ish';
      } else if (value == 880.0) {
        return 'A';
      } else if (value > 880.0 && value < 932.33) {
        return 'A-ish';
      } else if (value == 932.33) {
        return 'Bb';
      } else if (value > 932.33 && value < 987.77) {
        return 'Bb-ish';
      } else if (value == 987.77) {
        return 'B';
      } else if (value > 987.77 && value < 1046.5) {
        return 'B-ish';
      } else if (value == 1046.5) {
        return 'C';
      } else if (value > 1046.5 && value < 1108.73) {
        return 'C-ish';
      } else if (value == 1108.73) {
        return 'C#';
      } else if (value > 1108.73 && value < 1174.66) {
        return 'C#-ish';
      } else if (value == 1174.66) {
        return 'D';
      } else if (value > 1174.66 && value < 1244.51) {
        return 'D-ish';
      } else if (value == 1244.51) {
        return 'D#';
      } else if (value > 1244.51 && value < 1318.51) {
        return 'D#-ish';
      } else if (value == 1318.51) {
        return 'E';
      }
    }
    return '';
  }
}
