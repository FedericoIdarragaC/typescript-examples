import { of, from, Observable } from 'rxjs'
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';

const emitter: Observable<number> = of(1,2,3,4);

const sourceInterval = interval(1000);

const modulus: Observable<string> = sourceInterval.pipe(
  take(5),
  map((value: number) => {
    return value * 2;
  }),
  map((value: number) => {
    return `str_${value}`;
  })
)

modulus.subscribe((value: string) => {
  console.log(`Value: ${value}`)
})