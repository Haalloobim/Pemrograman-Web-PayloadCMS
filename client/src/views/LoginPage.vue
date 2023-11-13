<template>
    <div class="landing">
        <header class="h-screen bg-slate-100">
            <div class="container h-full m-auto flex">
                <div class="m-auto pt-12 pb-10 px-8 rounded-lg shadow-2xl bg-white">
                    <h1 class="text-4xl font-crimson pb-3 px-3 item">Login Page</h1>
                    <form>
                        <div class="py-2 px-4 text-lg leading-6 space-y-4 text-gray-200">
                            <div class="relative">
                                <input autocomplete="off" v-model="email" id="email"  type="email"
                                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="email" />
                                <label for="email"
                                    class="cursor-pointer absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                            </div>
                            <div class="relative">
                                <input autocomplete="off" v-model="password" id="password" name="password" type="password"
                                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                    placeholder="Password" />
                                <label for="password"
                                    class="cursor-pointer absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div class="relative">
                                <button @click="confirm()"  
                                    class="mt-2 inline-block rounded bg-[#3B71CA] px-6 pb-2 pt-2.5 text-sm tracking-wider font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    </div>
</template>
  
<script>    

export default {
    name: 'LoginPage',
    data () {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        // async login(){

        // }
    }
}
</script>