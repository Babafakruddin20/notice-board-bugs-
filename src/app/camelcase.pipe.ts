import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string) :string{
    if (!value) return value;

    // Split the string by spaces and capitalize each word
    return value
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();  // First word in lowercase
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  // Subsequent words in title case
      })
      .join('');
  }
} 
  


