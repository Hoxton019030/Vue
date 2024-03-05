import { createRouter ,createWebHashHistory} from 'vue-router'
import Home from "./components/Home.vue"
import Blog from "./components/Blog.vue"

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/Home",component:Home
        },
        {
            path:"/Blog",component:Blog
        }
    ]
});

export default router;