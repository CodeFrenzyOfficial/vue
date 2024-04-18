<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template> 
  <div>
    <vue-element-loading :active="isLoading" :is-full-screen="true"/>

    <b-card  no-body>
      <b-tabs card  v-model="step">
        <b-tab title="Researchers" @click = "tabChange('one')" >
         <b-card-text></b-card-text>
           <b-card-text>
						<div class="row">
							<div class="col-md-9">
								<div class="results-left">
									<div id="layOut">
										<h1 class="mainH1">Find a Hollings Cancer Center Researcher</h1>
										<br>
										<div class="person-info">
											<h5>{{search_results}}</h5>
										</div>
										<div class="person-info" v-for="dataObj in researchers.RESEARCHERS" :key="dataObj.EMAIL">
											<hgroup class="clearfix">
												<h3>
													<a href="#0">{{ dataObj.PRIMARY_NAME }}
													</a>
												</h3>
											</hgroup>
											<div class="row">
												<div class="col-md-3 col-sm-3 col-xs-3">
                          
													<img v-bind:src="dataObj.IMAGE" class="person-image">
                          <a href="#" v-on:click="selectedProfile(dataObj)">
														<button type="button" class="view-profile">View Old Profile</button>
													</a>
                          <a href="#" v-on:click="selectedNewProfile(dataObj)">
														<button type="button" class="view-profile">View New Profile</button>
													</a>
                        
												</div>
												<div class="col-md- col-sm-5 col-xs-5">
													<h5>Department</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{dataObj.DEPARTMENT}}</li>
													</ul>
													<br><br>
													<h5>Program</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{dataObj.PROGRAM}}</li>
													</ul>    
												</div>
												<div class="m-clear">
												</div>
												<div class="col-sm-4">
                          	<h5>Rank</h5>
													<p><i class="fa fa-plus"></i>&nbsp; {{dataObj.ACADEMIC_TITLE}}</p>
                           <br>
													<!-- <p><i class="fa fa-envelope"></i>&nbsp;<a v-bind:href="dataObj.EMAIL">{{ dataObj.EMAIL }}</a></p> -->
														<h5>Membership</h5>
                          <p><i class="fa fa-plus"></i>&nbsp; {{ dataObj.MEMBERSHIP }}</p>
                          <br>
                             <h5>College</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{dataObj.COLLEGE}}</li>
													</ul>
												</div>
											</div>                      
										</div>                    
									</div>                  
								</div>                
							</div>              
              <div class="col-md-3">
                    <SearchBar />
                </div>
						</div>
					</b-card-text>
				</b-tab>
        <b-tab title="ADD NEW OR EDIT" @click = "tabChange('NEW')"  >  
           <b-card-text></b-card-text>
           <b-card-text>
						<div class="row">
							<div class="col-md-12">
								<div class="results-left">
									<div id="layOut">
										<!-- <h1 class="mainH1">Add or edit a Researcher</h1>
										<br> -->
										<!-- <div class="person-info">
											<h5>{{edit_results}}</h5>
										</div> -->
										<div class="person-info">
										<hgroup class="clearfix">
												<h3>
													<a href="#0">{{ PRIMARY_NAME }}
													</a>
												</h3>
											</hgroup>
											<div class="row"> 
												<div class="col-md-2 col-sm-2 col-xs-2">	
                        <img v-bind:src="image_results" class="person-image">
                       	<a href="#" v-on:click="step = 0">
														<button type="button" class="view-profile">Back</button>                             
													</a>

                          <a href="#" v-on:click="step = 4">
														<button type="button" class="view-profile">New Page</button>                             
													</a>

                          
												</div>
												<div class="col-md-6 col-sm-5 col-xs-5">
													<h5>Department</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{DEPARTMENT}}</li>
													</ul>
													<br><br>
													<h5>Program</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{PROGRAM}}</li>
													</ul>   
												</div>
												<div class="m-clear">
												</div>
												<div class="col-sm-4">
                          	<h5>Rank</h5>
													<p><i class="fa fa-plus"></i>&nbsp; {{ACADEMIC_TITLE}}</p>
                           <br>
													<!-- <p><i class="fa fa-envelope"></i>&nbsp;<a v-bind:href="dataObj.EMAIL">{{ dataObj.EMAIL }}</a></p> -->
														<h5>Membership</h5>
                          <p><i class="fa fa-plus"></i>&nbsp; {{MEMBERSHIP}}</p>
                          <br>
                             <h5>College</h5>
													<ul class="work" style="list-style: none;">
														<li><i class="fa fa-angle-double-right "></i>&nbsp;{{COLLEGE}}</li>
													</ul>
												</div>                       
											</div>
										</div>
									</div>
                  <span class="person-info"><h5>Research Interest:</h5></span>	                 
                
                 {{RESEARCH_INTEREST}}
                  <br><br> 
                 <span class="person-info"><h5>Positions:</h5></span>	   
               
                  {{POSITIONS}}    
                     <br><br>          
								</div>
               

               	<div class="row"> 
                    <b-tabs card  v-model="pub_step_top"  >
                    <b-tab title="Publications"  @click = "tabChange('mainPubs')" >
                   <b-tabs card  v-model="pub_step"  >
                    <b-tab title="Publications with Abstracts"  @click = "tabChange('selectedPubs')" id="selectedPubs" v-model="pub_step" >

                    <b-card-text> 
                     	<div  class="person-info" v-for="obj in publicationData" :key="obj.PMID"  v-bind:data-pmid='obj.PMID' >                       
                     <div><div class='altmetric-embed' data-badge-type='donut' v-bind:data-pmid='obj.PMID' data-link-target='_blank' data-badge-popover='bottom' ></div></div>                  
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
                            <br><b>Grant Support:</b> <br>
                         <div v-for="(objGrant) in obj.GrantListData"  :key="objGrant.NCI_GrantList" class="grantlist" >   
                        
                          <!-- <div v-for="(objGrant, i) in obj.GrantListData"  :key="objGrant.NCI_GrantList" >    -->
                          <b>
                          <a class="nav-link"  @click.prevent="load_NIH_Reporter(objGrant.GrantID)"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >
                          {{ objGrant.GrantID }} 
                            </a>
                            </b>
                         <!-- <span v-if="i < obj.GrantListData.length - 1"></span>  -->
                      </div>
                      
                    </div>

                     <!-- <br><b>Grant Support:</b>
                       <div v-for="objGrant in obj.GrantListData"  :key="objGrant.NCI_GrantList" >                      
                       <b><a class="nav-link"  @click.prevent="load_NIH_Reporter(objGrant.GrantID)"                       
                         v-bind:href="''"                       
                         aria-label= 'Support' >{{ objGrant.GrantID }}</a></b>
                     
                         </div> -->


                   </div> 

                  
                        <!-- <a class="nav-link"  @click.prevent="load_NIH_Reporter(objGrant.GrantID)"                                               
                   aria-label= 'Support' >{{ objGrant.GrantID }}</a>
                      -->

               <!-- {{refresh()}} -->
        
                </b-card-text>

                    </b-tab>
                     <b-tab title="All Publications"  @click = "tabChange('allPubs')" id="allPubs" >

                      <b-card-text> 
                     	<div id="allPubs" class="person-info" v-for="obj in allpublicationData" :key="obj.uid"  v-bind:data-pmid='obj.uid' > 
                      
                      <ol>
                        <li>
                                     
                     <b><i>{{ obj.source }}</i></b> {{obj.pubdate}}<br>
                       <h6><b><a class="nav-link"
                         v-bind:href="'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + obj.uid"
                         target='_blank'
                         aria-label=“Article”>{{ obj.title }}</a></b></h6> 
                       {{ obj.all_authors }}<br>  
                        <div>Citations: <span  class='altmetric-embed' data-badge-type='medium-bar' v-bind:data-pmid='obj.uid' data-link-target='_blank' data-badge-popover='bottom' ></span></div> 
                      <b-navbar type="dark" variant="secondary"></b-navbar>
                 
                      <!-- {{refresh()}}  -->
                     </li>
                     </ol>
                    </div> 

                  

                
            
                </b-card-text>
                    </b-tab>
                   </b-tabs>



                </b-tab>

              <b-tab title="Clinical Trials" @click = "tabChange('Clinical_Trials')"  v-if="hasClinicalTrials">
            <b-card-text>
              
	              <div id="allPubs" class="person-info" v-for="(obj, index) in clinicalTrials" :key="index"  >
                <b>Date added:</b> {{obj.DATE_ADDED}}<br>
                  <b> Keywords: </b> {{obj.KEYWORDS}}<br>
                     <b>Title:</b> <br>
                   {{obj.TITLE}}<br>
                   <b>Summary:</b><br>
                   {{obj.Summary}}
                </div>


             
              </b-card-text>
              </b-tab>

               <b-tab title="Metrics" @click = "tabChange('metrics')">
                  <b-tabs card  v-model="tabsMetric">
                    <b-tab title="Infulence" >

                 <b-card-text> 
                   <ejs-grid :dataSource="iCitepublicationData" :allowPaging="true"  :allowTextWrap='true'>
      <e-columns>
        <e-column field='pmid' headerText='PMID' textAlign='Center' width=90></e-column>
        <e-column field='year' headerText='Year' textAlign='Center' width=90></e-column>
        <e-column field='title' headerText='Title' textAlign='Left'  width=150></e-column>
        <e-column field='authors' headerText='Authors' textAlign='Left' width=150></e-column>
        <e-column field='journal' headerText='Journal' textAlign='Left'  width=150></e-column>
        <e-column field='nih_percentile' headerText='NIH Percentile' textAlign='Center'  width=120></e-column>
      
        <e-column field='relative_citation_ratio' headerText='RCR' textAlign='Center' width=90></e-column>
      </e-columns>
    </ejs-grid>                
               
  </b-card-text>
  </b-tab>
 <b-tab title="Translation" >

  <b-card-text> 
      <ejs-grid :dataSource="iCitepublicationData" :allowPaging="true"  :allowTextWrap='true' :headerCellInfo="queryCellInfoEvent">
      <e-columns>
        <e-column field='pmid' headerText='PMID' textAlign='Center' width=90></e-column>
        <e-column field='year' headerText='Year' textAlign='Center' width=90></e-column>
        <e-column field='title' headerText='Title' textAlign='Left'  width=250></e-column>
         <!--<e-column field='authors' headerText='Authors' textAlign='Left' width=150></e-column>
        <e-column field='journal' headerText='Journal' textAlign='Left'  width=150></e-column> -->
        <e-column field='nih_percentile' headerText='APT' textAlign='Center'  width=120></e-column>      
        <e-column field='relative_citation_ratio' headerText='Clinical' textAlign='Center' width=70></e-column>
        <e-column field='human' headerText='Human' textAlign='Center'  width=70></e-column>      
        <e-column field='animal' headerText='Animal' textAlign='Center'  width=70></e-column>      
        <e-column field='molecular_cellular' headerText='Mol/Cell' textAlign='Center'  width=90></e-column>      
        <e-column field='is_research_article' headerText='Article ' textAlign='Center'  width=70></e-column>  
        <e-column field='relative_citation_ratio' headerText='RCR' textAlign='Center' width=90></e-column>
      </e-columns>
    </ejs-grid>                
               
  </b-card-text>
