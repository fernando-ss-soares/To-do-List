import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import Tarefas from "../views/Tarefas.vue"

const router : RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tarefas
}];

const browserRouter = createRouter({
    history: createWebHashHistory(),
    routes: router,
});

export default browserRouter;