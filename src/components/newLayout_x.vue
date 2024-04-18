<template> 
   <div class="article article--bio">

        <div class="article__header-bundle">
      <div class="article__image--main">
        <!-- <img
          class="horizontal"
          src="https://www.roswellpark.org//sites/default/files/2019-11/abel-ethan-landscape-.jpg"
          alt=""
          https://muschealth.org/MUSCApps/HealthAssets/ProfileImages/Rockey_Don_GI.jpg
        /> -->
        <img
          class="vertical"
          src="https://muschealth.org/-/sm/news-center-media/news-center-images/2017-images/10/dubois.ashx?h=666&w=1000&la=en&hash=EA10C2D6CF3E784279121BFCF213CF7C"
          alt=""
        />
      </div>
      <div class="article__title">
        <div class="main-title">
          <h1 class="title">Raymond N. DuBois</h1>
          <div class="credentials">MD, PhD</div>
        </div>
      
        <div class="sub-title">
          <div class="utext--i umt-1 utext--thin">{{subTitle}}</div>
        </div>
    </div>      
    </div>
    <div class="article__body" >
      <div class="article__specialties">
        <div>
          <p class="umb-2">
            <em class="utext--muted utext--sm">Specializing In:</em>
          </p>
          <span>Cancer prevention, tumor microenvironment, inflammation and cancer colorectal cancer biology, early disease progression </span>
          
        </div>
      </div>
      </div>
      <h2 class="h2 section-title">About Raymond N. DuBois</h2>
      <section class="bio__about__biography">
            <h3 class="h3 section-title">Biography:</h3>
          <input
          class="edit-btn"
          type="button"
          value="Edit"
          role="button"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef"
        />


            <div class="person-info" v-for="(dataObj, i) in Biography" :key="i">

           <h5>{{ dataObj.ITEM}}</h5>
           <p> {{ dataObj.DATA}} </p>
            </div> 
            </section>

          <section class="bio__credentials__positions">
            <h3 class="h3 section-title">Positions</h3>   

        <b-card
        border-variant="primary"       
        header-bg-variant="primary"
        header-text-variant="white"
        align="left"
        header-html = "<span class='h5'> Hollings Cancer Center </span>" >      
        <b-card-text>           
                  <li v-for="(item, index) in Positions" :key="index">                  
                {{ item.DATA}}
            </li>  
          </b-card-text> 
        
      </b-card>
           
        </section>

        <section class="bio__credentials__background">
            <h3 class="h3 section-title">Background</h3>
       
        <h4 class="h4">Education and Training:</h4>
        <!-- <input
          class="edit-btn"
          type="button"
          value="Edit"
          role="button"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef"
        /> -->

        <b-button style="height: 40px; color: black; border: none; width: 120px; background-color: #efefef" id="show-btn"
        @click="$bvModal.show('bv-modal-example')">Edit</b-button>

        <div class="card-body">             
                  <li v-for="(item, index) in EducationTraining" :key="index">                  
                {{ item.DATA}}
       </li>                
      </div>

      <h4 class="h4">Fellowship:</h4>
        <div class="card-body">             
                  <li v-for="(item, index) in Fellowship" :key="index">                  
                {{ item.DATA}}
       </li>                
      </div>

      <h4 class="h4">Professional Memberships:</h4>
        <div class="card-body">             
                  <li v-for="(item, index) in Memberships" :key="index">                  
                {{ item.DATA}}
       </li>                
      </div>

      <h4 class="h4">Honors and Awards:</h4>
        <div class="card-body">             
                  <li v-for="(item, index) in HonorsAwards" :key="index">                  
                {{ item.DATA}}
       </li>                
      </div>
 </section>
 <hr />
         <section class="article__content--research" id="research">
        <h2 class="h2 section-title">Research</h2>
        <h4 class="h4">Research Overview:</h4>
        <div class="card-body">             
                  <div v-for="(item, index) in ResearchOverview" :key="index">                  
                {{ item.DATA}}
                  </div>                
      </div>
      <strong>Lab members:</strong>

      <div class="card-body">             
                  <div v-for="(item, index) in labMembers" :key="index">                  
                {{ item.ITEM}} {{item.DATA}}
                  </div>                
      </div>


        </section>

        <section class="article__content--publications" id="publications">
       <h2 class="h2 section-title">Publications</h2>
<br>
       <p> <a
            href="https://www.ncbi.nlm.nih.gov/myncbi/ethan.abel.1/bibliography/public/"
            class="olm-btn olm-btn--outline olm-btn--secondary umb-4"
            >Full Publications list on PubMed</a
          >
