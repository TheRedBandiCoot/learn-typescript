<details>
  <summary><h2 class="head">Table Of Content (TypeScriptSimplified)</h2></summary><blockquote>
    <details><summary>01 - Setup</summary><blockquote>
      <ul>
        <li>01 - What Is TypeScript + Course Introduction</li>
        <li>02 - Why Use TypeScript</li>
        <li>03 - How To Initialize A TypeScript Project</li>
        <li>04 - Using A Bundler</li>
        <li>05 - Understanding The TSConfig</li>
      </ul>
    </blockquote></details>
    <details><summary>02 - Basic Types</summary><blockquote>
        <ul>
          <li>06 - Assigning Types And Type Inference</li>
          <li>07 - Array Type</li>
          <li>08 - Any Type</li>
          <li>09 - Object Basics</li>
          <li>10 - Types Vs Interfaces</li>
        </ul>
      </blockquote>
    </details>
    <details><summary>03 - Function Types</summary><blockquote>
        <ul>
          <li>11 - Defining Functions</li>
          <li>12 - Void Type</li>
          <li>13 - Optional Parameters</li>
          <li>14 - Destructured And Rest Parameters</li>
          <li>15 - Typing Variables As Functions</li>
        </ul>
      </blockquote></details>
    <details><summary>04 - Type Modifiers</summary><blockquote>
        <ul>
          <li>16 - Unions</li>
          <li>17 - Intersections</li>
          <li>18 - readonly</li>
          <li>19 - keyof</li>
          <li>20 - typeof</li>
          <li>21 - Index Types</li>
        </ul>
      </blockquote></details>
    <details><summary>05 - Advanced Types</summary><blockquote>
        <ul>
          <li>22 - As Const And Enums</li>
          <li>23 - Tuples</li>
          <li>24 - Generics</li>
          <li>25 - Async Functions</li>
        </ul>
      </blockquote></details>
    <details>
    <summary>06 - Built In Types</summary><blockquote>
        <ul>
          <li>26 - Pick And Omit</li>
          <li>27 - Partial And Required</li>
          <li>28 - ReturnType And Parameters</li>
          <li>29 - Record</li>
          <li>30 - Readonly</li>
          <li>31 - Awaited</li>
        </ul>
      </blockquote></details>
      <details><summary>07 - Type Narrowing</summary><blockquote>
          <ul>
            <li>32 - Basic Type Guards</li>
            <li>33 - Never Type</li>
            <li>34 - Unknown Type</li>
            <li>35 - As Casting</li>
            <li>36 - Satisfies</li>
            <li>37 - Discriminated Union</li>
            <li>38 - Function Overloads</li>
            <li>39 - Type Predicate Function</li>
          </ul>
        </blockquote></details>
      <details>
      <summary>08 - Real World TypeScript</summary><blockquote>
          <ul>
            <li>40 - Debugging</li>
            <li>41 - Importing Types</li>
            <li>42 - Declaration Files</li>
            <li>43 - Todo List Project Introduction</li>
            <li>44 - Todo List Project Walkthrough</li>
            <li>45 - Migrate JS To TS Project Introduction</li>
            <li>46 - Migrate JS To TS Project Walkthrough</li>
          </ul>
        </blockquote></details>
      <details><summary>09 - Conclusion</summary><blockquote>
          <ul>
            <li>47 - What's Next</li>
          </ul>
        </blockquote></details>
  <details><summary>10 - BONUS: Typing React Code</summary><blockquote>
      <ul>
        <li>01 - PropTypes</li>
        <li>02 - TypeScript Setup And Props</li>
        <li>03 - useState</li>
        <li>04 - useRef</li>
        <li>05 - useReducer</li>
        <li>06 - useContext</li>
        <li>07 - Generic Components</li>
        <li>08 - Google Calendar Clone Introduction</li>
        <li>09 - Google Calendar Clone Walkthrough</li>
      </ul>
    </blockquote></details>
</blockquote>
</details>

## @WebDevSimplified

##### This is a trick I have been using for a while and really love it. One thing to note about this is that normal TS utility types like `Omit` and `Pick` will not work with Unions so you need to write your own version of these utils that look like this.

```ts
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;
```

## viktormalmedal265

##### Small tip, the _type_ `string | number | symbol` is equal to the _global type_ `PropertyKey`.

```ts
type Foo = PropertyKey;
//     ^? string | number | symbol
```
