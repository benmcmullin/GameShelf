import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sortArray',
})
export class SortArrayPipe implements PipeTransform {
  transform<T>(array: T[], sortField: string) {

    const sortedArr = array.slice().sort((itemA, itemB) => {
      const a = itemA[sortField]?.toLowerCase();
      const b = itemB[sortField]?.toLowerCase();

      if (a > b) return 1;

      if (a < b) return -1;

      return 0;
    });

    console.log('sortedArr:', sortedArr);

    return sortedArr;
  }
}