</b-tab>
     <b-tab title="Citations" >
                 <b-card-text> 
                   <ejs-grid :dataSource="iCitepublicationData" :allowPaging="true"  :allowTextWrap='true'>
      <e-columns>
        <e-column field='pmid' headerText='PMID' textAlign='Center' width=90></e-column>
        <e-column field='year' headerText='Year' textAlign='Center' width=90></e-column>
        <e-column field='title' headerText='Title' textAlign='Left'  width=150></e-column>
        <e-column field='authors' headerText='Authors' textAlign='Left' width=150></e-column>
        <e-column field='journal' headerText='Journal' textAlign='Left'  width=150></e-column>
        <e-column field='citation_count' headerText='Total Citations' textAlign='Center'  width=120></e-column>      
        <e-column field='references' headerText='Total References' textAlign='Center' width=110 :valueAccessor = "references" ></e-column>
        <e-column field='relative_citation_ratio' headerText='RCR' textAlign='Center' width=90></e-column>
      </e-columns>
    </ejs-grid>                
               
  </b-card-text>


                
</b-tab>
    <b-tab title="Scopus" @click = "tabChange('scopus')">
                 <b-card-text> 
        <ejs-grid  ref="gridScopus" id='gridScopus'  :dataSource="allpublicationData" :allowPaging="true"  :allowTextWrap='true'>
        <e-columns>
        <e-column field='uid' headerText='PMID' textAlign='Center' width=90></e-column>
        <e-column field='year' headerText='Year' textAlign='Center' width=90></e-column>
           <e-column field='title' headerText='Title' textAlign='Left'  width=150></e-column>
          <e-column field='source' headerText='Journal' textAlign='Left'  width=150></e-column>
        <e-column field='issn' headerText='issn' textAlign='Center' width=90></e-column>
        <e-column field='essn' headerText='essn' textAlign='Center' width=90></e-column>
        <e-column field='' headerText='CiteScore' textAlign='Center' width=90></e-column>
        <e-column field='' headerText='SNIP' textAlign='Center' width=90></e-column>
        <e-column field='' headerText='SJR' textAlign='Center' width=90></e-column>
        <e-column field='' headerText='JIF' textAlign='Center' width=90></e-column>
      
       <!-- <e-column field='title' headerText='Title' textAlign='Left'  width=150></e-column>
        <e-column field='authors' headerText='Authors' textAlign='Left' width=150></e-column>
        <e-column field='journal' headerText='Journal' textAlign='Left'  width=150></e-column>
        <e-column field='citation_count' headerText='Total Citations' textAlign='Center'  width=120></e-column>      
        <e-column field='references' headerText='Total References' textAlign='Center' width=110 :valueAccessor = "references" ></e-column>
        <e-column field='relative_citation_ratio' headerText='RCR' textAlign='Center' width=90></e-column> -->
      </e-columns>
    </ejs-grid>                
               
  </b-card-text>


                
