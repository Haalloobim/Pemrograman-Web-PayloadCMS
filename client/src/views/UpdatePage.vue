<template>
    <div class="flex flex-row items-center justify-center min-h-screen gap-x-8">
        <div class="flex flex-col items-center p-8 gap-y-2 bg-white rounded-xl shadow-2xl">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Update Anime Data by ID</h1>
            <form ref="updateForm" class="">
                <div class="mb-4">
                    <label for="AnimeID" class="block text-gray-700 font-semibold">Anime ID Will Be Update:</label>
                    <input v-model="AnimeIDUpdate" type="text" id="AnimeIDUpdate" name="AnimeID" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="title" class="block text-gray-700 font-semibold">Anime Title:</label>
                    <input v-model="titleUpdate" type="text" id="titleUpdate" name="title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="rate" class="block text-gray-700 font-semibold">Rate:</label>
                    <input v-model="rateUpdate" type="number" id="rateUpdate" name="rate" step="0.1" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="studio" class="block text-gray-700 font-semibold">Studio:</label>
                    <input v-model="studioUpdate" type="text" id="studioUpdate" name="studio" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="updateDataByID"
                class="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                Update It!
            </button>
        </div>
        <div class="flex flex-col items-center p-8 gap-y-2 bg-white rounded-xl shadow-2xl">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Update Anime Data by Title</h1>
            <form ref="updateForm" class="">
                <div class="mb-4">
                    <label for="Title" class="block text-gray-700 font-semibold">Anime ID Will Be Update:</label>
                    <input v-model="TitleUpdate" type="text" id="TitleUpdate" name="Title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="title" class="block text-gray-700 font-semibold">Anime Title:</label>
                    <input v-model="titleByName" type="text" id="titleUpdate" name="title" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="rate" class="block text-gray-700 font-semibold">Rate:</label>
                    <input v-model="rateByName" type="number" id="rateUpdate" name="rate" step="0.1" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>

                <div class="mb-4">
                    <label for="studio" class="block text-gray-700 font-semibold">Studio:</label>
                    <input v-model="studioByName" type="text" id="studioUpdate" name="studio" required
                        class="w-full border border-gray-300 p-2 rounded" />
                </div>
            </form>
            <button @click="updateDataByTitle"
                class="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-700">
                Update It!
            </button>
        </div>
    </div>
    <ReadTable></ReadTable>
</template>

<script>
import ReadTable from "@/components/ReadTable.vue";
import qs from "qs";
export default {
    name: 'readPage',
    data() {
        return {
            url: "http://localhost:13337/api/anime/",
            animeID: "",
            AnimeIDUpdate: "",
            titleUpdate: "",
            rateUpdate: "",
            studioUpdate: "",
            TitleUpdate: "",
            titleByName: "",
            rateByName: "",
            studioByName: "",
        };
    },
    methods: {
        async updateDataByID() {
            try {
                const updateURL = `http://localhost:13337/api/anime/${this.AnimeIDUpdate}`;
                const response = await fetch(updateURL, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: this.titleUpdate,
                        rate: parseFloat(this.rateUpdate),
                        studio: this.studioUpdate,
                    }),
                });
                const data = await response.json();
                console.log(data);
                alert("Data Updated Successfully");
                this.resetForm();
            }
            catch (error) {
                console.error("Error updating data in the API:", error.message);
            }
        },
        async updateDataByTitle() {
            const stringifiedQuery = qs.stringify({
                where: {
                    title: {
                        contains: this.TitleUpdate,
                    },
                },
            }, { addQueryPrefix: true });
            try {
                const req = await fetch(`http://localhost:13337/api/anime/${stringifiedQuery}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: this.titleByName,
                        rate: parseFloat(this.rateByName),
                        studio: this.studioByName,
                    }),
                });
                const data = await req.json();
                console.log(data);
                alert("Data Updated Successfully");
                this.resetForm();
            }
            catch (err) {
                console.log(err);
            }
        },
        resetForm() {
            this.$refs.updateForm.reset();
            window.location.reload();
        },
    },
    components: { ReadTable }
}

</script>