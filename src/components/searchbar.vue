<template>
  <div class="search">
    <div class="keyword-search">
        <br>
        <br>
        <br>
      <h5>Search</h5>
    </div>
    <div class="mt-2">
      <!-- <div role="group">
        <label for="first-name" class="text-info mb-2">First Name:</label>
        <b-form-input id="first-name" trim></b-form-input>
      </div>
      <div class="my-3">
        <p>or</p>
      </div> -->
      <div role="group" >       
        <label for="last-name" class="text-info mb-2">Last Name:</label>
        <b-form-input id="last-name" trim></b-form-input>
      </div>
      <div class="my-3">
        <p>or</p>
      </div>
      <div role="group">
        <label for="research-interest" class="text-info mb-2"
          >Research Interest:</label
        >
        <b-form-input id="research-interest" trim></b-form-input>
      </div>
      <div class="mt-4">
        <input
          class="search-btn"
          type="button"
          value="Search"
          role="button"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef"
        />
      </div>
    </div>

    <div class="mt-3 keyword-search">
      <h5>selection below</h5>
    </div>
    <div class="mt-2">
      <div class="mb-3" role="group">
        <label for="college" class="text-info mb-2">College:</label>
        <b-form-select :options="colleges"></b-form-select>
      </div>
      <div class="mb-3" role="group">
        <label for="division" class="text-info mb-2"
          >Primary Department:</label
        >
        <b-form-select :options="divisions"></b-form-select>
      </div>
      <div class="mb-3" role="group">
        <label for="program" class="text-info mb-2">Program:</label>
        <b-form-select :options="programs"></b-form-select>
      </div>
    </div>

    <div class="mt-3 keyword-search">
      <h5>Browse Alphabetically</h5>
      <div class="alphabets">
        <a href="#">A</a>
        <a href="#">B</a>
        <a href="#">C</a>
        <a href="#">D</a>
        <a href="#">E</a>
        <a href="#">F</a>
        <a href="#">G</a>
        <a href="#">H</a>
        <a href="#">I</a>
        <a href="#">J</a>
        <a href="#">K</a>
        <a href="#">L</a>
        <a href="#">M</a>
        <a href="#">N</a>
        <a href="#">O</a>
        <a href="#">P</a>
        <a href="#">Q</a>
        <a href="#">R</a>
        <a href="#">S</a>
        <a href="#">T</a>
        <a href="#">U</a>
        <a href="#">V</a>
        <a href="#">W</a>
        <a href="#">X</a>
        <a href="#">Y</a>
        <a href="#">Z</a>&nbsp;&nbsp;
        <a href="#">VIEW ALL</a>
      </div>

      <div class="mt-3 search-form">
        <input
          value="Export Member List to Excel"
          role="button"
          class="search-btn"
          type="button"
          aria-disabled="false"
          style="height: 40px; width: 220px; background-color: #efefef"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      colleges: [
        { value: "dental-medicine", text: "Dental Medicine" },
        { value: "medicine", text: "Medicine" },
        { value: "nursing", text: "Nursing" },
        { value: "pharmacy", text: "Pharmacy" },
      ],

      divisions: [
        { value: "dental-medicine", text: "Dental Medicine" },
        { value: "medicine", text: "Medicine" },
        { value: "nursing", text: "Nursing" },
        { value: "pharmacy", text: "Pharmacy" },
      ],

      programs: [
        { value: "dental-medicine", text: "Dental Medicine" },
        { value: "medicine", text: "Medicine" },
        { value: "nursing", text: "Nursing" },
        { value: "pharmacy", text: "Pharmacy" },
      ],
    };
  },
};
</script>
<style>
</style>