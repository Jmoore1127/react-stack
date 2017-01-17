#React Tech Stack Template
This project shows a working configured example of the react tech-stack.

##Included Technologies
//TODO put links to examples in repo
* React
* Typescript (ES6 with Babel)
* Redux
* Reselect
* Redux-Actions
* Redux-Logic
* React-Router
* React-Router-Redux
* Redux-Devtools
* Material-UI  (TODO)
* Lodash
* Webpack
  - Code Splitting / Lazy Loading (TODO)
  - Hot Reload (TODO)


##Conventions
* File Types
  * name.interface.ts 
    
    Typescript interfaces
    
  * name.container.tsx
    
    These files represent the **container** or **smart** components. They are *connected* to the redux store. 
    These files import actions created in the redux files and provide data and bound actions to child view components.
     
  * name.redux.ts
  
    These files contain the **actions**, **reducers** from redux and the **logic** from redux-logic. 
    These must be exported according the redux-registration.interface.ts in order to be automatically registered.
    
  * name.selectors.ts
  
    These files expose a number or factories to generate **selectors** from the library *reselect*. These are necessary to improve reselect performance.
   
  * name.component.tsx
   
    These files are **view** or **dumb** components. They must be passed data and actions. They render dom and present a view. These should be highly reusable.
   
  * name.component.scss
  
    These files are *component-specific* **styles**. They should not contain styles affecting more than the component and it's children.
   
* Folder Structure
  
  * Folder nesting
    
    Folders should not be nested more than necessary. This generally mean that files should be left in the same folder and not in a subfolder unless there are too many (more than approx. 7) files in one folder.
    Because of the amount of files for a container component, it is likely that all container components will have a new subfolder. 
     
    **example goes here**
     
   * Folder names
   
     Folders names should be **lowercase** and **kabob-case** (e.g. really-long-folder-name-example)
     
     The root folder of a container component should end in **-container**
   
* Files
  * File Names
    
    File names should be **lowercase** and **kabob-case** and should have the appropriate extension for the type of file (see file types)
    
##Coding Guidelines