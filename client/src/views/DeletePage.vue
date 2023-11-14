<template>
    <div class="flex flex-row items-center justify-center min-h-screen gap-x-8 bg-slate-50">
        <div class="flex flex-col items-center p-8 gap-y-2 bg-white rounded-xl shadow-2xl">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Delete Anime Data by ID</h1>
            <form ref="DeleteForm" class="p-4 rounded">
                <div class="mb-4">
                    <label for="AnimeID" class="block text-gray-700 font-semibold">Anime ID Will Be Delete:</label>
                    <input v-model="AnimeIDDelete" type="text" id="AnimeIDDelete" name="AnimeID" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="DeleteDataByID"
                class="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700">
                Delete It!
            </button>
        </div>
        <div class="flex flex-col items-center p-8 gap-y-2 bg-white rounded-xl shadow-2xl">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Delete Anime Data by Title</h1>
            <form ref="DeleteForm" class=" p-4 rounded ">
                <div class="mb-4">
                    <label for="Title" class="block text-gray-700 font-semibold">Anime ID Will Be Delete:</label>
                    <input v-model="TitleDelete" type="text" id="TitleDelete" name="Title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="DeleteDataByTitle"
                class="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700">
                Delete It!
            </button>
        </div>
    </div>
</template>

<script>
import qs from "qs";
export default {
    name: 'deletePage',
    data() {
        return {
            url: "http://localhost:13337/api/anime/",
            animeID: "",

            AnimeIDDelete: "",
            titleDelete: "",
            rateDelete: "",
            studioDelete: "",

            TitleDelete: "",
            titleByName: "",
            rateByName: "",
            studioByName: "",
        };
    },
    methods: {
        async DeleteDataByID() {
            try {
                const DeleteURL = `http://localhost:13337/api/anime/${this.AnimeIDDelete}`;
                const response = await fetch(DeleteURL, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                console.log(data);
                alert("Data Deleted Successfully");
                this.resetForm();
            } catch (error) {
                console.error("Error updating data in the API:", error.message);
            }
        },

        async DeleteDataByTitle() {
            const stringifiedQuery = qs.stringify({
                where: {
                    title: {
                        contains: this.TitleDelete,
                    },
                },
            }, { addQueryPrefix: true });

            try {
                const req = await fetch(`http://localhost:13337/api/anime/${stringifiedQuery}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                const data = await req.json()
                console.log(data);
                alert("Data Deleted Successfully");
                this.resetForm();
            } catch (err) {
                console.log(err)
            }
        },

        resetForm() {
            this.$refs.DeleteForm.reset();
        },
    },
}

</script>