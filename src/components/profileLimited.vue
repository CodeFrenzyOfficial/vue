<template>
    <div ref="section"> 

      <vue-element-loading :active="showSpinner" is-full-screen size="128" />

      <b-card class="text-center overflow-hidden border border-white"  no-body   h-100 style="max-width: 1240px;" title-variant="card_title">
             
       
      <!-- <b-button   variant="link" @click="showDetailModal('Back emit')" >&lt; &lt; &lt;  Back</b-button>  -->
        <b-row>
       
    <!-- <b-col class="text-center"> <b-button   variant="link" @click="OnNavClicked('Back')" >&lt; &lt; &lt;  Previous</b-button></b-col>
    <b-col>Nav Bar</b-col>
    <b-col> <b-button  variant="link"  @click="OnNavClicked('Next')" >Next >>></b-button></b-col> -->
  </b-row>
</b-card>
     
  <div>
  <b-card class=" text-center overflow-hidden "  no-body   h-100 style="max-width: 1240px;" title-variant="card_title">
 
   <!--  <b-row no-gutters style="max-height: 550px;">
      <b-row no-gutters style="max-height: 350px;"> -->
  
        <b-row no-gutters :style="styleObject" >      
  
      <b-col md="1"  class="p-0 profile-card-text" ></b-col>
  
      <b-col md="3"  class="p-0 profile-card-text" >
        <b-img :src= "memberImage"  alt="Image" class="rounded-0"  height="1500" fluid-grow  @error="imageLoadError"></b-img>
        <!-- <b-button  v-if="showEdit" id="show-btn"  @click="OnEditClicked('Photo')" >Edit</b-button> -->
      </b-col>
      <b-col md="8"  class="profile-card-text ">
  

        <b-card-body class="ml-5  text-left title-highligh" v-bind:title= "membername">

       

       
         <!-- <b-card-text  class="text-left " > {{ cardText }}   -->
          <b-card-text  class="text-left card-style" >
            <li  class = "noIcon pb-2" v-for="(item, index) in selectedTitle" :key="index" >
          {{ item.DATA }}
        </li>
        <!-- <b-button  id="show-btn"  @click="OnEditClicked('Pubs')" >Refresh Pubs</b-button> -->
      
          <hr class="hr-highligh mt-2" v-if = "showLine" />
      
          <!-- <p class ="mt-3 mb-0"> Specializes in: </p> -->

          <!-- <p class ="mt-3 mb-2"> Disease Therapy Area </p> -->

          <!-- {{ DISEASE_THERAPY_AREA }} -->

          <li class = "pb-1 pt-1" v-for="(item, index) in POSITION_TITLE" :key="index" >
            {{ item.DATA }}
          </li>

          <p class ="mt-3 mb-0" v-if = "typeof this.CANCER_FOCUS !== 'undefined' && this.CANCER_FOCUS.length > 0">Cancer Focus </p> 
           <!-- <p class ="mt-3 mb-0" v-if = "typeof this.researcher.SPECIALITIES !== 'undefined' && this.researcher.SPECIALITIES.length > 0"> Specializes in: </p>  -->
           <!-- {{ this.researcher.RESEARCH_INTERESTS }} -->
         

         <li class = "pb-2 pt-0" v-for="(item, index) in CANCER_FOCUS" :key="index" >
            {{ item.DATA }}
          </li>  
          <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Specialities')" >Edit Specialities</b-button>

          
          <p class ="mt-3 mb-0"> {{ Program_Label }} </p> 
  
        <li  class = "pb-2 pt-1" v-for="(item, index) in selectedSpecialities" :key="index" >
           <!-- {{ researcher.PROGRAM }} -->
           <span  @mouseover="hover = true"
                  @mouseleave="hover = false">
           <a class="myLink" style = "color:white; " @click.prevent="programLink(researcher.PROGRAM )" target="_blank">  {{ researcher.PROGRAM }} </a>
          </span> 
          <!-- <span v-if="hover">This is a secret message.</span> -->
          </li>

          </b-card-text> 
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
  <div class="d-flex align-items-center">
  
  </div>
      <!-- Article body -->
     
      <div class="profile_article__body">
       
        <!-- Specialties section -->
        <!-- <div class="article__specialties">
          <div>
            <p class="umb-2">
              <br>
              <em class="utext--muted utext--sm">Specializing In:</em>
            </p>
            <span> {{ specialties }}
            </span>
          </div>
        </div> -->
   
      </div>
      <!-- About section -->
      <!-- <h2 class="h2 profile_section-title">About  {{ membername }}</h2> -->
      <section class="bio__about__biography">
        <!-- <h3 class="h3 section-title">Main Researcher's Page</h3> -->
        <!-- <b-row  no-gutters >   
          <b-col cols="1" class="p-0 profileFind-card-text" ></b-col>
          <b-col cols="3" class="p-0 profileFind-card-text" ></b-col>
          <b-col cols="8" class="p-0 profileFind-card-text" >


       <b-button class="btn btn-primary2 mt-50"  @click="showDetailModal('close')" >Find Another Researcher</b-button> 
      </b-col>
      </b-row> -->
        <!-- <b-row  no-gutters class="text-center" align-v="center">    
      <b-button class="btn btn-primary2 mt-50"  @click="showDetailModal('close')" >Find Another Researcher</b-button> 
     <b-button   variant="link" @click="showDetailModal('Back emit')" >&lt; &lt; &lt;  Back</b-button>   
      </b-row>-->

        <h3 class="h3 section-title">Research Interest</h3>
        <!-- <h3 class="h4 profile_sub_section-title">Research Interest</h3> -->
        
      
        <!-- Edit button for biography section -->
        <!-- <input
          class="edit-btn"
          type="button"
          value="Edit"
          role="button"
          aria-disabled="false"
          style="height: 40px; width: 120px; background-color: #efefef"
        /> -->
      
  
        <!-- Display biography information -->
        <div class="person-info" v-for="(dataObj, i) in selectedResearch_Interest" :key="i">
          <!-- <h5>{{ dataObj.ITEM }}</h5> -->
          <p>{{ dataObj.INTEREST }}</p>
        </div>
        
      </section>

      <!-- Positions section -->
         <section v-if = "selectedPositions.length != showEdit" >
        <!-- <h3 class="h3 profile_section-title">Positions</h3> -->
        <h3 class="h3 section-title">Positions</h3>
        

        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Positions')" >Edit Positions</b-button>


        <!-- Card for Hollings Cancer Center position -->
           <!--<b-card >
          <b-card-text>
          Display positions information -->
          <ul>
            <li v-for="(item, index) in selectedPositions" :key="index">
             
          {{ item.DATA }} 
          
          </li>
      </ul>
     
          <!-- </b-card-text>
        </b-card> -->
      </section>
      <!-- Education and training section -->
      <section  v-if = "selectedEducationTraining.length != showEdit"  >
        <h3 class="h3 section-title" >Background</h3>
        <!-- Education and training subsection -->
        <h4 class="h4 profile_sub_section-title">Education and Training</h4>
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
  
          <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Education')" >Edit Education and Training</b-button>
        <!-- Display education and training information -->
        <div>
          <ul>
          <li v-for="(item, index) in selectedEducationTraining" :key="index">
            {{ item.DATA }}
          </li></ul>
        </div>

    </section>
    
    <!-- Fellowship subsection -->
    <!-- <section v-if = "selectedFellowship.length != showEdit" >
        
        <h4 class="h4 profile_sub_section-title">Fellowship:</h4>
  
        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Fellowship')" >Edit Fellowship</b-button>
      
        <div class="card-body">
          <li v-for="(item, index) in selectedFellowship" :key="index">
            {{ item.DATA }}
          </li>
        </div> 
    </section>-->


        <!-- Professional memberships subsection -->
         <section  v-if="selectedMemberships && selectedMemberships.length > 0" >
  
        <h4 class="h4 profile_sub_section-title">Professional Memberships</h4>
        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Memberships')" >Edit Memberships</b-button>
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
        <div>
          <ul>
          <li v-for="(item, index) in selectedMemberships" :key="index">
            {{ item.DATA }}
          </li>
        </ul>
        </div>
    </section>
        <!-- Honors and awards subsection -->
        <section v-if = "selectedHonorsAwards.length != showEdit">
        <h4 class="h4 profile_sub_section-title">Honors and Awards</h4>
        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('HonorsAwards')" >Edit Honors and Awards</b-button>
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
        <div>
          <ul>
          <li v-for="(item, index) in selectedHonorsAwards" :key="index">
            
            {{ item.DATA }}
          </li>
        </ul>
        </div>
      </section>

      <!-- Horizontal line to separate sections -->
     
      <!-- <section class="article__content--research" id="research"  v-if = "selectedResearchOverView.length != showEdit">
      
        <h4 class="h4 profile_sub_section-title">Research Overview:</h4>
        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('ResearchOverView')" >Edit Research OverView</b-button>

        <div class="card-body">
          <div v-for="(item, index) in selectedResearchOverView" :key="index">
            {{ item.DATA }}
          </div>
        </div>
    </section> -->
 

    
      <!--  <section class="article__content--research" id="research"  v-if = "selectedResearchOverView.length != showEdit">
        <h2 class="h2 profile_section-title">Clinical Trials</h2>
        <h4 class="h4 profile_sub_section-title">Clinical Trial Overview:</h4>
       <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('Clinical_Trials')" >Edit Clinical Trials</b-button> 

        <div class="card-body">
          <div v-for="(item, index) in selectedResearchOverView" :key="index">
            {{ item.DATA }}
          </div>
        </div>
    </section>-->

    <b-tabs class="h4"  card v-model="NIH_Pubs_step">

      <b-tab title="Selected Funding" @click = "tabChange('OtherFunding')" title-item-class="d-none" >
              <!-- <h4 class="h4 profile_sub_section-title">Selected Funding</h4>   -->

              <div class="person-info" v-for="obj in otherFundingData" :key="obj.Award_Number" > 
              <!-- {{obj.fiscal_year}}  -->
                        <!-- <h6><b><a class="nav-link"
                            v-bind:href="'' + obj.Award_Number"
                            target='_blank'
                            aria-label=“Article”>{{obj.Award_Number}} </a>   </b>  -->
                            <h6> <b> {{obj.Award_Number }} </b> <br>
                          <i>{{obj.Title}}</i> <br>

                          Role: <b>{{obj.Investigator_Role}}</b> <br>
                          
                         Project Start: {{  formatDate(obj.Project_Start_Date)  }} Project End: {{  formatDate(obj.Project_End_Date)}} <br></h6> 
                             Award Amount: {{formatDollar(obj.Award_Amount)}}  Direct Cost: {{formatDollar(obj.Direct_Cost)}} <br>
                             Program {{obj.Program_Area_Identifier}} <br>
                          
                     <!--  {{obj.agency_ic_admin[0].name}} -->
   
   
                      <!-- <span v-if = obj.spending_categories_desc>   <b>Spending Ccategories</b> {{obj.spending_categories_desc}} <br></span>
                     <span v-if = obj.phr_text><b>Public Health Relevance Statement:</b> {{obj.phr_text}}<br></span>    
                      <span v-if = obj.abstract_text>  <b>Abstract: </b>{{obj.abstract_text}} <br></span>    
                       <span v-if = obj.pref_terms>  <b>Project Terms: </b>{{obj.pref_terms}} <br></span>    -->
                       
         



              </div>
         </b-tab>

        <b-tab title="Selected NIH Funding" @click = "tabChange('Funding')"  title-item-class="d-none" >

        

    <!-- <h4 class="h4 profile_section-title">NIH Funding</h4> -->
    <h4 class="h4 profile_sub_section-title">Selected NIH Funding</h4>  
    <div class="person-info" v-for="obj in fundingData" :key="obj.pmid"  > 
                     
                     <!-- {{obj.fiscal_year}}  -->
                          <h6><b><a class="nav-link"
                            v-bind:href="'' + obj.project_detail_url"
                            target='_blank'
                            aria-label=“Article”>{{obj.core_project_num}} </a>   </b> 
   
                          <i>{{obj.project_title}}</i> <br>
                          
                         Project Start: {{  formatDate(obj.project_start_date)  }} Project End: {{  formatDate(obj.project_end_date)}} <br></h6> 
                             Fiscal Year: {{obj.fiscal_year}} Award Amount: {{formatDollar(obj.award_amount)}}  Direct Cost: {{formatDollar(obj.direct_cost_amt)}} Indirect Cost: {{formatDollar(obj.indirect_cost_amt)}}<br>
                     <!--  {{obj.agency_ic_admin[0].name}} -->
   
   
                     <span v-if = obj.spending_categories_desc>   <b>Spending Ccategories</b> {{obj.spending_categories_desc}} <br></span>
                     <span v-if = obj.phr_text><b>Public Health Relevance Statement:</b> {{obj.phr_text}}<br></span>    
                     <span v-if = obj.abstract_text>  <b>Abstract: </b>{{obj.abstract_text}} <br></span>    
                     <span v-if = obj.pref_terms>  <b>Project Terms: </b>{{obj.pref_terms}} <br></span>   
                       
         

                        <!--   {{refresh()}} -->
             </div>




            </b-tab>
          
