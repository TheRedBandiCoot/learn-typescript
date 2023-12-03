<details>
  <summary><h2>Table Of Content (TypeScriptSimplified)</h2></summary><blockquote>
    <details><summary>✅ 01 - Setup</summary><blockquote>
      <ul>
        <li>[x] 01 - What Is TypeScript + Course Introduction</li>
        <li>[x] 02 - Why Use TypeScript</li>
        <li>[x] 03 - How To Initialize A TypeScript Project</li>
        <li>[x] 04 - Using A Bundler</li>
        <li>[x] 05 - Understanding The TSConfig</li>
      </ul>
    </blockquote></details>
    <details><summary>✅ 02 - Basic Types</summary><blockquote>
        <ul>
          <li>[x] 06 - Assigning Types And Type Inference</li>
          <li>[x] 07 - Array Type</li>
          <li>[x] 08 - Any Type</li>
          <li>[x] 09 - Object Basics</li>
          <li>[x] 10 - Types Vs Interfaces</li>
        </ul>
      </blockquote>
    </details>
    <details><summary>✅ 03 - Function Types</summary><blockquote>
        <ul>
          <li>[x] 11 - Defining Functions</li>
          <li>[x] 12 - Void Type</li>
          <li>[x] 13 - Optional Parameters</li>
          <li>[x] 14 - Destructured And Rest Parameters</li>
          <li>[x] 15 - Typing Variables As Functions</li>
        </ul>
      </blockquote></details>
    <details><summary>✅ 04 - Type Modifiers</summary><blockquote>
        <ul>
          <li>[x] 16 - Unions</li>
          <li>[x] 17 - Intersections</li>
          <li>[x] 18 - readonly</li>
          <li>[x] 19 - keyof</li>
          <li>[x] 20 - typeof</li>
          <li>[x] 21 - Index Types</li>
        </ul>
      </blockquote></details>
    <details><summary>✅ 05 - Advanced Types</summary><blockquote>
        <ul>
          <li>[x] 22 - As Const And Enums</li>
          <li>[x] 23 - Tuples</li>
          <li>[x] 24 - Generics</li>
          <li>[x] 25 - Async Functions</li>
        </ul>
      </blockquote></details>
    <details>
    <summary>✅ 06 - Built In Types</summary><blockquote>
        <ul>
          <li>[x] 26 - Pick And Omit</li>
          <li>[x] 27 - Partial And Required</li>
          <li>[x] 28 - ReturnType And Parameters</li>
          <li>[x] 29 - Record</li>
          <li>[x] 30 - Readonly</li>
          <li>[x] 31 - Awaited</li>
        </ul>
      </blockquote></details>
      <details><summary>✅ 07 - Type Narrowing</summary><blockquote>
          <ul>
            <li>[x] 32 - Basic Type Guards</li>
            <li>[x] 33 - Never Type</li>
            <li>[x] 34 - Unknown Type</li>
            <li>[x] 35 - As Casting</li>
            <li>[x] 36 - Satisfies</li>
            <li>[x] 37 - Discriminated Union</li>
            <li>[x] 38 - Function Overloads</li>
            <li>[x] 39 - Type Predicate Function</li>
          </ul>
        </blockquote></details>
      <details>
      <summary>✅ 08 - Real World TypeScript</summary><blockquote>
          <ul>
            <li>[x] 40 - Debugging</li>
            <li>[x] 41 - Importing Types</li>
            <li>[x] 42 - Declaration Files</li>
            <li>[x] 43 - Todo List Project Introduction</li>
            <li>[x] 44 - Todo List Project Walkthrough</li>
            <li>[x] 45 - Migrate JS To TS Project Introduction</li>
            <li>[x] 46 - Migrate JS To TS Project Walkthrough</li>
          </ul>
        </blockquote></details>
      <details><summary>✅ 09 - Conclusion</summary><blockquote>
          <ul>
            <li>[x] 47 - What's Next</li>
          </ul>
        </blockquote></details>
  <details><summary>✅ 10 - BONUS: Typing React Code</summary><blockquote>
      <ul>
        <li>[x] 01 - PropTypes</li>
        <li>[x] 02 - TypeScript Setup And Props</li>
        <li>[x] 03 - useState</li>
        <li>[x] 04 - useRef</li>
        <li>[x] 05 - useReducer</li>
        <li>[x] 06 - useContext</li>
        <li>[x] 07 - Generic Components</li>
        <li>[x] 08 - Google Calendar Clone Introduction</li>
        <li>[x] 09 - Google Calendar Clone Walkthrough</li>
      </ul>
    </blockquote></details>
</blockquote>
</details>

## @WebDevSimplified

##### This is a trick I have been using for a while and really love it. One thing to note about this is that normal TS utility types like `Omit` and `Pick` will not work with Unions so you need to write your own version of these utils that look like this.

```ts
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
```

## viktormalmedal265

##### Small tip, the _type_ `string | number | symbol` is equal to the _global type_ `PropertyKey`.

```ts
type Foo = PropertyKey;
//     ^? string | number | symbol
```
