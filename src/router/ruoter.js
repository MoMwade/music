// import Home from '@/views/home/index.vue'
// import mian from '@/views/mian'
// import request from '@/views/request/index.vue'
import HomePage from '@/views/HomePage/index.vue'

export default [
    {path:'/',redirect:'/HomePage'},
    // {path:'/home',name:'home',component:Home},
    // {path:'/mian',name:'mian',component:mian},
    // {path:'/req',name:'request',component:request},
    {path:'/HomePage',name:'HomePage',component:HomePage},
    {path:'/SingingListDetails',name:'SingingListDetails',component:()=> import("@/views/HomePage/SongDirectory/SingingListDetails.vue")},
    {path:'/login',name:'login',component:()=> import("@/views/login")},
    {path:'/captcha',name:'captcha',component:()=> import("@/views/login/captcha")},
    {path:'/user',name:'user',component:()=> import("@/views/MyUserInterface")},
    {path:'/MV',name:'mv',component:()=> import("@/views/MVRanking")},
    {path:'/PV',name:'pv',component:()=> import("@/views/MVRanking/PlyrVifeo")},
    {path:'/phonograph',name:'phonograph',component:()=> import("@/components/AudioPlayer/phonograph")},
]