</b-tab>
  <b-tab title="Glossary" >
                 <b-card-text> 
                  
               
                </b-card-text>


                
</b-tab>
    
</b-tabs>
            
              </b-tab>

                <b-tab title="Selected NIH Grants"  @click = "tabChange('grants')">
            
                <div class="person-info" v-for="obj in fundingData" :key="obj.pmid"  >    
                     
                  {{obj.fiscal_year}} 
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
               <b-tab title="Biography" >               
                 <b-table striped hover :items="bioitems" thead-class="d-none"></b-table>
              </b-tab>


                <b-tab title="Interests"  @click = "tabChange('interest')" > 
                  <cloud :data="cloud_words" :fontSizeMapper="fontSizeMapper" />             
                 
              </b-tab>

             <b-tab title="Links"  @click = "tabChange('links')" > 
                  <b-card-text> 
                  <b-table :items="sortedLinks">
                  <template #cell(DATA)="data">
                  <span v-html= "data.value"></span>
                   

                  </template>

                
                  </b-table>
                     <!-- <b-table striped hover :items="sortedLinks" thead-class="d-none"  ></b-table> -->
                 
                 <!-- <div class="person-info" v-for="(obj, index) in new_researchers.LINKS" :key="index" >   
                 
                    {{obj.ITEM}} 
                   
                    </div>                 
                     -->

               
                             </b-card-text>

                 
              </b-tab>


            <b-tab title="Video"  v-if="hasVideo">                  
                <div>
  <b-embed
    type="iframe"
    aspect="16by9"
    :src= "VIDEO_URL"
    allowfullscreen
  ></b-embed>