<b-tab title="Selected Publications" @click = "tabChange('Publications')"  >
      
      <section class="article__content--research" id="research"  v-if = "publicationData.length != showEdit">
       
        <!-- <h4 class="h4 profile_sub_section-title">Publications</h4> -->
        <b-button v-if="showEdit" id="show-btn"  @click="OnEditClicked('ResearchOverView')" >Edit Publications</b-button>

        <div class="card-body">
           <!-- <div v-for="(item, index) in publicationData" :key="index">
            {{ item.Authors }}
          </div>  -->
          <div  class="person-info" v-for="obj in publicationData" :key="obj.PMID"  v-bind:data-pmid='obj.PMID' >                       
                     <div><div class='altmetric-embed' data-badge-type='donut'  v-bind:data-pmid='obj.PMID' data-link-target='_blank' data-badge-popover='bottom' ></div></div>                  
                     <b><i>{{ obj.FullJournalName }}</i></b><br>
                       <h6><b><a class="nav-link"
                         v-bind:href="'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + obj.PMID"
                         target='_blank'
                         aria-label=“Article”>{{ obj.Title }}</a></b></h6> 

                        <span v-if= "obj.PMCID" >
                       <b><a class="nav-link"
                        v-bind:href="'https://www.ncbi.nlm.nih.gov/pmc/articles/' + obj.PMCID"
                         target='_blank'
                         aria-label= Article >{{ obj.PMCID }}</a></b></span>

                      <b> {{ obj.Authors }}</b><br> 
                     <div v-if="obj.Abstract">
                     <span v-html="obj.Abstract"></span>({{obj.pubYear}}) <b>PMID:  {{ obj.PMID }} </b></div>
                       <div v-else><b>  Abstract: </b>Not Available ( {{obj.pubYear}}) <b> PMID:  {{ obj.PMID }}</b></div>
                       <b>Publication Types:</b> {{obj.PublicationType}} <br>
                         <!-- <b> Grants Support:    {{obj.NCI_GrantList}}</b>   -->
                         
                                                                          
                   
                       <!-- <div v-for="objGrant in obj.GrantListData"  :key="objGrant.NCI_GrantList" >                      
                       <b>Grant Support:<a class="nav-link"
                         v-bind:href="'https://pubmed.ncbi.nlm.nih.gov/?sort=date&term=' + objGrant.NCI_GrantList + '%5BGrant+Number%5D&sort_order=desc'" 
                         target='_blank'
                         aria-label= 'Support' >{{ objGrant.GrantID }}</a></b>
                                              
                         </div> -->
                          <!-- {{load_Reporter(obj.GrantListData)}} -->
                          <div id="grantSection" class="grantlist">
                         <!-- <br><b>Grant Support:</b> <br> -->
                         <br><b>Grant Support:</b> 
                         <div v-for="(objGrant) in obj.GrantListData"  :key="objGrant.NCI_GrantList" class="grantlist" > 
                          <b>
                          <a class="nav-link"  @click.prevent="load_NIH_Reporter(objGrant.GrantID)"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >
                          {{ objGrant.GrantID }} 
                            </a>
                            </b>                      
                      </div>
                    
                      <br> <br>  <br> <br>
                      
                    </div>

                     <!-- <br><b>Grant Support:</b>
                       <div v-for="objGrant in obj.GrantListData"  :key="objGrant.NCI_GrantList" >                      
                       <b><a class="nav-link"  @click.prevent="load_NIH_Reporter(objGrant.GrantID)"                       
                         v-bind:href="''"                       
                         aria-label= 'Support' >{{ objGrant.GrantID }}</a></b>
                     
                         </div> -->
</div>
          <p>
        <!-- <a
          href= {{ pubLink }}
          class="olm-btn olm-btn--outline olm-btn--secondary umb-4"
          >Full Publications list on PubMed</a> -->
        
                         <a class="nav-link"  @click.prevent="load_Pub_List()"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >                         
                          Publications list on PubMed </a>
        
        </p>
     <p>
        <a class="nav-link"  @click.prevent="load_iCite_List()"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >                         
                          Publications on NIH iCite </a>
        
        </p>

        </div>
    </section>


  </b-tab>

