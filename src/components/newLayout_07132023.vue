<template>
    <div class="article article--bio">
      <div>
  <b-card class="text-center overflow-hidden" bg-variant="dark" text-variant="white" no-body  style="max-width: 1240px;">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img src="https://muschealth.org/MUSCApps/HealthAssets/ProfileImages/Rockey_Don_GI.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="8"><br><br><br><br><br><br><br><br>
        <b-card-body class="ml-5" title="Raghu Kalluri, M.D., Ph.D."><br>
          <b-card-text>
            Department of Cancer Biology, Division of VP, Research
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
12345
      <!-- Article header -->
      <div class="article__header-bundle">
        <!-- Main image -->
        <div class="article__image--main">
          <!-- Commented out image, potentially for future use -->
          <!-- <img
            class="horizontal"
            src="https://www.roswellpark.org//sites/default/files/2019-11/abel-ethan-landscape-.jpg"
            alt=""
            https://muschealth.org/MUSCApps/HealthAssets/ProfileImages/Rockey_Don_GI.jpg
          /> -->
          <!-- Vertical image -->
          <!-- <img
            class="vertical"
            src="https://muschealth.org/-/sm/news-center-media/news-center-images/2017-images/10/dubois.ashx?h=666&w=1000&la=en&hash=EA10C2D6CF3E784279121BFCF213CF7C"
            alt=""
          /> -->
        
          <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-block m-auto">
    <div class="card">
    <img src="https://i.stack.imgur.com/Oh6WR.png" class="card-img img-fluid">
    <div class="card-body">
    <h2 class="card-title">Threads</h2>
    <p class="card-text">Illustration</p>
    </div>
    </div>
    </div>    			
  </div>
 

          

          <div>
        <b-card no-body class="overflow-hidden" style="max-width: 100%;" 
                >
        <b-row align-v="center" no-gutters>
       <b-col md="6">
      <b-card-img src="https://picsum.photos/200/200/?image=41" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="">
          
          <b-card-title class="text-center">{{membername}}</b-card-title>
        
          <b-card-text>
            This is a wider card with supporting text as a natural lead-in to additional content.
            This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>

        </div>
        <!-- Article title -->
        <div class="article__title">
          <div class="main-title">
            <h1 class="title">Raymond N. DuBois</h1>
            <div class="credentials">MD, PhD</div>
          </div>
          <div class="sub-title">
            <!-- Subtitle, potentially dynamic -->
            <div class="utext--i umt-1 utext--thin">{{ subTitle }}</div>
          </div>
        </div>
      </div>
      <!-- Article body -->
      <div class="article__body">
        <!-- Specialties section -->
        <div class="article__specialties">
          <div>
            <p class="umb-2">
              <em class="utext--muted utext--sm">Specializing In:</em>
            </p>
            <span
              >Cancer prevention, tumor microenvironment, inflammation and cancer
              colorectal cancer biology, early disease progression
            </span>
          </div>
        </div>
      </div>
      <!-- About section -->
      <h2 class="h2 section-title">About Raymond N. DuBois</h2>
      <section class="bio__about__biography">
        <h3 class="h3 section-title">Biography:</h3>
        <!-- Edit button for biography section -->
        <input          
          class="edit-btn"
          type="button"
          value="Editc"
          role="button"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef"
        />
        <!-- Display biography information -->
        <div class="person-info" v-for="(dataObj, i) in Biography" :key="i">
          <h5>{{ dataObj.ITEM }}</h5>
          <p>{{ dataObj.DATA }}</p>
        </div>
      </section>
      <!-- Positions section -->
      <section class="bio__credentials__positions">
        <h3 class="h3 section-title">Positions</h3>
        <b-button id="show-btn"  @click="OnEditClicked('Positions')" >Edit</b-button>   
        <!-- Card for Hollings Cancer Center position -->
        <b-card
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
          align="left"
          header-html="<span class='h5'> Hollings Cancer Center </span>"
        >
          <b-card-text>
            <!-- Display positions information -->
            <li v-for="(item, index) in selectedPositions" :key="index">
              {{ item.DATA }}
            </li>
          </b-card-text>
        </b-card>
      </section>
      <!-- Education and training section -->
      <section class="bio__credentials__background">
        <h3 class="h3 section-title">Background</h3>
        <!-- Education and training subsection -->
        <h4 class="h4">Education and Training:</h4>
        <!-- Edit button for education and training section -->
         <!-- <input      
          v-b-modal.modal-center
          role="button"
          class="btn btn-link"
          type="button"          
          value="Edit"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        />   -->

          <b-button id="show-btn"  @click="OnEditClicked('Education')" >Edit</b-button>   
        <!-- Display education and training information -->
        <div class="card-body">
          <li v-for="(item, index) in selectedEducationTraining" :key="index">
            {{ item.DATA }}
          </li>
        </div>
        <!-- Fellowship subsection -->
        <h4 class="h4">Fellowship:</h4>

        <b-button id="show-btn"  @click="OnEditClicked('Fellowship')" >Edit</b-button>   

        <!-- <input      
          v-b-modal.modal-center
          role="button"
          class="btn btn-link"
          type="button"          
          value="Edit"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        />  -->
        <!-- Display fellowship information -->
        <div class="card-body">
          <li v-for="(item, index) in selectedFellowship" :key="index">
            {{ item.DATA }}
          </li>
        </div>
        <!-- Professional memberships subsection -->

     
        <h4 class="h4">Professional Memberships:</h4>
        <b-button id="show-btn"  @click="OnEditClicked('Memberships')" >Edit</b-button>   
          <!-- <input      
          v-b-modal.modal-center
          role="button"
          class="btn btn-link"
          type="button"          
          value="Edit"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        />  -->
        <!-- Display professional memberships information -->
        <div class="card-body">
          <li v-for="(item, index) in selectedMemberships" :key="index">
            {{ item.DATA }}
          </li>
        </div>
        <!-- Honors and awards subsection -->
        <h4 class="h4">Honors and Awards:</h4>
        <b-button id="show-btn"  @click="OnEditClicked('HonorsAwards')" >Edit</b-button>   
        <!-- <input      
          v-b-modal.modal-center
          role="button"
          class="btn btn-link"
          type="button"          
          value="Edit"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef; border: 1px solid #ccc; border-radius: 4px; cursor: pointer;"
        />  -->
        <!-- Display honors and awards information -->
        <div class="card-body">
          <li v-for="(item, index) in selectedHonorsAwards" :key="index">
            {{ item.DATA }}
          </li>
        </div>
      </section>
      <!-- Horizontal line to separate sections -->
      <hr />
      <section class="article__content--research" id="research">
        <h2 class="h2 section-title">Research</h2>
        <h4 class="h4">Research Overview:</h4>
        <div class="card-body">
          <div v-for="(item, index) in ResearchOverview" :key="index">
            {{ item.DATA }}
          </div>
        </div>
        <strong>Lab members:</strong>
  
        <div class="card-body">
          <div v-for="(item, index) in labMembers" :key="index">
            {{ item.ITEM }} {{ item.DATA }}
          </div>
        </div>
      </section>
  
      <section class="article__content--publications" id="publications">
        <h2 class="h2 section-title">Publications</h2>
        <br />
        <p>
          <a
            href="https://www.ncbi.nlm.nih.gov/myncbi/ethan.abel.1/bibliography/public/"
            class="olm-btn olm-btn--outline olm-btn--secondary umb-4"
            >Full Publications list on PubMed</a
          >
        </p>
        <div v-for="(item, index) in pubsData" :key="index">
          {{ item.ITEM }}. {{ item.DATA }}
        </div>
      </section>

       <!-- Modal for editing education and training information
      <b-modal id="showEducationModal" size="xl"  @shown="onModalShown" @ok="onModalOk" v-model="modalShow"> -->
       <b-modal id="showEducationModal" v-model="showEducationModal" size="xl"  @shown="onModalShown" @ok="onModalOk">
        <template slot="modal-title">{{ centeredTitle }}</template>
          <div class="form-group">
            <label for="input-year">Year:</label>
            <input type="text" class="form-control" id="input-year" placeholder="Enter year" v-model="newYear" @keyup.enter="onYearKeyUp" ref="yearInput">
          </div>
          <div class="form-group">
            <label for="input-data">Education/Training:</label>
            <input type="text" class="form-control" id="input-data" placeholder="Enter education/training" v-model="newData" @keyup.enter="onDataKeyUp" ref="dataInput">
            <input type="button" class="btn btn-info float-right" value="Add" @click="addNewData">
          </div>
          <table class="table text-left">
            <thead>
              <tr>
                <th scope="col">Selected</th>
                <th scope="col">Year</th>
                <th scope="col">Education/Training</th>
                <th scope="col" colspan="2">Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- Display education and training information -->
              <tr v-for="item in tempItem" :key="item.ITEM">
                <td class="td-checkbox align-middle"><input type="checkbox" v-model="item.isSelected"></td>
                <td class="td-item align-middle">{{ item.ITEM }}</td>
                <td class="td-data align-middle">{{ item.DATA }}</td>
                <td style="width: 5px;">
                  <button class="border-0 bg-white d-block text-center" @click="moveUptempItem(item)">
                    <i class="fas fa-sort-up"></i>
                  </button>
                  <button class="border-0 bg-white d-block text-center" @click="moveDowntempItem(item)">
                    <i class="fas fa-sort-down" ></i>
                  </button>
                </td>
                <td class="td-delete align-middle" style=" width: 10px; position: relative;">
                  <!-- Button to delete education and training information -->
                  <button class="border-0 bg-white" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" @click="deletetempItem(item)">
                    <i class="fas fa-trash-alt text-danger custom-icon"></i>
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </b-modal>
    </div>
  </template>
  <script>
    export default {
    
      setup() {},
  
      data() {
        return {
          subTitle: "",
          showEducationModal: false,          
          showModal: true,
          showEditButtons: false,
          mode:'',
          showEdit: true,
          pmids: "34487314,35659464,34400337,35734751,35275898",
          firstModalshow: true,
          newYear: '',
          newData: '',
          tempItem: [],
          membername:"Raymond N. DuBois",
          centeredTitle: 'Education and Training',
  
          pubsData: [
            {
              ITEM: "1",
              DATA: "bla bla pubmedx",
            },
            {
              ITEM: "2",
              DATA: "Title",
            },
          ],
  
          labMembers: [
            {
              ITEM: "Name",
              DATA: "Title",
            },
            {
              ITEM: "Name",
              DATA: "Title",
            },
          ],
  
          ResearchOverview: [
            {
              ITEM: "1",
              DATA: "Assistant Professor of Oncology",
              isSelected: true
            },
            {
              ITEM: "2",
              DATA: "Department of Molecular and Cellular Biology",
              isSelected: true
            },
          ],
  
          HonorsAwards: [
            {
              ITEM: "1",
              DATA: "Assistant Professor of Oncology",
              isSelected: true
            },
            {
              ITEM: "2",
              DATA: "Department of Molecular and Cellular Biology",
              isSelected: true
            },
          ],
  
          Memberships: [
            {
              ITEM: "1",
              DATA: "Assistant Professor of Oncology",
              isSelected: true
            },
            {
              ITEM: "2",
              DATA: "Department of Molecular and Cellular Biology",
              isSelected: true
            },
          ],
  
          Fellowship: [
            {
              ITEM: "1991",
              DATA: "The Johns Hopkins Hospital, Baltimore, MD",
              isSelected: true
            },
          ],
  
          EducationTraining: [
            {
              ITEM: "1988",
              DATA: "The Johns Hopkins Hospital, Baltimore, MD Osler Med Intern/Resident",
              isSelected: true
            },
            {
              ITEM: "1985",
              DATA: " University of Texas Health Science Center, San Antonio, TX",
              isSelected: true
            },
            {
              ITEM: "1981",
              DATA: "University of Texas Southwestern Medical Center, Dallas, TX PhD",
              isSelected: true
            },
          ],
  
          Positions: [
            {
              ITEM: "1",
              DATA: "Director, Hollings Cancer Center",
              isSelected: true
            },
            {
              ITEM: "2",
              DATA: "Dean of Medicine and Distinguished University Professor",
              isSelected: true
            },
          ],
  
          Biography: [
            {
              ITEM: "Pre-graduate Research Experience",
              DATA: "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors.",
            },
            {
              ITEM: "Doctoral Dissertation",
              DATA: "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors.",
            },
            {
              ITEM: "Postdoctoral Research",
              DATA: "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors.",
            },
            {
              ITEM: "Summary of Research Accomplishments",
              DATA: "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors.",
            },
          ],
  
        };
      },
      methods: {  
    //     showEducationModal() {
    //     this.$refs['modal-center'].show()
    //   },
    OnEditClicked(arg) {
        switch (arg) {
        case 'Positions':
        this.centeredTitle ="Edit Positions";
        this.tempItem = JSON.parse(JSON.stringify(this.Positions));
        this.mode = "Positions"
        break;
        case 'Education':
        this.centeredTitle ="Edit Education and Training";
        this.tempItem = JSON.parse(JSON.stringify(this.EducationTraining));
        this.mode = "Education"
        break;
        case 'Fellowship':
        this.centeredTitle ="Edit Fellowship";
        this.tempItem = JSON.parse(JSON.stringify(this.Fellowship));
        this.mode = "Fellowship"
        break;
        case 'Memberships':
        this.centeredTitle ="Edit Memberships";
        this.tempItem = JSON.parse(JSON.stringify(this.Memberships));
        this.mode = "Memberships"
        break;
        case 'HonorsAwards': 
        this.centeredTitle ="Edit Honors and Awards";
        this.tempItem = JSON.parse(JSON.stringify(this.HonorsAwards));
        this.mode = "HonorsAwards"


        break;
        default:
        break;
        }


     
      //Other properties which the modal needs... 
      this.showEducationModal = true;
    },
        onModalShown() {
          // Clear the year and data fields
          if (this.firstModalshow) {
            this.newYear = '';
            this.newData = '';
            this.$refs.yearInput.focus();
          //  this.tempItem = JSON.parse(JSON.stringify(this.EducationTraining));
            this.firstModalshow = false;
          }
          
        },
  
        onYearKeyUp(event) {
          const year = event.target.value.trim();
          if (year.length > 0) {
            // Move the focus to the data input field if the year input is not empty
            this.yearInputFocused = false;
            this.$nextTick(() => {
              this.$refs.dataInput.focus();
            });
          } else {
            // Show an error notification if the year input is empty
            this.$bvToast.toast('Please enter a year', {
              title: 'Error',
              variant: 'danger',
              autoHideDelay: 3000
            });
          }
        },
  
        onDataKeyUp(event) {
          const data = event.target.value.trim();
          if (data.length > 0) {
            const year = this.newYear.trim();
            if (year.length > 0) {
              // Add the new item to the temporary array if both inputs are not empty
              this.tempItem.push({
                ITEM: year,
                DATA: data
              });
              this.newYear = '';
              this.newData = '';
              this.$refs.yearInput.focus();
            } else {
              // Show an error notification if the year input is empty
              this.$bvToast.toast('Please enter a year', {
                title: 'Error',
                variant: 'danger',
                autoHideDelay: 3000
              });
              this.$nextTick(() => {
                this.$refs.yearInput.focus();
              });
            }
          } else {
            // Show an error notification if the data input is empty
            this.$bvToast.toast('Please enter education/training', {
              title: 'Error',
              variant: 'danger',
              autoHideDelay: 3000
            });
          }
        },
        addNewData() {
          const year = this.newYear.trim();
          const data = this.newData.trim();
          if (year.length > 0 && data.length > 0) {
            // Add the new item to the temporary array if both inputs are not empty
            this.tempItem.push({
              isSelected: true,
              ITEM: year,
              DATA: data
            });
            this.newYear = '';
            this.newData = '';
            this.$refs.yearInput.focus();
          } else {
            // Show an error toast and focus the empty input field
            if (year.length === 0 && data.length === 0) {
              this.$bvToast.toast('Please enter a year and education/training', {
                title: 'Error',
                variant: 'danger',
                autoHideDelay: 3000
              });
              this.$refs.yearInput.focus();
            } else if (year.length === 0) {
              this.$bvToast.toast('Please enter a year', {
                title: 'Error',
                variant: 'danger',
                autoHideDelay: 3000
              });
              this.$refs.yearInput.focus();
            } else if (data.length === 0) {
              this.$bvToast.toast('Please enter education/training', {
                title: 'Error',
                variant: 'danger',
                autoHideDelay: 3000
              });
              this.$refs.dataInput.focus();
            }
          }
        },
        onModalOk() {
            switch (this.mode){
                case 'Positions':
             if (JSON.stringify(this.Positions) !== JSON.stringify(this.tempItem)) {
              this.$bvToast.toast('Positions details updated successfully', {
              title: 'Success',
              variant: 'success',
              autoHideDelay: 3000
             });   
            // Add the temporary item to the EducationTraining array
            this.Positions = null;
            this.Positions = JSON.parse(JSON.stringify(this.tempItem));            
            // Clear the temporary item and the input fields
            this.newYear = '';
            this.newData = '';
            this.yearInputFocused = true;
            }
           break;

            case 'Education':            
          // Check if there are updates to the EducationTraining array
          if (JSON.stringify(this.EducationTraining) !== JSON.stringify(this.tempItem)) {
            // Show a success notification if there are updates
              this.$bvToast.toast('Education and training details updated successfully', {
              title: 'Success',
              variant: 'success',
              autoHideDelay: 3000
            });
            // Add the temporary item to the EducationTraining array
            this.EducationTraining = null;
            this.EducationTraining = JSON.parse(JSON.stringify(this.tempItem));            
            // Clear the temporary item and the input fields
            this.newYear = '';
            this.newData = '';
            this.yearInputFocused = true;
            }
             break;

             case 'Fellowship':
             if (JSON.stringify(this.Fellowship) !== JSON.stringify(this.tempItem)) {
              this.$bvToast.toast('Fellowship details updated successfully', {
              title: 'Success',
              variant: 'success',
              autoHideDelay: 3000
             });   
            // Add the temporary item to the EducationTraining array
            this.Fellowship = null;
            this.Fellowship = JSON.parse(JSON.stringify(this.tempItem));            
            // Clear the temporary item and the input fields
            this.newYear = '';
            this.newData = '';
            this.yearInputFocused = true;
            }
           break;

           case 'Memberships':
           if (JSON.stringify(this.Memberships) !== JSON.stringify(this.tempItem)) {
              this.$bvToast.toast('Memberships details updated successfully', {
              title: 'Success',
              variant: 'success',
              autoHideDelay: 3000
             });   
            // Add the temporary item to the EducationTraining array
            this.Memberships = null;
            this.Memberships = JSON.parse(JSON.stringify(this.tempItem));            
            // Clear the temporary item and the input fields
            this.newYear = '';
            this.newData = '';
            this.yearInputFocused = true;
            }

           break;


           case 'HonorsAwards':
           if (JSON.stringify(this.HonorsAwards) !== JSON.stringify(this.tempItem)) {
              this.$bvToast.toast('Honors and Awards details updated successfully', {
              title: 'Success',
              variant: 'success',
              autoHideDelay: 3000
             });   
            // Add the temporary item to the EducationTraining array
            this.HonorsAwards = null;
            this.HonorsAwards = JSON.parse(JSON.stringify(this.tempItem));            
            // Clear the temporary item and the input fields
            this.newYear = '';
            this.newData = '';
            this.yearInputFocused = true;
            }

           break;
        }
        },


        moveUptempItem(item){
            const index = this.tempItem.indexOf(item);
            if (index > 0) {
                this.tempItem.splice(index, 1);
                this.tempItem.splice(index - 1, 0, item);             
              }
        },

        moveDowntempItem(item){
            const index = this.tempItem.indexOf(item);
            if ( index < this.tempItem.length - 1) {
                this.tempItem.splice(index, 1);
                this.tempItem.splice(index + 1, 0, item);        
          
          }
        },

        deletetempItem(item) {
          // Remove the item from the table and the data() object
          const index = this.tempItem.indexOf(item);
          if (index > -1) {
            this.tempItem.splice(index, 1);
          }
        }
      },
      computed: {

        selectedPositions() {
          return this.Positions.filter(item => item.isSelected);
        },

        selectedEducationTraining() {
          return this.EducationTraining.filter(item => item.isSelected);
        },
        selectedFellowship(){
            return this.Fellowship.filter(item => item.isSelected);
        } , 
        selectedHonorsAwards(){
            return this.HonorsAwards.filter(item => item.isSelected);
        }  ,

        selectedMemberships(){
            return this.Memberships.filter(item => item.isSelected);
        }  



        
      }
    };
  </script>
  
  <style>
  .card-img{
   width: 25%!important;
   height: 200px!important;
   object-fit: cover;
}
    .article.article--bio
    .article__image--main:not(.no-landscape)
    + .article__title {
      background-color: rgba(0, 86, 184, 0.9) !important;
      box-shadow: 0 8px 16px rgb(0 0 0 / 45%);
      color: #fff !important;
      display: inline-block;
      margin: -3.75rem 0 0 1.5rem;
      padding: 0.5rem 1rem 1rem;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
    }
    .article.article--bio .article__title .main-title * {
      display: inline-block;
      margin-bottom: 0;
    }
  
    .article.article--bio .article__title .main-title .credentials {
      font-size: 150%;
      margin-left: 0.5rem;
    }
  
    .article__title .title {
      font-size: 3rem;
      line-height: 3.5rem;
      color: #fff;
    }
  
    .article__header-bundle {
      margin-bottom: 2rem;
    }
    
  
  </style>
  