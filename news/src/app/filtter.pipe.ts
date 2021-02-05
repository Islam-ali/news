import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtter'
})
export class FiltterPipe implements PipeTransform {

  transform(posts: any , search: string): any {

    return posts.filter(function(posts){
      
    return posts.title.includes(search);

    })
  }

}
