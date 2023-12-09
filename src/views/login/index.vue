<script>
import { getCaptcha,getCountriesCodeList} from "@/service"
export default {
    data(){
        return {
            phone: '',
            captcha:'',
            removeSolid:false,
            check:false,
            show: false,
            indexList: [],
            CodeData:[],
            code:'86',
        }
    },
    methods:{
        empty(){
            this.phone = ''
        },
        async login(){
            if(!this.check) return alert('请阅读服务条款');
            if(!/^1[356789]\d{9}$/.test(this.phone)) return alert('手机号格式不正确');
             const[err,res] =  await getCaptcha({phone:this.phone})
            if(err) return alert('请求错误请稍后再试')
            alert("验证码发送成功请注意查收")
            console.log(res);
            this.$router.push({path:'/captcha',query:{phone:this.phone,code:this.code}})
        },
        showPopup() {
            this.show = true;
        },
        upCode(item){
            this.code = item
            this.show = false
        }
    },
    async created(){
        const [err,res] = await getCountriesCodeList()
        if(err) return alert('请求错误请稍后再试')
        let {data:{data}} = res
        data.forEach( item=> this.indexList.push(item.label))
        this.CodeData = data
    },
    updated(){
        this.phone.length != 0 ? this.removeSolid = true : this.removeSolid = false;
    }
}
</script>

<template>
  <div class="flex flex-col items-center pt-[15vw]">
    <!-- <input type="tel" v-model="phone" />
    <button @click="sendCode">发送验证码</button>
    <input type="number" maxlength="4" minlength="4" v-model="captcha">
    <button @click="login">登录</button> -->
    <div class=" text-gray-400 w-[80%] flex justify-between text-[3vw]">
        <Icon icon="mdi:remove" />
        <p>游客登录</p>
    </div>
    <Icon icon="ri:netease-cloud-music-fill" class="back w-[20vw] h-[20vw] mt-[5vw]" />
    <div class="w-[65vw] h-[13vw] bg-gray-100 rounded-[4vw] overflow-hidden font-black text-[3.8vw] mt-[10vw] flex items-center">
        <div @click="showPopup" class="w-[30%] h-[50%] sel inputBack flex justify-center items-center">
            <p>+{{code}}</p>
            <Icon icon="eva:arrow-up-fill" :rotate="2" />
        </div>
        <input type="tel" class="w-[60%] h-[100%] inputBack outline-none pl-[5vw]" v-model="phone">
         <div @click="empty" v-show="removeSolid">
            <Icon icon="clarity:remove-solid" class="iconremove" />
         </div>
    </div>
     <button class="btn" @click="login">获取验证码</button>
     <div class="flex mt-[5vw] text-[2.5vw] text-slate-300" >
        <input type="checkbox" name="box" v-model="check" class="w-[3vw] mr-[2vw]">
        <p>
            我已阅读并同意
            <a href="#">《服务条款》</a>、
            <a href="#">《隐私条款》</a>
        </p>
     </div>
     <van-popup
        v-model="show"
        closeable
        close-icon-position="top-left"
        position="bottom"
        round
        :style="{ height: '90%' }"
        class="text-black"
        >
        <h1 class=" text-center text-[5vw] font-bold mt-[4vw]">选择国家和地区</h1>
        <van-index-bar :index-list="indexList" class="mt-[6vw]">
            <template v-for="item in CodeData">
                <div :key="item.id">
                    <van-index-anchor :index="item.label">{{item.label}}</van-index-anchor>
                    <div v-for="countryList in item.countryList" :key="countryList.id">
                         <van-cell>
                            <div class="w-[90%] m-auto flex justify-between border-b-[0.5vw] border-solid  border-gray-200" @click="upCode(countryList.code)">
                                <p>{{countryList.zh}}</p>
                                <span class="text-[#b9b9b9]">+{{countryList.code}}</span>
                            </div>
                         </van-cell>  
                    </div>
                </div>
            </template>
            

            
            
            
            <!-- <van-cell title="文本" />
            ... -->
            </van-index-bar>
        </van-popup>
  </div>
</template>



<style scoped>
    .back{
        background: rgb(254, 254, 254);
        color: rgb(222, 64, 51);
    }
    .inputBack{
        background: rgb(242, 243, 244);
    }

    a {
        color: rgb(108, 139, 179);
    }

    .btn {
        width: 65vw;
        height: 10vw;
        margin-top: 5vw;
        background: rgb(222, 64, 51);
        color: rgb(254, 254, 254);  
        border-radius: 5vw;
        font-size: 4vw;
    }

    .sel {
        border-right: 0.5vw solid rgb(230, 231, 232);
        height: 50%;
    }

    .iconremove {
        color: rgb(193, 193, 194);
    }
</style>