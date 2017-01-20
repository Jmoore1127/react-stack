import {AppContainer} from '../src/app-container/app.container';
import {TodoContainer} from "../src/todo-container/todo.container";
import {ClickContainer} from "../src/click-container/click.container";
import {WelcomeComponent} from "../src/welcome/welcome.component";
export const rootRoute = {
  childRoutes: [
    {
      path: '/',
      indexRoute: {component: WelcomeComponent},
      component: AppContainer,
      childRoutes: [

        {
          path: '/click',
          component: ClickContainer
        },
        {
          path: '/todo',
          component: TodoContainer
        }
      ]
    }
  ]
};