</p>
                <div v-for="(item, index) in pubsData" :key="index">                  
                {{ item.ITEM}}.  {{item.DATA}}
                  </div>                


       </section>

       <b-modal id="bv-modal-example" hide-footer size="lg">
        <template #modal-title>
          Education and Training:
        </template>
        <b-form inline ref="form">

          <b-form-input id="inline-form-input-name" v-model="items" :state="nameState" class="mb-2 mr-sm-2 mb-sm-0" required style="width: 60px;" placeholder="ITEM"></b-form-input>
          <b-form-input id="inline-form-input-name" v-model="education" :state="nameState"  class="mb-2 mr-sm-2 mb-sm-0" style="width: 390px;" placeholder="Enter Education and Training" required></b-form-input>
          <b-button class="my-3" @click="addEducation">Add Education and Training</b-button>
        </b-form>
        <div class="d-block px-3">
          <li v-for="(item, index) in EducationTraining" :key="index">
            {{ item.DATA }}
          </li>
        </div>

      </b-modal>

 </div>

</template>
<script>

let id = 0
export default ({
    setup() {
        

    },

    data() {
			return {
    subTitle: "" ,
    showModal: true,
    showEdit: true,
    pmids: "34487314,35659464,34400337,35734751,35275898" ,

    
    pubsData:[{
                "ITEM": "1",
                "DATA": "bla bla pubmedx"
               },  
               {
                "ITEM": "2",
                "DATA": "Title"
                }],


    labMembers:[{
                "ITEM": "Name",
                "DATA": "Title"
               },  
               {
                "ITEM": "Name",
                "DATA": "Title"
                }],

    
    ResearchOverview:[{
                "ITEM": "1",
                "DATA": "Assistant Professor of Oncology"
               },  
               {
                "ITEM": "2",
                "DATA": "Department of Molecular and Cellular Biology"
                }],

    HonorsAwards:[{
                "ITEM": "1",
                "DATA": "Assistant Professor of Oncology"
               },  
               {
                "ITEM": "2",
                "DATA": "Department of Molecular and Cellular Biology"
                }],

     Memberships:[{
     "ITEM": "1",
      "DATA": "Assistant Professor of Oncology"
        },  
       {
     "ITEM": "2",
     "DATA": "Department of Molecular and Cellular Biology"
      }],



    Fellowship:[{
                "ITEM": "1991",
                "DATA": "The Johns Hopkins Hospital, Baltimore, MD"
               }],

   
    EducationTraining:[{
                "id": id++,
                "ITEM": "1988",
                "DATA": "The Johns Hopkins Hospital, Baltimore, MD Osler Med Intern/Resident"
               },  
               {
                "ITEM": "1985",
                "DATA": " University of Texas Health Science Center, San Antonio, TX"
                },  
               {
                "ITEM": "1981",
                "DATA": "University of Texas Southwestern Medical Center, Dallas, TX PhD"
                }],


    Positions:[{
                "ITEM": "1",
                "DATA": "Director, Hollings Cancer Center"
               },  
               {
                "ITEM": "2",
                "DATA": "Dean of Medicine and Distinguished University Professor"
                }],
    Biography:[{
                "ITEM": "Pre-graduate Research Experience",
                "DATA": "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors."
               },  
               {
                "ITEM": "Doctoral Dissertation",
                "DATA": "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors."
               },
               {
                "ITEM": "Postdoctoral Research",
                "DATA": "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors."
               },
               {
                "ITEM": "Summary of Research Accomplishments",
                "DATA": "During my time in college at the State University of New York (SUNY) at Albany,  Andrew Aplin, PhD at Albany Medical College as a research technician. Being a relatively new lab at the time, I was fortunate to have a treat deal of research responsibility, which included helping the graduate students melanoma, During my time as a technician, I mastered a number of techniques that I would use through my graduate year. These included Western isolation, flow cytometry, cell cycle/proliferation and appoptosis assays, transient and stable transfection, RNA-interference, and extensive cloning of genes and shRNAs into and Packaging of lentiviral and adenoviral vectors."
               }],

            }
        },
        methods: {
    addEducation () {
      this.EducationTraining.push({id: id++, ITEM: this.items, DATA: this.education })
      this.items = '',
      this.education = ''
    }
  }
})
</script>


<style>

  .article.article--bio .article__image--main:not(.no-landscape)+.article__title {
      background-color: rgba(0,86,184,0.9) !important;
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
    color:#fff;
  }
  
  .article__header-bundle {
      margin-bottom: 2rem;
  }
  
  </style>