</div>
              </b-tab>



      </b-tabs>
	</div>
							</div>
            
						</div>
					</b-card-text>
        </b-tab>
                <!-- <b-tab title="Worksheet" @click = "tabChange('worksheet')"   >
                     <a href="#" v-on:click="searchPubMed()">
														<button type="button" class="view-profile">Run Query</button>
													</a>
  
                    <b-card-text> 
                     	<div  class="person-info" v-for="obj in searchQuery" :key="obj.PMID"  v-bind:data-pmid='obj.PMID' >                       
                     <div><div class='altmetric-embed' data-badge-type='donut' v-bind:data-pmid='obj.PMID' data-link-target='_blank' data-badge-popover='bottom' ></div></div>                  
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
                     
                   </div> 
                </b-card-text>
  

</b-tab> -->
<!-- <b-tab title="WIP Style" @click = "tabChange('style')"   >
<newStyle />
</b-tab> -->

<b-tab title="Profile" @click = "tabChange('mockstyle')"   >
<mockStyle />
</b-tab>

<b-tab title="ROCKEY" @click = "tabChange('ROCKEY')"   >
<mockStyle />
</b-tab>

<b-tab title="ROJEWSKI" @click = "tabChange('ROJEWSKI')"   >
<mockStyle />
</b-tab>

<b-tab title="BLANCO" @click = "tabChange('BLANCO')"   >
<mockStyle />
</b-tab>

<b-tab title="Profile" @click = "tabChange('ROSENZWEIG')"   >
<mockStyle />
</b-tab>



      </b-tabs>
    </b-card>
    <div>
      
 
  <b-modal id="modal-1"  ref="my-modal"  title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>


  </div>
 
</template>

 <script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script> 
