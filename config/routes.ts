import {AppContainer} from '../src/app-container/app.container';
import {ClickContainer} from "../src/click-container/click.container";
import {TodoContainer} from "../src/todo-container/todo.container";
import {WelcomeComponent} from "../src/welcome/welcome.component";

//TODO make components lazy load
export const rootRoute = {
    childRoutes: [
        {
            path       : '/',
            indexRoute : {component: WelcomeComponent},
            component  : AppContainer,
            childRoutes: [

                {
                    path     : 'click',
                    component: ClickContainer
                },
                {
                    path     : 'todo(/:id)',
                    component: TodoContainer,
                }
            ]
        }
    ]
};
