    <template>
        <div class=" flex flex-col items-center justify-center min-h-screen w-4/5 ">
            <h1 class="block mb-2 text-md font-medium text-gray-900">Data Anime</h1>
            <div :id="'Result'" class="w-3/5"></div>
            <table class="border border-collapse w-full anime-table">
                <tr class="bg-gray-200">
                    <th class="p-2 text-center">Anime ID</th>
                    <th class="p-2 text-center">Anime Title</th>
                    <th class="p-2 text-center">Rating</th>
                    <th class="p-2 text-center">Studio</th>
                </tr>
                <tr v-for="i in temp" :key="i.id">
                    <td class="p-2 text-center">{{ i.id }}</td>
                    <td class="p-2 text-center">{{ i.title }}</td>
                    <td class="p-2 text-center">{{ i.rate }}</td>
                    <td class="p-2 text-center">{{ i.studio }}</td>
                </tr>
            </table>
        </div>
    </template>
    
    <script>

    export default {
        name: 'readPage',
        data() {
            return {
                url: "http://localhost:13337/api/anime/", 
                temp: [], 
            };
        },
        mounted() {
            this.loadData();
        },
        methods: {
            async loadData() {
                try {
                    const response = await fetch(this.url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    });
                    const data = await response.json();
                    console.log(data);
                    this.temp = data.docs;
                } 
                catch (error) {
                    console.error("Error adding data to the API:", error.message);
                }
            },
        }
    }
    </script>