<script>


   import mockStyle from './profileLimited.vue'

 // import newStyle from '../components/newLayout.vue'

  import newStyle from '../components/profile.vue'
	import RESEARCHERS from "../data/Researchers_limited.json";
  import SearchBar from "./searchbar.vue";
	import axios from "axios";
  import VueElementLoading from 'vue-element-loading'
  import Cloud from 'vue-d3-cloud'
  
 // import * as _altmetric_embed_init from 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';



	export default {
    components: {
    SearchBar,
    VueElementLoading,
    Cloud,
    newStyle,
   mockStyle

 
  },
		name: 'TabComponent',
		data() {
			return {
        hasVideo: false,
        hasClinicalTrials: false,
				researchers: RESEARCHERS,
        searchQuery:[],
        new_researchers:[],
        publicationData:[],
        clinicalTrials:[],
        fundingData:[],
        issnList:'',
        grantID:[],
        allpublicationData:[],
        iCitepublicationData:[],
        scopusData:[],
        search_results: "SEARCH RESULTS FOR THE LETTER  R",
        edit_results: "ADD NEW OR EDIT",
        image_results: "https://muschealth.org/MUSCApps/HealthAssets/ProfileImages/NoImageProvided.png",
        PMID_DATA:[],
        PRIMARY_NAME:"",
        DEPARTMENT: "",
        COLLEGE: "",
        MEMBERSHIP: "",
        ACADEMIC_TITLE: "",
        PROGRAM: "",
        BIOGRAPHY: [],
        RESEARCH_INTEREST: "",
        POSITIONS:"",
        VIDEO_URL: "",
        step: 4,
        pub_step: 0, 
        pub_step_top: 0,          
        bioitems:[],
        linkItems:[],
        selectedPublications: "",
        showModal: false,
        tabsMetric: 0,
        // pub_data:"",
        isLoading: false,
        essnList:"",
        interest_counts:"",
       // words: [{}],
        cloud_words: [
             
            ],
            fontSizeMapper: word => Math.log2(word.value) * 50,

			};			
		},
    computed: {
    sortedLinks: function() {
    function compare(a, b) {
      if (a.ITEM < b.ITEM)
        return -1;
      if (a.ITEM > b.ITEM)
        return 1;
      return 0;
    }

    return this.linkItems.sort(compare);
  }
},

   updated(){
   
   if(this.pub_step === 0){
     // _altmetric_embed_init();

    //   _altmetric_embed_init(document.getElementById('selectedPubs'));
   //    _altmetric_embed_init('#selectedPubs');

   //   console.log("updated selectedPubs");
     // this.sleep(1000)
   //   this.isLoading=false;
    }
   },
   mounted() {
    
    this.$nextTick(() => {
    // The whole view is rendered, so I can safely access or query
    // the DOM. ¯\_(ツ)_/¯
    if(this.step ===3){

   //     _altmetric_embed_init(document.getElementById('selectedPubs'));
   //
    
    //  _altmetric_embed_init();
       console.log("mounted selectedPubs");
    }
    })
  },
      methods: {  

        hasTabData(arg){
          if(arg ==="Video"){
            if(this.new_researchers[0]){
                 if (this.new_researchers[0].VIDEO.length > -1){
                return true
             } else 
             { return false} 
            }
         
          }
        

     
        },
          queryCellInfoEvent: function(args) {
          //console.log(args)
      //new Tooltip(
      //  {
         // content: args.cell.column.headerText
      //  },
     //   args.node
   //  );
    }, 
    
references: function(field, data, column){
  if(data["references"] !=""){
  return data["references"].length
  }
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

      refresh(){
     //    this.$forceUpdate() ; 
    
     // _altmetric_embed_init();
      //   this.isLoading = false;
     //  _altmetric_embed_init(document.getElementById('selectedPubs'));
   //    _altmetric_embed_init('#selectedPubs');
       console.log("refresh") 
          },

  

    
      tabChange(arg){
       // this.$bvModal.show(this.modal-1)
     //   this.$refs['my-modal'].show()   
     
     if(arg ==="worksheet"){
      //   this.searchPubMed();

     }
     if (arg === "interest"){
         this.Get_Counts("mesh");
     }
    
    if (arg==="links"){

    }
  if (arg ==="grants"){
  //this.loadGrants()

}
if (arg==="selectedPubs"){
  _altmetric_embed_init(document.getElementById('selectedPubs'));
  _altmetric_embed_init('#selectedPubs');
  console.log("selectedPubs")
}

if (arg ==="metrics"){
   var grid = this.$refs.gridScopus.ej2Instances;
           grid.datasource = this.allpublicationData
           grid.refresh();

}

    
       
      //  this.$forceUpdate() ; 
      //    _altmetric_embed_init() 
      },
      selectedNewProfile(arg){
        //alert(arg.EMAIL)
        if(arg.EMAIL === "rockey@musc.edu"){
        //  this.step = 3           
          window.location.href = "http://localhost:8080/?id=0"; 
       //  window.location.href = "https://researchers.hcc.musc.edu/?id=0"; 
        this.step = 2      
        }

        if(arg.EMAIL === "rojewski@musc.edu"){
        //  this.step = 4           
          window.location.href = "http://localhost:8080/?id=1"; 
        //window.location.href = "https://researchers.hcc.musc.edu/?id=1";
       // this.step = 4       
        }

        if(arg.EMAIL === "rblanco@musc.edu"){
          this.step = 4           
          window.location.href = "http://localhost:8080/?id=2";
        // window.location.href = "https://researchers.hcc.musc.edu/?id=2"; 
         //this.step = 4       
        }

        if(arg.EMAIL === "rosenza@musc.edu"){
          this.step = 4           
          window.location.href = "http://localhost:8080/?id=3"; 
        // window.location.href = "https://researchers.hcc.musc.edu/?id=3";
        // this.step = 4       
        }

      },
     selectedProfile(arg){
    //   this.isLoading = true;
       this.publicationData=[];
        this.fundingData=[];
        this.grantID =[];
        this.issnList='',
       this.new_researchers = Object.values(this.researchers.RESEARCHERS).filter(item => item.EMAIL === arg.EMAIL) 
       // this.researchers.RESEARCHERS = Object.values(this.researchers.RESEARCHERS).filter(item => item.EMAIL === 'rojewski@musc.edu')      
       this.PRIMARY_NAME= this.new_researchers[0].PRIMARY_NAME
       this.DEPARTMENT = this.new_researchers[0].DEPARTMENT
        this.COLLEGE = this.new_researchers[0].COLLEGE
        this.MEMBERSHIP = this.new_researchers[0].MEMBERSHIP
        this.ACADEMIC_TITLE = this.new_researchers[0].ACADEMIC_TITLE
        this.PROGRAM = this.new_researchers[0].PROGRAM         
        this.image_results = this.new_researchers[0].IMAGE
        this.RESEARCH_INTEREST = this.new_researchers[0].RESEARCH_INTEREST[0].ITEM
        this.VIDEO_URL  = this.new_researchers[0].VIDEO
        if (this.VIDEO_URL.length > 0){
           this.hasVideo = true
        } else 
        {
          this.hasVideo = false
        }
       
        this.POSITIONS = this.new_researchers[0].POSITIONS
   
        this.bioitems = this.new_researchers[0].BIOGRAPHY
                   
        for (var i = 0; i < this.new_researchers[0].LINKS.length; i++) { 
             let linkData = this.new_researchers[0].LINKS[i]["DATA"] 
          this.new_researchers[0].LINKS[i]["DATA"]  = "<a href='" + linkData  + "' target='_blank'> " + linkData + "</a>"
          }

        
        this.linkItems = this.new_researchers[0].LINKS
   
        this.clinicalTrials = this.new_researchers[0].CLINICAL_TRIALS
       
       if (this.clinicalTrials.length > 0){
           this.hasClinicalTrials = true
        } else 
        {
          this.hasClinicalTrials = false
        }
        

        
//this.jsFunctionProfile(arg)

this.pubMedXML(this.new_researchers[0].SELECTED_PMIDS, 'researcher');
//this.pubMedeSummary();
//this.ALL_Pubs_eSummary(this.new_researchers[0].ALL_PMIDS)
this.ALL_Pubs_iCite(this.new_researchers[0].ALL_PMIDS)
this.loadGrants();

 // this.sleep(10000)
  this.step = 1;
  this.pub_step = 0;
     _altmetric_embed_init(document.getElementById('selectedPubs'));
     _altmetric_embed_init('#selectedPubs');
     console.log("Selected Member")

},

  load_NIH_Reporter(arg){
        let NIH_ID = this.new_researchers[0].NIH_REPORTER_ID
         var self = this;
          axios.get('https://adminapi20220513111902.azurewebsites.net/api/NIH_Reporter/' + arg + '/project_nums_URL')
           .then(res => {         
           let NIH_URL= res.data.results;
           console.log(NIH_URL[0]["project_detail_url"])       
           let  project_detail_url = NIH_URL[0]["project_detail_url"]          
           let route = this.$router.resolve({ path: project_detail_url});
           window.open(project_detail_url, '_blank');
      
  })
  .catch(error => {
   this.isLoading = false;

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
load_NIH_Reporter_X(arg){
//http://localhost:54269/api/NIH_Reporter/P30%20DK123704/project_nums_URL


console.log(encodeURI('https://adminapi20220513111902.azurewebsites.net/api/NIH_Reporter/' + arg + '/project_nums_URL'))
   axios.get(encodeURI('https://adminapi20220513111902.azurewebsites.net/api/NIH_Reporter/' + arg + '/project_nums_URL'))         
          .then(res => {        
       let NIH_url= res.results;
    //onsole.log(url[0]["project_detail_url"])
    console.log(NIH_url)
          
     }
    
     )  .catch(error => {
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
   

 ALL_Pubs_iCite (arg){       
            var self = this;           
    let pmidList = arg
        
          axios.get('https://icite.od.nih.gov/api/pubs?pmids=' + pmidList )
       .then(res => {         
        
       self.iCitepublicationData =  res.data.data
         
        })
        .catch(error => {
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
     ALL_Pubs_Scopus (issn_list){       
            var self = this;           
          console.log(this.issnList)
         let scopusData=[]
          
       axios.get('https://api.elsevier.com/content/serial/title?issn=' + issn_list +'&view=CITESCORE&date=2018-2025&apiKey=8aabc36477b83cb915c07729b76a2a40&httpAccept=application/json' )
       .then(res => {         
        
       scopusData =  res.data["serial-metadata-response"]   //.entry
      for (var i = 0; i < scopusData.entry.length; i++) {
        console.log("scopus ok")
      }

         
        })
        .catch(error => {
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
    ALL_Pubs_scopus_x (arg){       
            var self = this;
       axios.get('https://adminapi20220513111902.azurewebsites.net/api/eSummary_iCite_Scopus/scopus/' + arg)         
          .then(res => {
          self.scopusData = res.data;
         
         
        })
        .catch(error => {
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



    async jsFunctionProfile (arg){
      // let pubString = ""; 
      // this.isLoading=true;
    
         var self = this;
      

    //  this.BIOGRAPHY = bio       
         //this.selectedPublications = arg.PMIDS

      //  await this.Load_Publications(arg.PMIDS);
        // this.step = 1

  //   axios.get('https://adminapi20220513111902.azurewebsites.net/api/formattedpubs/' + self.new_researchers[0].SELECTED_PMIDS)
    
    axios.get('https://adminapi20220513111902.azurewebsites.net/api/eSummary_iCite_Scopus/eFetch/' + self.new_researchers[0].SELECTED_PMIDS)
    .then(res => { 
          
        
   self.publicationData= res.data; 
       
        
       
  })
  .catch(error => {
   this.isLoading = false;

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
      } ,  

      loadGrants(){
        let NIH_ID = this.new_researchers[0].NIH_REPORTER_ID
       // console.log(NIH_ID);

          var self = this;

          
          axios.get('https://restapi20201222154839.azurewebsites.net/api/NIH_Reporter/' + NIH_ID + '/pi_profile_ids_current_filtered')
        //  axios.get('https://adminapi20220513111902.azurewebsites.net/api/NIH_Reporter/' + NIH_ID + '/pi_profile_ids_current_filtered')
      //  axios.get('http://localhost:54269/api/NIH_Reporter/' + NIH_ID + '/pi_profile_current_filtered')
       .then(res => {         
        
      self.fundingData =  res.data.results.filter((value, index, self) => self.findIndex(v => v.project_serial_num === value.project_serial_num) === index);

        //  self.fundingData= res.data.results; 
       
        
       
  })
  .catch(error => {
   this.isLoading = false;

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

      pubMedXML(pmidList, mode) {
    
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
                let authorXML = ""
                if (tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author")) {
                    AuthorList = tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author");
                    authorXML = tag.querySelector('Article').querySelector('AuthorList').outerHTML
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
                let ISOAbbreviation = ""
                if (ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation")) {
                    ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation").textContent;
                }

                //PudDate year and month
                let PubDateYear = "";
                if (PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year")) {
                    PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year").textContent;
                }
           
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
               
               
               

                // let subArr = this.publicationDATA.filter(object => object.PMID === PMID)
             
                           
                //  for (var ii = 0; ii < subArr.length; ii++) {
               
                // let status = subArr[ii]["New"]
                // let inter = subArr[ii]["InterProgramatic"]
                // let intra = subArr[ii]["IntraProgramatic"]
                // let multi = subArr[ii]["MultiInstitutional"]
                // let accepted = subArr[ii]["Accepted"]
                // let member = subArr[ii]["Member"]

                // let rejected = subArr[ii]["Rejected"]
                // let cancerrelevent = true
                // if (subArr[ii]["Acronym"].trim() == 'NR' || subArr[ii]["Acronym"].trim() == 'NC' || subArr[ii]["Acronym"].trim() == '') {
                //     cancerrelevent = false
                // }

                // let article = {};
 
                // article["Member"] = member;
                // article["New"] = status;
                // article["PMID"] = PMID;
                //  article["PMCID"] = PMCID;
                //   article["DOI"] = DOI;
                // article["NotMine"] = rejected;
                // article["CancerRelevant"] = cancerrelevent;
                // article["Mine"] = accepted;
                // article["pubdate"] = PubDateYear;
                // article["MultiInstitution"] = multi;
                // article["ISOAbbreviation"] = ISOAbbreviation;
                // article["ArticleTitle"] = ArticleTitle;
                // //   article["MultiProgram"] = multi;  
                // article["Shared"] = "";
                // article["Inter"] = inter;
                // article["Intra"] = intra;
                // article["authorsXML"] = authorXML;
                // article["abstractXML"] = abstractXML;
                // article["ArticleIdList"] = ArticleIdListData; //[{IdType: "pubmed", value: pubmed},{IdType: "pii", value: pii},{IdType: "doi", value: doi},{IdType: "pmc", value: pmc},{IdType: "mid", value: mid}]
                // article["GrantList"] = GrantListData;
                // article["comments"] = "";

                // article["data"] = AuthorString + ". <b>" + ArticleTitle + "</b><i> " + ISOAbbreviation + "</i> " +
                //     " <font color='Red'><b>" +
                //     ((PubDateYear == "") ? "" : PubDateYear) + " " + ((PubDateMonth == "") ? "" : PubDateMonth) + " " + ((PubDateDay == "") ? "" : PubDateDay) + "</b></font> " +

                //     "DOI:" + DOI + ((PMCID=="") ? "": " PMCID: " + PMCID ) + " PMID:" + PMID;

                // this.articles.push(article)

                //  } 

            } //for (var i = 0; i < getPubmedArticles.length; i++) 
        //    let y = this.articles

          //  var grid = this.$refs.pubGrid.ej2Instances;
          //      grid.refresh();  article

        //self.publicationData.push(article) // = res.data; 
        //    console.log("Processed " + pmid)
         
      
        })
        .catch(err => {
            alert(err)
        })


},


//runQuery
   searchPubMed(){  
    axios.get(
        'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?',
         {
             params:{
                 db:'pubmed',
                 api_key: 'd0784f454c4ca9a3cb738d33f97b4ae34808',
                 retmode: 'json',
                 retmax: 500,
                 datetype: 'pdat',
                 reldate: 10,
                 term: '(Medical University of South Carolina[Affiliation] OR MUSC[Affiliation] OR Hollings Cancer Center[Affiliation]'
             }
         }
           ).then(response => {            
                let ids = response.data.esearchresult.idlist;
                let arr = ids.sort(function(a, b){return b-a}).slice(0,5);
         //  this.searchQuery = response.data.esearchresult.idlist;

      this.pubMedXML(arr.join(), 'searchQuery')


      }).catch(error => {
       console.log(error.response)
      })

 

        },



       pubMedeSummary(){ 
           var self = this;
          this.allpublicationData = [];
       var pmidArr =  this.new_researchers[0].SELECTED_PMIDS.split(',');
       var uniq = [ ...new Set(pmidArr) ]    

      uniq.sort(function(a, b) {
            return b - a;
          }); 
        if (uniq.length > 25){
            uniq.length = 25
          }
     
      let pmid_list = uniq.join(",")

        let getJSONLink = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?'       
         getJSONLink += 'db=pubmed&api_key=d0784f454c4ca9a3cb738d33f97b4ae34808&retmode=json&id=' + pmid_list        
            axios.get(getJSONLink)
             .then(res => { 
               let jsonObj = res.data.result;               
               delete jsonObj.uids;        
               const articles = [];
               const articlesShort = [];           
               for (const prop in jsonObj) {
              if (!jsonObj.hasOwnProperty(prop)) continue; 
      
            const pubdate = jsonObj[prop].sortpubdate; 
   
            let data = {}; 
            data["year"] = jsonObj[prop]["pubdate"].slice(0,4) 
            data["uid"] = prop;
            data["pmid"] = prop;
            data["pmc"] ="";
            data["title"] = jsonObj[prop]["title"];
            data["source"] = jsonObj[prop]["source"];   
            data["issn"] = jsonObj[prop]["issn"];   
            data["essn"] = jsonObj[prop]["essn"];   

         

           
          
                if (jsonObj[prop]["authors"].length < 50 ){
             data["all_authors"] = jsonObj[prop]["authors"]
              .map(author => {                
                 return author["name"] ;                
              })
              .join(", ");          
         
            } else {
            let authorName =''   
              data["all_authors"] =jsonObj[prop]["authors"][0]["name"] +", " +jsonObj[prop]["authors"][1]["name"] + ", " + authorName + ",  et al"
            }

          


          
               
            let pubType ="";
           for (const pubtypes of jsonObj[prop]["pubtype"]) {
               pubType += pubtypes + " ";             
            }
            data["pubtype"] = pubType;

           for (const articleid of jsonObj[prop]["articleids"]) {
              if (articleid["idtype"] === "pmc") {
                data["pmc"] = articleid["value"];
                break;
              }
            }
            
         
           // console.log(formatedAuthors);
          //  data["publication"]  =
            //  data["authors"] +
          //  formatedAuthors +
              ". " +             
           //   data["title"] + " <i>" + data["source"] +
           //   "</i> "  +  pubdate.substring(0,4)+ " "
           //    + (data["volume"] ? data["volume"] : "") +
           //     (data["issue"] ? "(" + data["issue"] + ")" : "") +
            //    (data["pages"] ? ":" + data["pages"] + ". " : " ") +
               // (data["pmcrefcount"] ? "<b> PMC Citation Count: " + data["pmcrefcount"] + "</b>. " : " ") + 
              //  (data["pubtype"] ? " Publication Type: " + data["pubtype"] + ". " : " ") + 
             //   (data["pmid"]  ? " PMID: " + data["pmid"] : "") +
           //     (data["pmc"]  ? "; PMCID:" + data["pmc"]  + "." : ".");

                //  if (data["year"] === "2021"){
              
                 self.allpublicationData.push(data)
                
            //   } //=2021
                  }   
             })
       
         //  console.log(self.allpublicationData)

          


      this.$forceUpdate() ; 
 },

      Get_Counts(arg){
        this.cloud_words = [];
      let words= ""
        

    //    this.word.push(text: "Vue", value: 1000)
    
       for (var i = 0; i < this.publicationData.length; i++) { 
        if(this.publicationData[i]["NCI_MeshTerms"] ){
          words += this.publicationData[i]["NCI_MeshTerms"] 
        }
            if(this.publicationData[i]["NCI_KeyWords"]){
               words += this.publicationData[i]["NCI_KeyWords"] 
            }
           
          }

         for (var i = 0; i < this.fundingData.length; i++) { 
          if(this.fundingData[i]["pref_terms"]){
             words += this.fundingData[i]["pref_terms"]
          }
              
          }




          const arr = words.split(';')
       //   console.log(words)
        let unique_words = [...new Set(arr)]
     //    console.log(unique_words.length)         
         words += ";"
         for (var i = 0; i < unique_words.length; i++) {         
         var word = unique_words[i];
         var regex = new RegExp(  word + ';' , 'g' ,'i');
         var count =   words.match(regex).length;

         // this.words.push({text:" + word + ",value:" + count +"});



          this.cloud_words.push({text: word, value: count})

         //console.log(word + ' ' + count);
        // console.log(this.cloud_words)
        }     
              console.log(this.cloud_words)
      
      },

        sleep(ms) {
      //makes whoever called sleep for milliseconds specified in ms
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    },
    

   
 
  
	}
  

</script>


<style scoped>
.grantlist {
  display: flex;
}

.details-button {
  padding-right: 0px !important; /* Remove default padding */
  font-size: 14px;
  max-width: 10% !important;
  
}


	.results-left ol, .results-left ul {
		list-style: none;
		list-style-type: decimal;
		padding-left: 15px;
		margin-top: 0px;
	}

	.results-left h1 {
		font-weight: 200;
		font-size: 28px;
		border-bottom: solid 1px #444;
		text-transform: uppercase;
		color: #00447C;
		padding-bottom: 8px;
	}
	.person-info {
		margin: 20px 0px 7px 0px;
	}
	
	.person-info h5 {
		color: #00447c;
		font-size: 16px;
	}
	
	.person-info hgroup {
		border-bottom: solid 1px #e6e6e6;
		padding-bottom: 10px;
		margin-bottom: 20px;
	}
	
	.person-info hgroup h3 {
		font-size: 21px;
		float: left;
	}
	
	.person-info hgroup h3 a {
		color: #000;
	}
	
	.person-info img {
		border-radius: 4px;
	}
	
	.person-info h5 {
		color: #00447c;
		font-size: 16px;
	}
	
	.person-info .work {
		font-size: 15px;
	}
	
	.person-info .work li {
		margin-top: 10px;
	}
	
	.person-info .view-profile {
		background: #f0f2f3;
		font-size: 14px;
		border: 1px solid #7a99ac;
		padding: 4px 15px 3px;
		border-radius: 4px;
		margin-top: 15px;  
		width: 150px;
	}
	
  .view-profile:hover {
    background-color: #7a99ac;
    color: rgb(0, 0, 0);
}
	.person-info p a, .person-info p i {
		color: #337ab7;
	}
	
	.person-info p i {
		margin-right: 5px;
	}
	
	.person-info p {
		font-size: 16px;
		margin-bottom: 10px;
	}

  .single-person {
  margin: 20px 0px 7px 0px;
}
.search-result-title {
  margin: 0px 0px 7px 0px;
}
.search-result-title h5 {
  color: #00447c;
  font-size: 16px;
  text-transform: uppercase;
}
.person-detail h3 {
  font-size: 21px;
  text-transform: uppercase;
  margin-bottom: 30px !important;
}
.person-detail h3 a {
  color: #000;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.p-section h5 {
  color: #00447c;
  font-size: 16px;
  text-transform: uppercase;
  padding-bottom: 10px;
}
.p-section p {
  font-size: 15px;
  color: #000;
  padding-left: 15px;
  padding-bottom: 10px;
}
.p-section .view-profile {
  background: #7a99ac !important;
  border: 1px solid #7a99ac !important;
  padding: 4px 15px 3px;
  border-radius: 4px;
}
.p-section-right p {
  font-size: 16px;
  margin-bottom: 10px;
}
.keyword-search h5 {
  font-size: 20px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 400;
  padding: 0 0 10px;
  text-align: center;
  margin: 0px 0 5px 0px !important;
}

.search-btn {
  font-style: normal;
  font-size: 13px;
  border-color: #aaa !important;
  background-color: #efefef;
  outline: none !important;
  border: 1px solid transparent !important;
  padding: 3px;
  text-align: center;
  border-radius: 4px;
}

.search-btn:hover {
  border-color: #999 !important;
  background-color: #e8e8e8 !important;
}
.alphabets {
  background-color: #e6e6e6;
  padding: 10px 10px;
  margin-top: 15px;
}
.alphabets a {
  display: inline-block;
  color: #00447c;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 3px;
  border: none !important;
}
</style>

