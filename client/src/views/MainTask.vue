<template>
    <div class="container min-h-screen min-w-full bg-slate-50 flex items-center justify-center p-8">
        <div class="min-h-fit flex flex-col gap-y-16">
            <div class=" text-center items-center">
                <h1 class="text-5xl font-bold">
                    Action Selection
                </h1>
                <p class="text-success italic text-sm font-normal pt-2 hidden" id="text">
                    Data has been changed ^^
                </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <a href="/create">
                    <div class="container min-h-fit bg-white rounded-xl shadow-xl items-center justify-center text-center p-6 w-60 border-t-2 border-primary transition-all ease-in-out duration-100 hover:-translate-y-1">
                        <p class="text-lg font-semibold ">CREATE DATA</p>
                    </div>
                </a>
                <a href="/read">
                    <div class="container min-h-fit bg-white rounded-xl shadow-xl items-center justify-center text-center p-6 w-60 border-t-2 border-warning transition-all ease-in-out duration-100 hover:-translate-y-1">
                        <p class="text-lg font-semibold ">READ DATA</p>
                    </div>
                </a>
                <a href="update.php">
                    <div class="container min-h-fit bg-white rounded-xl shadow-xl items-center justify-center text-center p-6 w-60 border-t-2 border-success transition-all ease-in-out duration-100 hover:-translate-y-1">
                        <p class="text-lg font-semibold ">UPDATE DATA</p>
                    </div>
                </a>
                <a href="delete.php">
                    <div class="container min-h-fit bg-white rounded-xl shadow-xl items-center justify-center text-center p-6 w-60 border-t-2 border-danger transition-all ease-in-out duration-100 hover:-translate-y-1">
                        <p class="text-lg font-semibold ">DELETE DATA</p>
                    </div>
                </a>
            </div>
        </div>
  </div>
</template>
  
<script>

export default {
    name: 'MainTask'
}
</script>