const { createApp, ref } = Vue

createApp({
  data() {
    return {
      url: "http://localhost:13337/api/anime/",
      title: "",
      rate: "",
      studio: "",
      animeID: "",
      AnimeIDUpdate: "",
      titleUpdate: "",
      rateUpdate: "",
      studioUpdate: "",
    }
  },
  methods: {
    async load() {
      try {
        let response = await fetch(this.url);
        let data = await response.json();
        console.log(data);
        this.readData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error.message);
        document.getElementById("Result").innerHTML =
          "<p>Error fetching data from the API</p>";
      }
    },
    readData(data) {
      let ResultElement = document.getElementById("Result");
      ResultElement.innerHTML = "";

      let table = document.createElement("table");
      table.classList.add("border", "border-collapse", "w-full", "anime-table");

      let headerRow = document.createElement("tr");
      headerRow.classList.add("bg-gray-200");

      let idHeader = document.createElement("th");
      idHeader.textContent = "Anime ID";
      idHeader.classList.add("p-2", "text-center");

      let titleHeader = document.createElement("th");
      titleHeader.textContent = "Anime Title";
      titleHeader.classList.add("p-2", "text-center");

      let ratingHeader = document.createElement("th");
      ratingHeader.textContent = "Rating";
      ratingHeader.classList.add("p-2", "text-center");

      let studioHeader = document.createElement("th");
      studioHeader.textContent = "Studio";
      studioHeader.classList.add("p-2", "text-center");

      headerRow.appendChild(idHeader);
      headerRow.appendChild(titleHeader);
      headerRow.appendChild(ratingHeader);
      headerRow.appendChild(studioHeader);

      table.appendChild(headerRow);

      data.docs.forEach((item) => {
        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.textContent = item.id;
        idCell.classList.add("p-2", "text-center");

        let titleCell = document.createElement("td");
        titleCell.textContent = item.title;
        titleCell.classList.add("p-2", "text-center");

        let ratingCell = document.createElement("td");
        ratingCell.textContent = item.rate;
        ratingCell.classList.add("p-2", "text-center");

        let studioCell = document.createElement("td");
        studioCell.textContent = item.studio;
        studioCell.classList.add("p-2", "text-center");

        row.appendChild(idCell);
        row.appendChild(titleCell);
        row.appendChild(ratingCell);
        row.appendChild(studioCell);
        table.appendChild(row);
      });

      table.classList.add("table-auto");

      ResultElement.appendChild(table);
    },
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
      } catch (error) {
        console.error("Error adding data to the API:", error.message);
      }
    },
    async deleteData() {
      try {
        const deleteURL = `http://localhost:13337/api/anime/${this.animeID}`;
        const response = await fetch(deleteURL, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
        alert(`Data with id ${this.animeID} Successfully deleted`);
        this.resetForm("ThisDeletedForm");
      } catch (error) {
        console.error("Error deleting data from the API:", error.message);
      }
    },
    async updateData() {
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
        this.resetForm("UpdateForm");
      } catch (error) {
        console.error("Error updating data in the API:", error.message);
      }
    },
    resetForm(formId) {
      document.getElementById(formId).reset();
    },
  },
}).mount('#app'); 