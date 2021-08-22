import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {

    if (value < 60) {
      return "00:" + value.toString();
    }

    let mins: any = Math.floor(value / 60);
    let secs: any = value - (mins * 60);

    mins = mins.toString();
    secs = secs.toString();

    mins = (mins.length === 1) ? "0" + mins : mins;
    secs = (secs.length === 1) ? "0" + secs : secs;

    return mins + ":" + secs;

  }

}
