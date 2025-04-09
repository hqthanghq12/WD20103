import { createMemoryHistory, createRouter } from "vue-router";
import Lifecycle from "./components/Lifecycle.vue";
import VIF from "./components/V-IF.vue";
import Home from "./components/Home.vue";
const routes = [
    {path: "/", component:Home},
    {path: "/v-if", component:VIF},
];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
export default router;