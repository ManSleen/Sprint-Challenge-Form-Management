# Answers

- [ ] Why are forms used so often in web applications and software?

  **Forms are used so often because they're versatile and can do lots of different things like logging a user in, registering a new user, searching for things, gathering data from a user, etc.**

- [ ] What advantages are there by using a forms library like Formik?

  **Using a forms library like Formik provides advantages like making it easier to handle complex situations that might require several different pieces of state to be set up. It also gives us an easy way to validate form data and provide the user comprehensive error messages.**

- [ ] What is stateful logic?

  **Stateful logic is logic that is based on the state that our app is in. You can think of it like this: If the app is in this specific state, then perform this logic.**

- [ ] What is a custom hook, and what does it mean to compose hooks together?

  **A custom hook is really just a JS function that has a name starting with "use...". Custom hooks let us move our component's logic out of our component and into a reusable hook. Composing hooks together means that we are combining several hooks into one single custom hook and gives us even more functionality.**

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

  **The process of retrieving a token and using it in later API calls goes like this: We submit some kind of credentials for the server to accept. If it does accept, it returns us back an object with a token inside of it. We can then store this token into our browser's localStorage. Then when we make future API calls to "restricted" endpoints, we supply the server with our token to gain access.**