</b-tabs>



      <!-- <section class="article__content--publications" id="publications">
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
      </section> -->

       <!-- Modal for editing education and training information
      <b-modal id="showEducationModal" size="xl"  @shown="onModalShown" @ok="onModalOk" v-model="modalShow"> -->
       <b-modal id="showEducationModal" v-model="showEducationModal" size="xl"  @shown="onModalShown" @ok="onModalOk">
        <template slot="modal-title">{{ centeredTitle }}</template>
          <div class="form-group">
            <input type="hidden" id="itemIndex" name="itemIndex" v-model = "itemIndex">
            <label for="input-year">Year:</label>
            <div class="row ml-2 mr-2">
            <input type="text" class="form-control" id="input-year" placeholder="Enter year" v-model="newYear" @keyup.enter="onYearKeyUp" ref="yearInput">
          </div>
        </div>
          <div class="form-group">
            <label for="input-data">{{ modeLabel }}</label>
            <!-- <input type="text" class="form-control" id="input-data" placeholder="Enter education/training" v-model="newData" @keyup.enter="onDataKeyUp" ref="dataInput"> -->
            <div class="row mb-3 ml-2 mr-2">
            <b-form-textarea
            class="form-control"
            id="input-data"
            size="lg"
            :rows="formRows"
            ref="dataInput"
            @keyup.native= "onDataKeyUp"
            v-model="newData"
            :placeholder="placeholderData"
      ></b-form-textarea>
    </div>
  
      <input type="button" class="btn btn-info float-right" :value="AddorSave" @click="addOrEditData">
      <input type="button" class="btn btn-info float-right" value="Cancel" @click="clearData">
          </div>
          <table class="table text-left">
            <thead>
              <tr>
                <th scope="col">Selected</th>
                <th scope="col">{{ dataTableColumn1 }}</th>
                <th scope="col">{{ dataTableColumn2 }}</th>
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
                  <button class="border-0 bg-white d-block text-center" title="Move up!" @click="moveUptempItem(item)">
                    <i class="fas fa-sort-up"></i>
                  </button>
                  <button class="border-0 bg-white d-block text-center" title="Move down!" @click="moveDowntempItem(item)">
                    <i class="fas fa-sort-down" ></i>
                  </button>
                </td>
                <td class="td-delete align-middle" style=" width: 10px; position: relative;">
                  <!-- Button to delete information
                  <button class="border-0 bg-white" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" @click="deletetempItem(item)">-->
                    <button class="border-0 bg-white" title="Delete record!" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" @click="deletetempItem(item)">
                    <i class="fas fa-trash-alt text-danger custom-icon"></i>
                  </button>
                 
                </td>
                <td class="td-delete align-middle" style=" width: 10px; position: relative;">   
                   <!-- Button to edit information -->           
                    <button class="border-0 bg-white" title="Edit record!" style=" position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);" @click="detailEditItem(item)">
                      <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                 
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </b-modal>
  
           <!-- Modal for editing education and training information
      <b-modal id="showEducationModal" size="xl"  @shown="onModalShown" @ok="onModalOk" v-model="modalShow"> -->
       <b-modal id="showNameModal" v-model="showNameModal" size="xl"  @shown="onNameModalShown" @ok="onNameModalOk">
        <template slot="modal-title">Edit Name</template>
  
        <b-row no-gutters style="max-height: 375px;"  >   
  
               <b-col md="1"  class="p-1 card-text" >  </b-col>
               <b-col md="3"  class="p-1 card-text" >
  
  
  
  
  
          <b-card-img :src= "memberImage"  alt="Image" class="rounded-0"  fluid-grow ></b-card-img>
        <!-- <b-button  v-if="showEdit" id="show-btn"  @click="OnEditClicked('Photo')" >Edit</b-button> -->
        <input type="file" @change = "OnFileSelected">
        <b-button id="show-btn"  @click="OnUpLoad()" >UpLoad</b-button> 
               </b-col>
               <b-col md="8"  class="p-1 card-text" >
          <div class="form-group">
            <input type="hidden" id="itemIndex" name="itemIndex" v-model = "itemIndex">
            <label for="input-year">Item:</label>
            <div class="row ml-2 mr-2">
            <!-- <input type="text" class="form-control" id="input-year" placeholder="Enter year" v-model="newYear" @keyup.enter="onYearKeyUp" ref="yearInput"> -->
          </div>
        </div>
          <div class="form-group">
            <label for="input-data">Name</label>
            <!-- <input type="text" class="form-control" id="input-data" placeholder="Enter education/training" v-model="newData" @keyup.enter="onDataKeyUp" ref="dataInput"> -->
            <div class="row mb-3 ml-2 mr-2">
            <input type="text"
            class="form-control"
            id="input-name"   
            ref="nameInput"
            @keyup.native= "onDataKeyUp"
            v-model="membername"
            placeholder="Name"
      >
      
       
        <input type="text" class="form-control" id="input-url" placeholder="Enter url" v-model="memberImage" ref="memberImage"> 
  
    </div>
  
       <input type="button" class="btn btn-info float-right" :value="AddorSave" @click="addOrEditData">
      <input type="button" class="btn btn-info float-right" value="Cancel" @click="clearData"> 
          </div>
        </b-col>
        </b-row>   
        </b-modal>

       
    </div>
  </template>

