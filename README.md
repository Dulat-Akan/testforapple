Project requirements
- node js
- if you don't have node js follow this instruction on the website "https://github.com/nvm-sh/nvm"
- or run this command from terminal "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash" to install node js

- If you have node js please run this commands
-Commands to run project:
1.  "git clone git@github.com:Dulat-Akan/testforapple.git"
2.  "cd testforapple/"
3.  "npm install"
4.  "npm start"


- In my solution I used React native (Javascript library) + Firebase cloud database; Details is here https://reactnative.dev/ and https://firebase.google.com/docs/firestore
Why is React because react using virtual dom, and it's work faster then traditional dom rendering.
In my Components I used JSX syntax which allow as to write html elements inside javascript; Why JSX more details is here https://reactjs.org/docs/introducing-jsx.html;
- In my approach I used firebase database to store unique id and url.
I created "waitUniqId" function to generate inique number identificator,
Before insert I am checking existing url in database, if url exist i returning id ,else we should insert url and unique id.
In this situation I didn't use hash function, because we need to generate "url shortener" with numbers.


Project structure (inside "src" folder/)->
- (src/config) - contain (config.js,firebase.js)
- (src/components) (Main page Component and Redirect Component)
- (src/services) (Api calls (I use cload database FireStore with noSQL (more details is here https://firebase.google.com/docs/firestore) (I can use more different database such as mysql,mongo,postgre e.t.c)))
- App.js (navigation)
- App.css (styles)
1.(src/components)
- project have "compoents" folder with 2 components inside{
- MainComponent.js (contain logic for main page)
- RedirectComponent.js (contain redirect logic)
}
2.(src/services)
- project have "services" which contain (1 service)
- (src/services/Appservice.js) (contain functions to write,check url and check id);

3.(src/App.css)
- contain styles from MainComponents.js
4.(src/App.js)
- contain App.js component have url navigation rules.

For unit test I used jest it is already built into the react application details is here https://jestjs.io/docs/tutorial-react
-I used act function to check time rendering and memory leak also react library have "error-boundaries tool" which preventing memory leak , misuse of the component lifecycle and not used variables and state objects.
//act(() => {
  // render components
//});

-Also additional:
- I added input validation to check the current url when the user enters a wrong url
- Button to copy the current generated url from the page
- Notification of each step of user interaction with the page
- Convenient user interface


Thank you very much it was good coding test!
