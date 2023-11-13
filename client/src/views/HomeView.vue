<template>
  <div class="pt-10 flex flex-col items-center justify-center min-h-screen mb-8">
    <div class="flex flex-col container w-[45%] bg-white rounded-lg shadow-xl pt-4 pb-4 gap-y-2">
      <div id="Big" class="font-semibold text-xl font-inter">  
        Welcome to Payload CRUD Website.
      </div>
      <div id="redirect" class="flex flex-col gap-2 justify-center items-center">  
        <div class="font-medium text-lg ">
          <p>To get Started...</p>
        </div>
        <div class="flex flex-row gap-6">
          <a class="w-32 py-2 px-5 bg-[#F5D106] transition-all ease-in-out duration-75 hover:bg-[#FDE59B]  text-center justify-center items-center rounded-lg font-medium border-[#212121] border-2" href="/login">Login</a>
          <a class="w-32 py-2 px-5 bg-green-500 transition-all ease-in-out duration-75 hover:bg-green-400  text-center justify-center items-center rounded-lg font-medium border-[#212121] border-2" href="/register">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
}
</script>
