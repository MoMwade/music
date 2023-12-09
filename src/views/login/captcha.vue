<script>
export default {
    data(){
        return {
            captcha: '',
            errorInfo: '',
            focused: false,
        }
    },
    methods:{
        async LoginCellphone(){
            await this.$store.dispatch('requestLoginCellphone',{
                    phone:this.$route.query.phone,
                    captcha:this.captcha
                })
            await this.$store.dispatch('requestUserDetail',{
                    uid:this.$store.state.auth.account.id
                })
        },
        
        focusinput(){
            this.$refs.input.focus()
            this.focused = true
        }
    },
    watch: {
        captcha(value) {
            if (value.length >= 4) {
                this.LoginCellphone()
            }
        },
    },
}
</script>

<template>
  <div class="pt-[15vw] w-[80%] m-auto">
    <div class=" text-gray-400 flex justify-between text-[3vw]">
        <Icon icon="mdi:remove" />
        <p>游客登录</p>
    </div>
    <div class=" text-left mt-[8vw]">
        <h1 class="text-[5vw]">输入验证码</h1>
        <p>验证码已发送至 +{{$route.query.code}} {{$route.query.phone}}</p>
    </div >
    <div class="mt-[5vw]" @click="focusinput">
        <input type="tel" v-model="captcha" ref="input" class="w-[0] h-[0]">
        <van-password-input
            :value="captcha"
            :gutter="10"
            :length="4"
            :mask="false"
            :focused="focused"
            class="bord"
            />
    </div>

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

    select {
        border-right: 0.4vw solid rgb(230, 231, 232);
        height: 50%;
    }

    .iconremove {
        color: rgb(193, 193, 194);
    }

    .bord li{
        color: brown;
        font-weight: 900;
        border-bottom: 0.5vw solid rgb(228, 228, 228);
    }

    .van-password-input__item--focus{
        border-bottom: 1vw solid rgb(172, 167, 167) !important;
    }
</style>