<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script> 
  <script>
 //import RESEARCHERSDATA from "../data/Researchers.json";
  // import RESEARCHERSDATA from "../data/ResearchsData.json";
   import RESEARCHERSDATA from "../data/ResearcherData.json";
   //import publicationFunctions from "../data/PublicationFunctions.js";
   import axios from "axios";
   //import _altmetric_embed_init from 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
   //import * as _altmetric_embed_init from 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
 // import { SpinnerPlugin } from 'bootstrap-vue'
 import VueElementLoading from "vue-element-loading";


    export default {
      components: {
         VueElementLoading,
   
          },

      props: ['selectedmembersname'],
  
   
  
      setup() {},
  
      data() {
       
        return {
          hover: false,
          showLine: false,
          showSpinner: true,
          Program_Label:"",
         researcher: [],//  RESEARCHERSDATA.RESEARCHERSDATA[0],
         researcherID:'',
         researcherIndex: 0,
         allResearchers:[],
         MemberID:"", 
         membername: '',//RESEARCHERSDATA.RESEARCHERSDATA[1].PRIMARY_NAME,
         selectedPubs:"",
         ALL_PMIDS:"",
         pubLink:"",
         NIH_Pubs_step: 0,
         NIH_Reporter_ID:"",
         DISEASE_THERAPY_AREA:[],
         POSITION_TITLE:[],
         SPECIALITIES:[],
         CANCER_FOCUS:[],
         selected_members_name:'',
       
          // memberImage: "https://muschealth.org/MUSCApps/HealthAssets/ProfileImages/Rockey_Don_GI.jpg",
          memberImage: "",
          publicationData:[],
          setScroll: true,
          selectedFile: null,
          subTitle: "",
        //  specialties: "Gastroenterology & Hepatology",
        //  cardText: "Department of Cancer Biology, Division of VP, Research ",
          placeholderData: "Enter data",
          formRows: "1",
          showEducationModal: false,         
          showNameModal: false,
          showModal: true,
          showEditButtons: false,
          mode:'',
          showEdit: false,
         // pmids: "34487314,35659464,34400337,35734751,35275898",
         fundingData:[],
          otherFundingData:[],
          firstModalshow: true,
          newYear: '',
          newData: '',
          itemIndex: -1,
          tempItem: [],
          confirmDelete:"",
          AddorSave:"Add",
          modeLabel: "Education/Training",
          dataTableColumn2: "Education/Training",
          dataTableColumn1: "Year",
          styleObject: {
          color: 'white',
          'max-height': '350px'
          },
         
  
  
          centeredTitle: 'Education and Training',
  
        
          // pubsData: [
          //   {
          //     ITEM: "1",
          //     DATA: "bla bla pubmedx",
          //   },
          //   {
          //     ITEM: "2",
          //     DATA: "Title",
          //   },
          // ],
  
         
  
        
        };
      },
      methods: {
      showDetailModal(arg) { 
            //   alert("child")
      this.$emit('clicked-show-detail', arg);
    },


        programLink(arg){
          if(arg === "Cancer Biology & Immunology"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-biology-immunology', '_blank');
          }

          if(arg === "Cancer Control"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-control', '_blank');
          }

          if(arg === "Developmental Cancer Therapeutics"){
            window.open('https://hollingscancercenter.musc.edu/research/programs/cancer-therapeutics', '_blank');
          }        


          

        },
    //     getResearcherData() {
    //     axios
    //   .get("https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles/")
    //   .then(function (response) {
    //    console.log(response);
    //   }).catch((error) => {
    //      console.log(error);
    //     });
    
    imageLoadError(event){
      event.target.src = "https://researchers.hcc.musc.edu/images/photos/noimageavailable.jpeg"
    },
      
    //  },
    OnNavClicked(arg){
      
      let emailAddress = "";
      let parts_emailAddress ="";

      switch (arg) {
        
        case 'Next':         
        emailAddress = this.allResearchers.ALLRESEARCHERSDATA[this.researcherIndex].EMAIL
       console.log(emailAddress);
       parts_emailAddress = emailAddress.split('@')

      this.researcherIndex +=1
      console.log(this.researcherIndex);

      this.loadSelectedResearcher(parts_emailAddress[0])
       break;
      
      

      case "Back":
        this.showProfile = false
        this.showMemberIDProfile = false
        this.showSpinner = false
        this.showSearch = true
      //this.$router.go(-1)

      //  emailAddress = this.allResearchers.ALLRESEARCHERSDATA[this.researcherIndex - 2].EMAIL
      //  console.log(emailAddress);
      //  parts_emailAddress = emailAddress.split('@')

      // this.researcherIndex -=1
      // this.loadSelectedResearcher(parts_emailAddress[0])


     
      }

    },

     getAllResearcherData() {
  //     self = this
  //     axios
  //     .get("https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles_All/")
  //     .then(function (response) {
  //   //    let allResearcherData = JSON.parse(response.data);
  //   self.allResearchers = JSON.parse(response.data);
  //    // let  allResearcherDatax = allResearcherData[0]
      
  //  // alert(self.allResearchers.ALLRESEARCHERSDATA[5].FIRST_NAME)
  //   //   this.allResearchers = allResearcherData 
  //   //  this.allResearchers = allResearcherData.RESEARCHERDATA
  //      console.log(response);
  //     }).catch((error) => {
  //        console.log(error);
  //       });
      
      
     },

       

        tabChange(){
          _altmetric_embed_init();
        },
        load_Pub_List(){
    
       //  window.open(this.pubLink, "_blank");
        window.open("https://pubmed.ncbi.nlm.nih.gov/?term=" + this.ALL_PMIDS + "&size=200" , "_blank");
        },


         load_iCite_List(){
          window.open( "https://icite.od.nih.gov/analysis?pmids=" +   this.ALL_PMIDS, "_blank");
         },


        load_NIH_Reporter(arg){
          console.log(arg)
          let nih_link ="https://reporter.nih.gov/project-details/10608962"
          window.open(nih_link, "_blank");

        },
       async loadSelectedResearcher(arg){
         // alert(this.selectedmembersname)
         this.memberImage = "http://probablyprogramming.com/wp-content/uploads/2009/03/handtinytrans.gif" // "https://researchers.hcc.musc.edu/images/photos/" + arg+ ".jpeg"
         arg = this.selectedmembersname
         this.NIH_Pubs_step =0;
          console.log(arg)
          this.researcher = [];
          this.ALL_PMIDS= ""
          this.DISEASE_THERAPY_AREA =[]
          this.POSITION_TITLE =[]
          this.SPECIALITIES =[]
          this.CANCER_FOCUS =[]
          if(arg ===''){
            arg = 'duboisrn'
          }
       //   if(ID === "1"){
          //  this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[parseInt(ID)] 

          //  this.researcher = RESEARCHERSDATA.RESEARCHERDATA[0] 
      //    } else {
       //      this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[2] 

    //      }
   
  
      
  await  axios
      .get("https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles/" + arg + "/email" )
          
    //   .get("https://apidata.hcc.musc.edu/api/Researchers_Web_Profiles/" + arg + "/email")


      .then(res => {  
        
        let researcher_Data = JSON.parse(res.data);
        this.researcher =  researcher_Data.RESEARCHERDATA[0] ;
        console.log(this.researcher);
      

      //  alert(this.researcher)
       // alert(this.researcher.PRIMARY_NAME) 
       // alert(this.researcher.RESEARCHERDATA[0].PRIMARY_NAME)

       //   }
       this.membername = this.researcher.PRIMARY_NAME

    //  alert(this.researcher.LAST_NAME)

       this.memberImage = this.researcher.IMAGE
       this.NIH_Reporter_ID = this.researcher.NIH_REPORTER_ID
       this.selectedPubs = this.researcher.SELECTED_PMIDS
       this.ALL_PMIDS = this.researcher.ALL_PMIDS
        this.Program_Label= "Program "
       this.showLine = true

       this.pubLink = this.researcher.PUBLIC_PUBS_LINK
       this.DISEASE_THERAPY_AREA.push({ITEM:1,DATA: this.researcher.DISEASE_THERAPY_AREA})

       let positions =  this.researcher.POSITION_TITLE.split(",")
      
       if(this.researcher.CANCER_FOCUS.length > 0 ){
          this.CANCER_FOCUS.push({ITEM:1,DATA: this.researcher.CANCER_FOCUS} )
       }
     

       //console.log( this.CANCER_FOCUS)
       if(this.researcher.Title_Additional_Details.length> 0){
         this.POSITION_TITLE.push({ITEM:1,DATA: this.researcher.Title_Additional_Details}) 
       }



 
       for (var i = 0; i < positions.length; i++) {     
        this.POSITION_TITLE.push({ITEM:i,DATA: positions[i]})
       }
          //  if(this.NIH_Reporter_ID.length > 0){
          //    this.loadProfileGrants()
          //  } else {
          //   this.fundingData=[];
          //  }
      

       //   if(this.selectedPubs.length > 0){
       //   this.pubMedXML(this.selectedPubs, 'researcher');
     //  }
     
        
      //  this.loadResearchersFunding(arg)
        })
        .catch(err => {
          console.log(err);
       //   alert('An error has occured and the Administrator has been notified ' + arg)
          // console.log(err);
        });


      // .then(function (response) {

      //  console.log(response.data);
      //  console.log(response.data.RESEARCHERSDATA);

      //  this.researcher = response.data
      //  console.log(this.researcher)
      // }).catch((error) => {
      //    console.log(error);
      //   });
      
      this.showSpinner = false;
      if(this.selectedPubs.length > 0){
          this.pubMedXML(this.selectedPubs, 'researcher');
       }
    
      // console.log(this.researcher.PRIMARY_NAME)    
     
        
        },
        loadResearchersFunding(arg){
        //  alert(ID)
        
       //   if(ID === "1"){
          //  this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[parseInt(ID)] 

          //  this.researcher = RESEARCHERSDATA.RESEARCHERDATA[0] 
      //    } else {
       //      this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[2] 

    //      }
   
  
      
    axios
      .get("https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles_Funding/" + arg)

      .then(res => {  
        
        let researcher_Funding = JSON.parse(res.data);
        this.otherFundingData =  researcher_Funding.RESEARCHERSFUNDING ;
        console.log(this.otherFundingData);
      

      //  alert(this.researcher)
       // alert(this.researcher.PRIMARY_NAME) 
       // alert(this.researcher.RESEARCHERDATA[0].PRIMARY_NAME)

       //   }
     //  this.membername = this.researcher.PRIMARY_NAME

    //  alert(this.researcher.LAST_NAME)

      //  this.memberImage = this.researcher.IMAGE
      //  this.NIH_Reporter_ID = this.researcher.NIH_REPORTER_ID
      //  this.selectedPubs = this.researcher.SELECTED_PMIDS
      //  this.pubLink = this.researcher.PUBLIC_PUBS_LINK
      //  this.DISEASE_THERAPY_AREA.push({ITEM:1,DATA: this.researcher.DISEASE_THERAPY_AREA})

      //  let positions =  this.researcher.POSITION_TITLE.split(",")
      
      

      //  if(this.researcher.Title_Additional_Details.length> 0){
      //    this.POSITION_TITLE.push({ITEM:1,DATA: this.researcher.Title_Additional_Details}) 
      //  }


      //  for (var i = 0; i < positions.length; i++) {     
      //   this.POSITION_TITLE.push({ITEM:i,DATA: positions[i]})
      //  }
      //      if(this.NIH_Reporter_ID.length > 0){
      //        this.loadProfileGrants()
      //      } else {
      //       this.fundingData=[];
      //      }
      

      //  if(this.selectedPubs.length > 0){
      //     this.pubMedXML(this.selectedPubs, 'researcher');
      //  }
     
        

        })
        .catch(err => {
          console.log(err);
        //  alert('An error has occured and the Administrator has been notified ' + arg)
          // console.log(err);
        });


     
     
        
        },

        loadProfileGrants(){

          ////http://localhost:54269/api/NIH_Reporter/P30%20DK123704/project_nums_URL
         // const today = new Date();

        let NIH_ID =  this.NIH_Reporter_ID //'1865118' //this.new_researchers[0].NIH_REPORTER_ID
       // console.log(NIH_ID);
 
        //  var self = this;
       // axios.get('https://restapi20201222154839.azurewebsites.net/api/NIH_Reporter/' + NIH_ID + '/pi_profile_ids_current_filtered')
        axios.get('https://adminapi20220513111902.azurewebsites.net/api/NIH_Reporter/' + NIH_ID + '/pi_profile_ids_current_filtered_HCC')
        //axios.get('http://localhost:54269/api/NIH_Reporter/' + NIH_ID + '/pi_profile_ids_current_filtered')
       .then(res => {  
        
        console.log(res.data.results)
        
      this.fundingData =  res.data.results.filter((value, index, self) => self.findIndex(v => v.project_serial_num === value.project_serial_num) === index);
     
      //this.fundingData = filter   fiscal_year  === 2023
      
      


     // this.fundingData =  this.fundingData.filter(item => item.project_end_date >= today);


   
      //   alert(res.data.results)
      //    this.fundingData= res.data.results;
     //   console.log(this.fundingData)
  //    alert(NIH_ID)
  })
  .catch(error => {
  // this.isLoading = false;

   if (error.response) {
		// Request made but the server responded with an error
		console.log(error.response.data);
		console.log(error.response.status);
		console.log(error.response.headers);
	} else if (error.request) {
		// Request made but no response is received from the server.
		console.log(error.request);
	} else {
		// Error occured while setting up the request
		console.log('Error', error.message);
	}
})
        },     
      formatDate(arg){
     
     var dt = new Date(arg);
       var dtm = dt.getMonth();
       var dty = dt.getFullYear();
       return this.padTo2Digits(dtm) + "/" + dty 

 },
 padTo2Digits (num) {
     return num.toString().padStart(2, '0');
     },


      formatDollar (num) {
 if(num){
    return "$" + num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 } else {
  return "N/A"
 }
   
    }     ,
    
        OnFileSelected(event){
          console.log(event)
          this.selectedFile = event.target.files[0]
        },

        OnUpLoad(){
        const fd = new FormData()
        fd.append ("image", this.selectedFile, this.selectedFile.name)
       
        },
        OnUploadProgress(){

        },
        showMsgBoxOne() {
          this.confirmDelete = ''
          this.$bvModal.msgBoxConfirm('Are you sure you want to delete?')
            .then(value => {
              this.confirmDelete = value
            })
            .catch(err => {
             console.log(err)
              // An error occurred
            })
        },
    //     showEducationModal() {
    //     this.$refs['modal-center'].show()
    //   },
    detailEditItem( item) {
      const index = this.tempItem.indexOf(item);
      this.itemIndex = index
      this.AddorSave = "Save"
      let arg = this.mode
        switch (arg) {
        
        case 'Research_Interest':
  
        this.placeholderData =  "Enter Research Interest data",
        this.formRows= "5",
  
  
        this.newYear = this.researcher.RESEARCH_INTEREST[index].ITEM
        this.newData = this.researcher.RESEARCH_INTEREST[index].DATA
  
         this.centeredTitle ="Edit RESEARCH_INTEREST item";
      
         this.mode = "RESEARCH_INTEREST"
        break;
        case 'Positions':
        this.centeredTitle ="Edit Position item";
  
        this.newYear = this.researcher.POSITIONS[index].ITEM
        this.newData = this.researcher.POSITIONS[index].DATA
        this.mode = "Positions"
        break;

       

        case 'Education':
        this.centeredTitle ="Edit Education and Training";
       // this.tempItem = JSON.parse(JSON.stringify(this.researcher.EDUCATION_TRAINING));
       this.newYear = this.researcher.EDUCATION_TRAINING[index].ITEM
        this.newData =  this.researcher.EDUCATION_TRAINING[index].DATA
        this.mode = "Education"
        break;


        case 'Fellowship':
        this.centeredTitle ="Edit Fellowship";
       // this.tempItem = JSON.parse(JSON.stringify(this.Fellowship));
       this.newYear = this.researcher.FELLOWSHIP[index].ITEM
        this.newData =  this.researcher.FELLOWSHIP[index].DATA
        this.mode = "Fellowship"
        break;

        case 'Memberships':
        this.centeredTitle ="Edit Memberships";
       // this.tempItem = JSON.parse(JSON.stringify(this.Memberships));
       this.newYear = this.researcher.MEMBERSHIPS[index].ITEM
        this.newData =  this.researcher.MEMBERSHIPS[index].DATA       
        this.mode = "Memberships"
        break;


        case 'HonorsAwards':
        this.centeredTitle ="Edit Honors and Awards";
       // this.tempItem = JSON.parse(JSON.stringify(this.HonorsAwards));
        this.mode = "HonorsAwards"

        this.newYear = this.researcher.HONORSAWARDS[index].ITEM
        this.newData =  this.researcher.HONORSAWARDS[index].DATA     

  
        
         break;

     
        default:
        break;
        }
  
  
  
      //Other properties which the modal needs...
      this.showEducationModal = true;
    },
    OnEditClicked(arg) {
      this.newYear = '';
      this.newData = '';
      this.itemIndex = -1;
      this.dataTableColumn1 = "Year"
        switch (arg) {
          case "Pubs":
          _altmetric_embed_init();
          break;

          case "Name":
        //  _altmetric_embed_init();
         this.showNameModal = true
          break;
         case "Upper_Title":
      //  this.styleObject["max-height"] = '350px' 
        this.centeredTitle ="Edit Title";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.Upper_Title));
        this.mode = "Title"
        this.placeholderData="Title"
        this.modeLabel ="Title"
        this.dataTableColumn2 = "Title"
        this.dataTableColumn1 = "Item"       
        break;
  
        case "Lower_Title":
      //  this.styleObject["max-height"] = '350px' 
        this.centeredTitle ="Edit Department or Program";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.Lower_Title));
        this.mode = "Department"
        this.placeholderData="Department or Program"
        this.modeLabel ="Department or Program"
        this.dataTableColumn2 = "Department or Program"
        this.dataTableColumn1 = "Item"       
        break;
  
  
        case 'RESEARCH_INTEREST':
        this.centeredTitle ="Edit RESEARCH INTEREST";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.RESEARCH_INTEREST));
        this.mode = "RESEARCH_INTEREST"
        this.placeholderData="RESEARCH_INTEREST Data"
        this.modeLabel ="RESEARCH_INTEREST"
        this.dataTableColumn2 = "RESEARCH_INTEREST Data"
        this.dataTableColumn1 = "Item"
        break;
       


        case 'Positions':
        this.showMsgBoxOne = true
        this.centeredTitle ="Edit Positions";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.POSITIONS));
        this.mode = "Positions"
        this.placeholderData="Position"
        this.modeLabel ="Position"
        this.dataTableColumn2 = "Position Data"
        this.dataTableColumn1 = "Item"


        break;
        case 'Education':
        this.centeredTitle ="Edit Education and Training";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.EDUCATION_TRAINING));
        this.mode = "Education"
        this.placeholderData="Education"
        this.modeLabel ="Education/Training"
        this.dataTableColumn2 = "Education or Training"
        this.dataTableColumn1 = "Item"
        
        break;
        case 'Fellowship':
        this.centeredTitle ="Edit Fellowship";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.FELLOWSHIP));
        this.mode = "Fellowship"
        this.placeholderData="Fellowship"
        this.modeLabel ="Fellowship"
        this.dataTableColumn2 = "Fellowship"
        this.dataTableColumn1 = "Item"
  
        break;
        case 'Memberships':
        this.centeredTitle ="Edit Memberships";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.MEMBERSHIPS));
        this.mode = "Memberships"
        this.placeholderData="Memberships"
        this.modeLabel ="Memberships"
        this.dataTableColumn2 = "Membership"
        this.dataTableColumn1 = "Item"

        break;
        case 'HonorsAwards':
        this.centeredTitle ="Edit Honors and Awards";
        this.tempItem = JSON.parse(JSON.stringify(this.researcher.HONORSAWARDS));
        this.mode = "HonorsAwards"
        this.placeholderData="Honors/Awards"
        this.modeLabel ="Honors/Awards"
        this.dataTableColumn2 = "Honor or Award"
        this.dataTableColumn1 = "Item"
  
  
        break;

       
        default:
        break;
        }
  
  
  
      //Other properties which the modal needs...
      if(arg != "Name"){
  this.showEducationModal = true;
      }
      
      
    },
        onModalShown() {
          // Clear the year and data fields
         // this.tempItem = []
          if (this.firstModalshow) {
            this.newYear = '';
            this.newData = '';
            this.$refs.yearInput.focus();
            this.firstModalshow = false;
          }
  
        },
        clearData(){
          this.newYear = '';
          this.newData = '';
          this.itemIndex = -1;
          this.AddorSave = "Add"
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
          if (event.key === 'Enter' || event.keyCode === 13) {
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
        }
        },
        addOrEditData(){
          if (this.itemIndex >= 0 ){
            this.addNewData()
          } else {
         this.detailEditItem("")
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
              this.$bvToast.toast('Please enter a year and data information', {
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
        onNameModalOk(){
        console.log("onNameModalOk")
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
        //  this.showMsgBoxOne
          // Remove the item from the table and the data() object
          const index = this.tempItem.indexOf(item);
          if (index > -1) {
            this.tempItem.splice(index, 1);
          }
        },

async pubMedXML(pmidList, mode) {
//pmidList = "37579095";
this.publicationData = [];
this.searchQuery = [];

var pmidArr = pmidList.split(","); // this.new_researchers[0].SELECTED_PMIDS.split(',');
var uniq = [...new Set(pmidArr)];

uniq.sort(function (a, b) {
return b - a;
});

if (uniq.length > 15) {
uniq.length = 15;
}

let pmid = uniq.join(",");
let issn_List = "";

var self = this;
this.articles = [];

await axios
.get(
"https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=" +
pmid +
"&api_key=d0784f454c4ca9a3cb738d33f97b4ae34808"
)
.then((response) => {
const parser = new DOMParser();
const xmlDOM = parser.parseFromString(response.data, "text/xml");
const getPubmedArticles = xmlDOM.querySelectorAll("PubmedArticle");
for (var i = 0; i < getPubmedArticles.length; i++) {
let tag = getPubmedArticles[i];
//PMID

let PMID = "";
let PMCID = "";
let DOI = "";
if (tag.querySelector("PMID")) {
PMID = tag.querySelector("PMID").textContent;
}

// console.log(PMID);

//Title
let Title = "";
if (tag.querySelector("Article").querySelector("Title")) {
Title = tag
.querySelector("Article")
.querySelector("Title").textContent;
}

//ArticleTitle
let ArticleTitle = "";
if (tag.querySelector("Article").querySelector("ArticleTitle")) {
ArticleTitle = tag
.querySelector("Article")
.querySelector("ArticleTitle").textContent;
}

let ISSN = "";
if (tag.querySelector("Article").querySelector("ISSN")) {
ISSN = tag
.querySelector("Article")
.querySelector("ISSN").textContent;
issn_List += issn_List + ",";
}

// console.log(ArticleTitle);

//AuthorList
let AuthorList = "";
/// * let authorXML = ""
if (
tag
.querySelector("Article")
.querySelector("AuthorList")
.querySelectorAll("Author")
) {
AuthorList = tag
.querySelector("Article")
.querySelector("AuthorList")
.querySelectorAll("Author");
///* authorXML = tag.querySelector('Article').querySelector('AuthorList').outerHTML
}

let AuthorString = "";
for (let j = 0; j < AuthorList.length; j++) {
if (AuthorList[j].querySelector("LastName")) {
AuthorString +=
AuthorList[j].querySelector("LastName").textContent;
}

if (AuthorList[j].querySelector("Initials")) {
AuthorString +=
" " + AuthorList[j].querySelector("Initials").textContent;
}

AuthorString += ", ";
// AuthorString += AuthorList[j].querySelector('LastName').textContent + " " + AuthorList[j].querySelector("Initials").textContent + ", "
}

AuthorString = AuthorString.replace(/,\s*$/, "");
// console.log(AuthorString);

let GrantList = [];
let GrantListData = [];
let NCI_GrantList = "";
let NON_NCI_GrantList = "";

// if (tag.querySelector("GrantList")) {
// GrantList = tag
// .querySelector("GrantList")
// .querySelectorAll("Grant");
// }

if (tag.querySelector("Article").querySelector("GrantList")) {
GrantList = tag
.querySelector("Article")
.querySelector("GrantList")
.querySelectorAll("Grant");
}

for (let j = 0; j < GrantList.length; j++) {
let GrantID = "";
let Acronym = "";
let Agency = "";
let Country = "";

if (GrantList[j].querySelector("GrantID")) {
GrantID = GrantList[j].querySelector("GrantID").textContent;
}

if (GrantList[j].querySelector("Acronym")) {
Acronym = GrantList[j].querySelector("Acronym").textContent;
}

if (GrantList[j].querySelector("Agency")) {
Agency = GrantList[j].querySelector("Agency").textContent;
}

if (GrantList[j].querySelector("Country")) {
Country = GrantList[j].querySelector("Country").textContent;
}
if (Agency.includes("NIH")) {
NCI_GrantList =
GrantID + "/" + Acronym + "/" + Agency + "/" + Country + ", ";
} else {
NON_NCI_GrantList =
GrantID + "/" + Acronym + "/" + Agency + "/" + Country + ", ";
}

// NCI_GrantList
GrantListData.push({
GrantID: GrantID,
Acronym: Acronym,
Agency: Agency,
Country: Country,
NCI_GrantList: NCI_GrantList,
NON_NCI_GrantList: NON_NCI_GrantList,
});
}

//abstract
let abstractXML = "";
// if (tag.querySelector('Article').querySelector('Abstract')) {
// abstractXML = tag.querySelector('Article').querySelector('Abstract').outerHTML
// console.log(abstractXML)
// }
const abstracts = tag
.querySelector("Article")
.querySelectorAll("AbstractText");
// let abstract_text = "";
abstracts.forEach((a) => {
let tmpItem = [];
if (a.getAttribute("Label") !== null) {
// abstract_text +=
// "<b>" + a.getAttribute("Label") + "</b>: " + a.textContent;
tmpItem.title = "<br><b>" + a.getAttribute("Label") + "</b>";
abstractXML += "<br><b>" + a.getAttribute("Label") + ": </b>";
tmpItem.body = a.textContent;
abstractXML += a.textContent;
} else {
tmpItem.body = a.textContent;
tmpItem.title = "Abstract";
abstractXML += "<br><b>Abstract: </b>";
abstractXML += a.textContent;
}
});

//MeshHeadingList
let MeshHeadingList = [];
let NCI_MeshTerms = "";

if (tag.querySelector("MeshHeadingList")) {
MeshHeadingList = tag
.querySelector("MeshHeadingList")
.querySelectorAll("MeshHeading");
}

for (let j = 0; j < MeshHeadingList.length; j++) {
// if (KeywordList[j].querySelector('Keyword')) {
NCI_MeshTerms += MeshHeadingList[j].textContent + ";";
// }
}

//KeywordList
let KeywordList = [];

if (tag.querySelector("KeywordList")) {
KeywordList = tag
.querySelector("KeywordList")
.querySelectorAll("Keyword");
}

let NCI_KeyWords = "";
for (let j = 0; j < KeywordList.length; j++) {
// if (KeywordList[j].querySelector('Keyword')) {
NCI_KeyWords += KeywordList[j].textContent + ";";
// }
}

// console.log("NCI_KeyWords " + NCI_KeyWords)

//PublicationType
let PublicationTypeList = [];
let PublicationType = "";

if (
tag.querySelector("Article").querySelector("PublicationTypeList")
) {
PublicationTypeList = tag
.querySelector("Article")
.querySelectorAll("PublicationTypeList");
}
for (let j = 0; j < PublicationTypeList.length; j++) {
if (PublicationTypeList[j].querySelector("PublicationType")) {
PublicationType +=
PublicationTypeList[j].querySelector("PublicationType")
.textContent + ", ";
}
}

//ISOAbbreviation
// let ISOAbbreviation = ""
// if (ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation")) {
// ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation").textContent;
// }

//PudDate year and month
let PubDateYear = "";
if (
(tag
.querySelector("Article")
.querySelector("Journal")
.querySelector("JournalIssue")
.querySelector("PubDate")
.querySelector("Year"))
) {
PubDateYear = tag
.querySelector("Article")
.querySelector("Journal")
.querySelector("JournalIssue")
.querySelector("PubDate")
.querySelector("Year").textContent;
}

let ArticleIdListData = [];
let PubmedData = tag.querySelector("PubmedData");
for (let obb of PubmedData.children) {
if (obb.nodeName == "ArticleIdList") {
for (let ArticleId of obb.children) {
if (ArticleId) {
ArticleIdListData.push({
IdType: ArticleId.getAttribute("IdType"),
value: ArticleId.textContent,
});
if (ArticleId.getAttribute("IdType") == "pmc") {
PMCID = ArticleId.textContent;
}
if (ArticleId.getAttribute("IdType") == "doi") {
DOI = ArticleId.textContent;
}
}
}
break;
}
}

let article = {};
article["PMID"] = PMID;
article["Title"] = ArticleTitle;
article["FullJournalName"] = Title;
article["Authors"] = AuthorString;
article["Abstract"] = abstractXML;
article["pubYear"] = PubDateYear;
article["PMCID"] = PMCID;
article["DOI"] = DOI;
article["NCI_MeshTerms"] = NCI_MeshTerms;
article["NCI_KeyWords"] = NCI_KeyWords;
article["NCI_GrantList"] = NCI_GrantList;
article["NON_NCI_GrantList"] = NON_NCI_GrantList;
article["PublicationType"] = PublicationType;
article["GrantListData"] = GrantListData;
article["ISSN"] = ISSN;

if (mode === "researcher") {
self.publicationData.push(article);
// self.ALL_Pubs_Scopus(issn_List);
}

if (mode === "searchQuery") {
self.searchQuery.push(article);
}
} //for (var i = 0; i < getPubmedArticles.length; i++)
// let y = this.articles

// var grid = this.$refs.pubGrid.ej2Instances;
// grid.refresh(); article

//self.publicationData.push(article) // = res.data;
// console.log("Processed " + pmid)
})
.catch((err) => {
 alert(err)
console.log(err);
});

this.NIH_Pubs_step = 2
_altmetric_embed_init();

//this.tabChange();
},


  pubMedXML_X(pmidList, mode) {
    this.publicationData=[];
    this.searchQuery=[];
    
    var pmidArr = pmidList.split(',') // this.new_researchers[0].SELECTED_PMIDS.split(',');
    var uniq = [ ...new Set(pmidArr) ]     

    uniq.sort(function(a, b) {
          return b - a;
        }); 

  if (uniq.length > 15){
     uniq.length = 15
   }
   

    let pmid = uniq.join(",")
    let issn_List ='';
    
    var self = this;
  this.articles = [];
 
      axios.get(
          "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=" +
          pmid +
          "&api_key=d0784f454c4ca9a3cb738d33f97b4ae34808"
      )
      .then(response => {
          const parser = new DOMParser();
          const xmlDOM = parser.parseFromString(response.data, "text/xml");
          const getPubmedArticles = xmlDOM.querySelectorAll('PubmedArticle')
          for (var i = 0; i < getPubmedArticles.length; i++) {
              let tag = getPubmedArticles[i];
              //PMID
            
              let PMID = "";
              let PMCID = "";
              let DOI = "";
              if (tag.querySelector('PMID')) {
                  PMID = tag.querySelector('PMID').textContent;
              }

             // console.log(PMID);


              //Title
              let Title = ""
              if (tag.querySelector('Article').querySelector("Title")) {
                  Title = tag.querySelector('Article').querySelector("Title").textContent;
              }

              //ArticleTitle
              let ArticleTitle = ""
              if (tag.querySelector('Article').querySelector("ArticleTitle")) {
                  ArticleTitle = tag.querySelector('Article').querySelector("ArticleTitle").textContent;
              }

              let ISSN = ""
              if (tag.querySelector('Article').querySelector("ISSN")) {
                  ISSN = tag.querySelector('Article').querySelector("ISSN").textContent;
                  issn_List += issn_List + ","
              }
               





             // console.log(ArticleTitle);

              //AuthorList
              let AuthorList = ""
              /// * let authorXML = ""
              if (tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author")) {
                  AuthorList = tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author");
               ///*   authorXML = tag.querySelector('Article').querySelector('AuthorList').outerHTML
              }

              let AuthorString = "";
              for (let j = 0; j < AuthorList.length; j++) {
                  if (AuthorList[j].querySelector('LastName')) {
                      AuthorString += AuthorList[j].querySelector('LastName').textContent
                  }

                  if (AuthorList[j].querySelector('Initials')) {
                      AuthorString += " " + AuthorList[j].querySelector('Initials').textContent
                  }

                  AuthorString += ", "
                  //		AuthorString += AuthorList[j].querySelector('LastName').textContent + " " + AuthorList[j].querySelector("Initials").textContent + ", "

              }

              AuthorString = AuthorString.replace(/,\s*$/, "");
            //  console.log(AuthorString);

              let GrantList = [];
              let GrantListData = [];
              let NCI_GrantList = "";
              let NON_NCI_GrantList ="";

              if (tag.querySelector('GrantList')) {
                  GrantList = tag.querySelector('GrantList').querySelectorAll("Grant");
              }



               if (tag.querySelector('Article').querySelector('GrantList')) {
                   GrantList = tag.querySelector('Article').querySelector('GrantList').querySelectorAll("Grant");
              }

         

              for (let j = 0; j < GrantList.length; j++) {
                  let GrantID = "";
                  let Acronym = "";
                  let Agency = "";
                  let Country = "";

                  if (GrantList[j].querySelector('GrantID')) {
                      GrantID = GrantList[j].querySelector('GrantID').textContent
                  }

                  if (GrantList[j].querySelector('Acronym')) {
                      Acronym = GrantList[j].querySelector('Acronym').textContent
                  }

                  if (GrantList[j].querySelector('Agency')) {
                      Agency = GrantList[j].querySelector('Agency').textContent
                  }

                  if (GrantList[j].querySelector('Country')) {
                      Country = GrantList[j].querySelector('Country').textContent
                  }
                     if(Agency.includes("NIH")){
                      NCI_GrantList = GrantID + "/" +Acronym + "/" + Agency +"/" + Country +  ", "
                     } else {
                      NON_NCI_GrantList = GrantID + "/" +Acronym + "/" + Agency +"/" + Country + ", "

                     }
                     
                  //    NCI_GrantList
                   GrantListData.push({
                      GrantID: GrantID,
                      Acronym: Acronym,
                      Agency: Agency,
                      Country: Country,
                      NCI_GrantList: NCI_GrantList,
                      NON_NCI_GrantList: NON_NCI_GrantList
                      
                 })
              }

              //abstract
               let abstractXML = ""
              // if (tag.querySelector('Article').querySelector('Abstract')) {
              //     abstractXML = tag.querySelector('Article').querySelector('Abstract').outerHTML
              //     console.log(abstractXML)
              // }
          const abstracts = tag.querySelector('Article').querySelectorAll("AbstractText");
        // let abstract_text = "";
           abstracts.forEach(a => {
          let tmpItem = [];
          if (a.getAttribute("Label") !== null) {
            //  abstract_text +=
            //   "<b>" + a.getAttribute("Label") + "</b>: " + a.textContent;
            tmpItem.title = "<br><b>" + a.getAttribute("Label") + "</b>";
            abstractXML += "<br><b>" + a.getAttribute("Label") + ": </b>";
            tmpItem.body = a.textContent;
             abstractXML += a.textContent;
          } else {
            tmpItem.body = a.textContent;
            tmpItem.title = "Abstract";
             abstractXML += "<br><b>Abstract: </b>";
              abstractXML +=a.textContent
            
          }
       
         });


       //MeshHeadingList
              let MeshHeadingList = []; 
              let NCI_MeshTerms = ""             

              if (tag.querySelector('MeshHeadingList')) {
                  MeshHeadingList = tag.querySelector('MeshHeadingList').querySelectorAll("MeshHeading");
              }

           
           for (let j = 0; j < MeshHeadingList.length; j++) {
             //  if (KeywordList[j].querySelector('Keyword')) {
                      NCI_MeshTerms += MeshHeadingList[j].textContent + ";"
             //     }
           }



          //KeywordList 
            let KeywordList = [];              

              if (tag.querySelector('KeywordList')) {
                  KeywordList = tag.querySelector('KeywordList').querySelectorAll("Keyword");
              }

           let NCI_KeyWords =""
           for (let j = 0; j < KeywordList.length; j++) {
             //  if (KeywordList[j].querySelector('Keyword')) {
                      NCI_KeyWords += KeywordList[j].textContent + ";"
             //     }
           }

          // console.log("NCI_KeyWords " + NCI_KeyWords)

          //PublicationType
            let PublicationTypeList = [];
            let PublicationType = "";      

            if (tag.querySelector('Article').querySelector('PublicationTypeList')) {
                  PublicationTypeList = tag.querySelector('Article').querySelectorAll("PublicationTypeList");
              }
                for (let j = 0; j < PublicationTypeList.length; j++) {
                      

                  if (PublicationTypeList[j].querySelector('PublicationType')) {
                      PublicationType += PublicationTypeList[j].querySelector('PublicationType').textContent+", "
                  }
                }
        

              //ISOAbbreviation
             // let ISOAbbreviation = ""
            //  if (ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation")) {
           //       ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation").textContent;
           //   }

              //PudDate year and month
              let PubDateYear = "";
            //  if (PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year")) {
                  PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year").textContent;
           //   }
         
              let ArticleIdListData = [];
              let PubmedData = tag.querySelector('PubmedData');
              for (let obb of PubmedData.children) {
                  if (obb.nodeName == "ArticleIdList") {
                      for (let ArticleId of obb.children) {
                          if (ArticleId) {
                              ArticleIdListData.push({
                                  IdType: ArticleId.getAttribute('IdType'),
                                  value: ArticleId.textContent
                                
                              })
                                if (ArticleId.getAttribute('IdType') =="pmc"){
                                    PMCID = ArticleId.textContent
                                }
                                 if (ArticleId.getAttribute('IdType') =="doi"){
                                    DOI = ArticleId.textContent
                                }
                          }
                      }
                      break;
                  }

              }

            let article = {};
            article["PMID"] = PMID;
            article["Title"] = ArticleTitle
            article["FullJournalName"] = Title
            article["Authors"] = AuthorString
            article["Abstract"] = abstractXML
            article["pubYear"] = PubDateYear
            article["PMCID"] = PMCID
            article["DOI"] = DOI
            article["NCI_MeshTerms"] = NCI_MeshTerms
            article["NCI_KeyWords"] = NCI_KeyWords
            article["NCI_GrantList"] = NCI_GrantList
            article["NON_NCI_GrantList"] = NON_NCI_GrantList
            article["PublicationType"] = PublicationType
            article["GrantListData"] = GrantListData
            article["ISSN"] = ISSN

         

          if (mode==='researcher'){

              self.publicationData.push(article) 
             //   self.ALL_Pubs_Scopus(issn_List);
          } 
          
          if (mode ==='searchQuery') {
          self.searchQuery.push(article) 

          }
             
             
             

          } //for (var i = 0; i < getPubmedArticles.length; i++) 
      //    let y = this.articles

        //  var grid = this.$refs.pubGrid.ej2Instances;
        //      grid.refresh();  article

      //self.publicationData.push(article) // = res.data; 
      //    console.log("Processed " + pmid)
       
    
      })
      .catch(err => {
      //    alert(err)
      console.log(err )
      })



},

      
      },
   


      
      mounted() {
        this.$refs.section.scrollTo(0, 0);
     

      //   this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[2]
      //  this.membername = this.researcher.PRIMARY_NAME
      //  this.memberImage = this.researcher.IMAGE   // "https://hcc.admin.musc.edu/rockey.jpg",
      //  this.NIH_Reporter_ID= this.researcher.NIH_REPORTER_ID
      //  this.selectedPubs = this.researcher.SELECTED_PMIDS

  //      this.$nextTick(() => {
    // The whole view is rendered, so I can safely access or query
    // the DOM. ¯\_(ツ)_/¯
   // if(this.step ===3){

   //     _altmetric_embed_init(document.getElementById('selectedPubs'));
   //
    
   
  //   this.loadProfileGrants()
  //   this.pubMedXML(this.selectedPubs, 'researcher');
   //this._altmetric_embed_init();
    // this._altmetric_embed_init(document.getElementById('selectedPubs'));
   //  this._altmetric_embed_init('#selectedPubs');
   // }
   // })
  //  document.onreadystatechange = () => {
  //   if (document.readyState == "complete") {
  //     console.log('Page completed with image and files!')
  //     // fetch to next page or some code
  //     _altmetric_embed_init();
  //   }
  // }

   
      
  },


      created(){

        this.showLine = false
       // this.loadSelectedResearcher('') 

     //   this.getResearcherData();

      //  this.researcher = RESEARCHERSDATA.RESEARCHERSDATA[2]
      //  this.membername = this.researcher.PRIMARY_NAME
      //  this.memberImage = this.researcher.IMAGE   // "https://hcc.admin.musc.edu/rockey.jpg",
     
      //  console.log(this.$route.query.id) // outputs 'yay'
      let urlParams = new URLSearchParams(window.location.search)
     // console.log(urlParams)
   //  this.getAllResearcherData();

    if (urlParams.size === 0) {  
      this.loadSelectedResearcher('') 
    }
      


      // if (urlParams.has('edit') === true){
      //     this.showEdit = true
      //     console.log(urlParams.get('edit')); // "MyParam"
      //     this.styleObject["max-height"] = '600px'    
      // } // true

      if (urlParams.has('MemberID') === true ){
          console.log(urlParams.get('MemberID')); // "MyParam"
          this.MemberID = urlParams.get('MemberID')
       //   this.loadSelectedMember(this.researcherID, "MemberID") 
          this.step = 4 
          this.showSpinner = false 
          this.showSearch = false     
      } 
      
      // if (urlParams.has('id') === true){
      //     console.log(urlParams.get('id')); // "MyParam"

      //     this.researcherID = urlParams.get('id')
      //     this.loadSelectedResearcher(this.researcherID)
      //     this.step = 4
      // } 
      


     

   //   let address = urlParams.get("id"); // null

      // if(address === null){
      //   window.location.href = "https://researchers.hcc.musc.edu"; 
      // }
  
      const img = new Image();
      
  img.onload = function() {

  //  console.log(RESEARCHERSDATA.RESEARCHERSDATA[0].PRIMARY_NAME)
    //alert(this.naturalWidth + 'x' + this.height);
  }
   img.src = 'https://muschealth.org/-/sm/news-center-media/news-center-images/2017-images/10/dubois.ashx?h=666&w=1000&la=en&hash=EA10C2D6CF3E784279121BFCF213CF7C' //'https://hcc.admin.musc.edu/rockey.jpg';
  
 //  document.onscroll =() =>{
//   if (this.setScroll===true){   
//     this._altmetric_embed_init();
//     this.NIH_Pubs_step = 2
//   this.setScroll = false
//  }
   
 //  }


  //  document.onreadystatechange = () => {
  //   if (document.readyState == "complete") {
  //     console.log('Page completed with image and files!')
  //     // fetch to next page or some code
  //     this._altmetric_embed_init();
  //   }
  // }


      },
      computed: {   
        
              
        selectedResearch_Interest(){     
        if (typeof this.researcher.RESEARCH_INTEREST!== 'undefined' ) {  
          if( this.researcher.RESEARCH_INTEREST.ITEM = "RESEARCH_INTEREST"){
              return this.researcher.RESEARCH_INTEREST.filter(item => item.ISSELECTED);
          }  else {
             this.researcher.RESEARCH_INTEREST = [];
            return this.researcher.RESEARCH_INTEREST

          }       
          }
        },

         selectedSpecialities(){
          if (typeof this.researcher.SPECIALITIES !== 'undefined' ) {  
         return this.researcher.SPECIALITIES.filter(item => item.ISSELECTED);
         } else {

           this.researcher.SPECIALITIES =[];
          return this.researcher.SPECIALITIES
         }
        },

        selectedAcademic_Focus(){
          if (typeof this.researcher.ACADEMIC_FOCUS !== 'undefined' ){  
          return this.researcher.ACADEMIC_FOCUS.filter(item => item.ISSELECTED);
          } else {
             this.researcher.ACADEMIC_FOCUS = [];
            return this.researcher.ACADEMIC_FOCUS
          }
          },



        selectedTitle(){     
        if (typeof this.researcher.TITLE !== 'undefined' ) {  
         return this.researcher.TITLE.filter(item => item.ISSELECTED);
         } else {
           this.researcher.TITLE =[];
          return this.researcher.TITLE
         }
        },

        

      //   selectedResearchOverView(){
      //     if (typeof this.researcher.RESEARCH_OVERVIEW !== 'undefined' && this.researcher.RESEARCH_OVERVIEW.length > 0) {  
      //     return this.researcher.RESEARCH_OVERVIEW.filter(item => item.ISSELECTED);
      //   }
      // },

      // selectedPublications(){
      //     if (typeof this.researcher.SELECTED_PMIDS !== 'undefined' && this.researcher.SELECTED_PMIDS.length > 0) {  
      //     return this.researcher.SELECTED_PMIDS;
      //   }
      // },
      
  
        selectedPositions() {
          if (typeof this.researcher.POSITIONS !== 'undefined') {  
        
          return this.researcher.POSITIONS.filter(item => item.ISSELECTED);
         
        } else {
          this.researcher.POSITIONS=[];
          return this.researcher.POSITIONS

        }
      },
  
        selectedEducationTraining() {
        //  if (typeof this.researcher.EDUCATION_TRAINING !== 'undefined' && this.researcher.EDUCATION_TRAINING.length > 0) {  
          if (typeof this.researcher.EDUCATION_TRAINING !== 'undefined' ) {  
          return this.researcher.EDUCATION_TRAINING.filter(item => item.ISSELECTED);
          } else {
            this.researcher.EDUCATION_TRAINING=[];
            return this.researcher.EDUCATION_TRAINING
          }
        },
        selectedFellowship(){
          if (typeof this.researcher.FELLOWSHIP !== 'undefined' ) {  
            return this.researcher.FELLOWSHIP.filter(item => item.ISSELECTED);
        } else {
          this.researcher.FELLOWSHIP =[];
          return this.researcher.FELLOWSHIP
        }
      } ,
        selectedHonorsAwards(){
          if (typeof this.researcher.HONORSAWARDS !== 'undefined' ) {  
            return this.researcher.HONORSAWARDS.filter(item => item.ISSELECTED);
        } else {
          this.researcher.HONORSAWARDS =[];
          return this.researcher.HONORSAWARDS
        }
      }  ,
  
        selectedMemberships(){
          if (typeof this.researcher.MEMBERSHIPS !== 'undefined' ) {  
            return this.researcher.MEMBERSHIPS.filter(item => item.ISSELECTED);
        } else {
          this.researcher.MEMBERSHIPS= [];
          return this.researcher.MEMBERSHIPS
        }
      }
  
     
          
  
      }
    };
  </script>
  
  <style scoped>
  button.btn.btn-primary {
    width: 100%;
    margin: 5px 0;
    background: #00447c;
    border-color: #00447c;
    padding: 6px;
}
button.btn.btn-primary2 {
    width: 100%;
    margin: 5px 0;
    background: #b9dbe5;
    border-color: #00447c;
    color: #00447c;
    padding: 6px;
    margin-top: 25px;
    margin-bottom: 25px;
}
  a:link.myLink
{
    color:#FFFFFF;
}

a:visited.myLink
{
    color:#FFFFFF;
}

a:hover.myLink 
{
    color:#FFFFFF;
    cursor:grab;
    font-weight: bold !important;
      
}
  ul {
     padding-left: 20px !important;
    list-style-type: disc !important;
    list-style-position: outside !important;
    padding-left: 20px !important;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 1rem !important;
    line-height: 1.5rem !important;

    }
    ul li {
        padding-left: 30px !important;
        font-family: Arial, Helvetica, sans-serif !important;
        font-size: 1rem !important;
        line-height: 1.5rem !important;
      }
  /* #class_if_is_true {
    max-height: 350px;
    background: teal;
  } */
  
  /* #else_class{
  
    max-height: 150px;
    background: teal;
  } */
  /* span {
        position: relative;
        left: 20px;
      } */

      /* li.list{
        list-style-position: outside;

      } */
.person-info{
  font-size: 18px !important;
  font-family: Arial, Helvetica, sans-serif !important;
  line-height: 1.5rem !important;   
}

  .custom-tab-title-class{
  font-size: 20px !important;
  color: #fff !important ;
}
  .grantlist{
    display: flex;
    flex-direction: row;
  }
  h3 {
    color: #00447c !important;
    font-weight: 500 !important;
    font-size: xx-large !important;
    margin-top: 40px !important;
  }
  hr {
        position: relative !important;
        top: 0px !important;
        border: none !important;
        height: 40px !important;
        background: teal !important;
        margin-bottom: 5px !important;
    }
  .noIcon {
    list-style-type: none !important;
    font-weight: bold !important;
    font-size: 20px !important;
   }
  .card-card_title {
    font-size: 30px !important;
  }
  .profile_section-title{
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 18px !important;
  }
  .profile_article__body{
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 18px !important;
  }
   .profile-card-text {
    background: #00447c !important;
    color: #fff !important ;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 18px !important;
   }
   .profileFind-card-text {
    background: #fff !important;
    color: #fff !important ;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 18px !important;
   }
  .card-img{
   /* width: 100%!important;
   height: auto!important; */
   object-fit: cover !important;
  }
    .article.article--bio
    .article__image--main:not(.no-landscape)
    + .article__title {
      background-color: rgba(0, 86, 184, 0.9) !important;
      box-shadow: 0 8px 16px rgb(0 0 0 / 45%) !important;
      color: #fff !important;
      display: inline-block !important;
      margin: -3.75rem 0 0 1.5rem !important;
      padding: 0.5rem 1rem 1rem !important;
      width: -webkit-max-content !important;
      width: -moz-max-content !important;
      width: max-content !important;
    }
    .profile_section_sub-title{
      font-family: Arial, Helvetica, sans-serif !important;
      font-weight: bold !important;
    }
    .profile_sub_section-title{
      font-family: Arial, Helvetica, sans-serif !important;
    }
    .article.article--bio .article__title .main-title * {
      display: inline-block !important;
      margin-bottom: 0 !important;
    }
  
    .article.article--bio .article__title .main-title .credentials {
      font-size: 150% !important;
      margin-left: 0.5rem !important;
    }
  
    /* .article__title .title {
      font-size: 3rem;
      line-height: 3.5rem;
      color: #fff;
    }
   */
    .article__header-bundle {
      margin-bottom: 2rem !important;
    }
  
  .hr-highligh {
    height: 4px !important;
    background-color: #67C9D0 !important;
   
   
  }
  .title-highligh {
    padding-top: 30px!important;
  }
  .title-highligh .card-title {
    font-size: 35px !important;
  }
  </style>
  <!-- https://tailwindcss.com/docs/font-size -->