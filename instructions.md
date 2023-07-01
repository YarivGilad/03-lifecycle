<!-- prettier-ignore-start -->
---------------------------------------------------------------
* Copyright © Written by Yariv Gilad © https://yarivgilad.com 
---------------------------------------------------------------

==================================
## Restate your statements!!
==================================

1. Refactor the `<App>` component
   Get rid of its constructor method and declare the state as a class field
   See the <UserInput> component for a working example.

   Furthermore - refactor the counter button _onClick_ event handler function in `<App>`
   to have the same syntax as `<UserInput>` has.
   (assigning an arrow function to a class field instead of a regular class method)

2. Create a new `<Books>` component

3. Refactor the `<App>` component
   move anything related to the books _counter_ into the `<Books>` component
   it should have its own state, along with its UI and the updating function.

### Bonus tasks :)

---

1. Refactor your code again.
   Create similar components to update the `customers` and `employees` count.

💡 Think --->
    Instead of creating `<Customers>` and `<Employees>` components with similar code,
    challenge yourself and create a `<Counter>` component you can instantiate
    to handle books, customers, employees or any other data you will add later.
    Use props to the `<Counter>` component to make it dynamic & generic.
<--- 💡

    Finally the `<Bookstore>` component should have no state at all.
    instead – it will contain component instances of your choosing
    where each one of them will manage their own state internally.

2.  Modify the bookstore headline
    from `_ ^ _ Stateful Bookstore _ ^ _`
    to `<<<< Stateful Bookstore >>>>`

3.  Modify the `<TopBar>` component
    Make sure we can see its name in _`React-dev-tools`_ tab

               ,,__
        ..  ..   / o._)                   .---.
       /--'/--\  \-'||        .----.    .'     '.
      /        \_/ / |      .'      '..'         '-.
    .'\  \__\  __.'.'     .'          i-._
      )\ |  )\ |      _.'
     // \\ // \\
    ||_  \\|_  \\_
    '--' '--'' '--'

Enjoy yourselves :)
Yariv
---

[linkedin connect](https://www.linkedin.com/in/yarivgilad/)

<!-- prettier-ignore-end -->