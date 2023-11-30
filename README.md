## @WebDevSimplified 
##### This is a trick I have been using for a while and really love it. One thing to note about this is that normal TS utility types like `Omit` and `Pick` will not work with Unions so you need to write your own version of these utils that look like this.
```ts
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never  
``` 
## viktormalmedal265 ##### Small tip, the *type* `string | number | symbol` is equal to the *global type* `PropertyKey`.
```ts
type Foo = PropertyKey; 
//     ^? string | number | symbol
```
