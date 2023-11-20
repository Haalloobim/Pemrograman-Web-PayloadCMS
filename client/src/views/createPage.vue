<template>
    <div class=" flex flex-col items-center justify-center min-h-screen">
        <div class="flex flex-col items-center gap-y-2">
            <h1 class="block mb-2 text-3xl font-semibold text-gray-900">Add Data</h1>
            <form id="tambahDataForm" class="bg-white border border-black p-4 rounded-lg shadow-2xl">
                <div class="mb-4">
                <label for="title" class="block text-gray-700 font-semibold">Anime Title:</label>
                <input v-model="title" type="text" id="title" name="title" required
                    class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                <label for="rate" class="block text-gray-700 font-semibold">Rate:</label>
                <input v-model="rate" type="number" id="rate" name="rate" step="0.1" required
                    class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                <label for="studio" class="block text-gray-700 font-semibold">Studio:</label>
                <input v-model="studio" type="text" id="studio" name="studio" required
                    class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <button @click="addData" class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Add Data
                </button>
            </form>
        </div>
    </div>
</template>
  
<script>    

export default {
    name: 'CreatePage', 
    data () {
        return{
            url: "http://localhost:13337/api/anime/",
            title: "",
            rate: "",
            studio: "",
        }
    },
    methods: {
        async addData() {
            try {
                const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: this.title,
                    rate: parseFloat(this.rate),
                    studio: this.studio,
                }),
                });
                const data = await response.json();
                console.log(data);
                alert("Data Added Successfully");
                this.resetForm("tambahDataForm");
            } 
            catch (error) {
                console.error("Error adding data to the API:", error.message);
            }
        },
    }
}
</script>