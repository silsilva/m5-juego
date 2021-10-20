import { welcomePage } from "../src/pages/welcome";
import { rulesPage } from "../src/pages/rules";
import { initGamePage } from "../src/pages/game";
import { resultsPage } from "./pages/results";

export function initRouter(container:Element)


{function goTo(path)
{
history.pushState({},"",path)
handleRoute(path)

}
function handleRoute(route)
{console.log("el handle recibió  una nueva ruta", route);

const contenedorEl=document.querySelector(".contenedor");

const routes = [
  {
    path: /\/welcome/,
    component: welcomePage,
  },
  {
    path: /\//,
    component: welcomePage,
  },
  {
    path: /\/rules/,
    component: rulesPage,
  },
  {
    path: /\/game/,
    component: initGamePage,
  },
  {
 
 
    path: /\/results/,
    component: resultsPage,
  },
]


for (const r of routes){
  if(r.path.test(route))
{const el = r.component({goTo:goTo});

if(container.firstChild)
{container.firstChild.remove();}
container .appendChild(el);
}
}
}
handleRoute(location.pathname)
window.onpopstate=function(){
handleRoute(location.pathname)
}
}
