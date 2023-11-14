<template>
    <div class="flex flex-row items-center justify-center min-h-screen gap-x-8">
        <div class="flex flex-col items-center gap-y-2">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Delete Anime Data by ID</h1>
            <form ref="DeleteForm" class="bg-white p-4 rounded shadow-md">
                <div class="mb-4">
                    <label for="AnimeID" class="block text-gray-700 font-semibold">Anime ID Will Be Delete:</label>
                    <input v-model="AnimeIDDelete" type="text" id="AnimeIDDelete" name="AnimeID" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="title" class="block text-gray-700 font-semibold">Anime Title:</label>
                    <input v-model="titleDelete" type="text" id="titleDelete" name="title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="rate" class="block text-gray-700 font-semibold">Rate:</label>
                    <input v-model="rateDelete" type="number" id="rateDelete" name="rate" step="0.1" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="studio" class="block text-gray-700 font-semibold">Studio:</label>
                    <input v-model="studioDelete" type="text" id="studioDelete" name="studio" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="DeleteDataByID"
                class="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                Delete It!
            </button>
        </div>
        <div class="flex flex-col items-center gap-y-2">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Delete Anime Data by Title</h1>
            <form ref="DeleteForm" class="bg-white p-4 rounded shadow-md">
                <div class="mb-4">
                    <label for="Title" class="block text-gray-700 font-semibold">Anime ID Will Be Delete:</label>
                    <input v-model="TitleDelete" type="text" id="TitleDelete" name="Title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="title" class="block text-gray-700 font-semibold">Anime Title:</label>
                    <input v-model="titleByName" type="text" id="titleDelete" name="title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="rate" class="block text-gray-700 font-semibold">Rate:</label>
                    <input v-model="rateByName" type="number" id="rateDelete" name="rate" step="0.1" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="studio" class="block text-gray-700 font-semibold">Studio:</label>
                    <input v-model="studioByName" type="text" id="studioDelete" name="studio" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="DeleteDataByTitle"
                class="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                Delete It!
            </button>
        </div>
    </div>
</template>

<script>
import qs from "qs";
export default {
    name: 'readPage',
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
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: this.titleDelete,
                        rate: parseFloat(this.rateDelete),
                        studio: this.studioDelete,
                    }),
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
                    body: JSON.stringify({
                        title: this.titleByName,
                        rate: parseFloat(this.rateByName),
                        studio: this.studioByName,
                    }),
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