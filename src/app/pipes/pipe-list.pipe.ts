import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeList'
})
export class PipeListPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    return value.map(v => v + " " + args[0]);
  }

}
