<template>
 <div ref="section" class="l-content-wrap">

   <!-- <vue-element-loading :active="showSpinner" is-full-screen size="128" />  -->
   <b-card class=" text-center overflow-hidden "  no-body   h-100 style="max-width: 1240px;" title-variant="card_title">
 
 <!--  <b-row no-gutters style="max-height: 550px;">
    <b-row no-gutters style="max-height: 350px;"> -->

      <b-row no-gutters :style="styleObject" >      
        < :active="showSpinner" size="64" /> 
    <b-col md="1"  class="p-0 profile-card-text" ></b-col>

    <b-col md="3"  class="p-0 profile-card-text" >
      <b-img :src= "memberImage"  alt="Image" class="rounded-0"  height="1500" fluid-grow :quality="100"  @error="imageLoadError"></b-img>
        </b-col>
    <b-col md="8"  class="profile-card-text ">
      <b-card-body class="ml-5  text-left title-highligh profile-card-text" v-bind:title= "membername">  
    
        <b-card-text  class="text-left card-style" >
          <li  class = "noIcon pb-2" v-for="(item, index) in selectedTitle" :key="index" >
        {{ item.DATA }}
      </li>       
        <hr class="hr-highligh mt-2" v-if = "showLine" />
        <li class = "pb-1 pt-1" v-for="(item, index) in POSITION_TITLE" :key="index" >
          {{ item.DATA }}
        </li>
        <p class ="mt-3 mb-0" v-if = "typeof this.CANCER_FOCUS !== 'undefined' && this.CANCER_FOCUS.length > 0">Cancer Focus </p> 
               

       <li class = "pb-2 pt-0" v-for="(item, index) in CANCER_FOCUS" :key="index" >
          {{ item.DATA }}
        </li>  
              
        <p class ="mt-3 mb-0"> {{ Program_Label }} </p> 

      <li  class = "pb-2 pt-1" v-for="(item, index) in selectedSpecialities" :key="index" >
       
         <span  @mouseover="hover = true"
                @mouseleave="hover = false">
         <a class="myLink" style = "color:white; " @click.prevent="programLink(researcher.PROGRAM )" target="_blank">  {{ researcher.PROGRAM }} </a>
        </span>      
        </li>
        </b-card-text> 
      </b-card-body>
    </b-col>
  </b-row>
</b-card>

<!-- <b-button class="btn btn-primary2 mt-50 myLink pill "  @click="HomeClicked('Back')" >Find Another Researcher</b-button> 

<b-button class="btn btn-primary2 mt-50 pill"  @click="showDetailModal('close')" >Find Another Researcher</b-button> 

<b-button pill class ="custom-background"  @click="showDetailModal('close')">Find Another Researcher</b-button> -->

<br>
<b-row >      
<b-col md="4"  ></b-col>

<b-col md="4"   >
  <b-button class="btn btn-primary2 mt-0 myLink pill "  @click="HomeClicked('Back')" >Find Another Researcher</b-button> 
<!-- <b-button pill class ="custom-background2"  @click="HomeClicked('close')">Find Another Researcher</b-button> -->
</b-col>
<b-col md="4"  ></b-col>

</b-row>


<section class="bio__about__biography" >
  <div v-if="selectedResearch_Interest && selectedResearch_Interest.length > 0">
  <h3 class="h3 section-title">Research Interest</h3>
   <!-- Display biography information -->
   <div class="person-info" v-for="(dataObj, i) in selectedResearch_Interest" :key="i">
          <!-- <h5>{{ dataObj.ITEM }}</h5> --> 
        <p>{{ dataObj.INTEREST }}</p>
        </div>
      </div>     
</section>

<section  v-if="selectedPositions && selectedPositions.length > 0">
        <!-- <h3 class="h3 profile_section-title">Positions</h3> -->
        <h3 class="h3 section-title">Positions</h3>
         <!--  Display positions information -->
          <ul>
            <li v-for="(item, index) in selectedPositions" :key="index">            
          {{ item.DATA }}           
          </li>
      </ul>   
      </section>      
 
   <section v-if="(selectedEducationTraining && selectedEducationTraining.length > 0) || 
              (selectedMemberships && selectedMemberships.length > 0) || 
              (selectedHonorsAwards && selectedHonorsAwards.length > 0)" >   
        <h3 class="h3 section-title" >Background</h3> 
  </section>
        <section  v-if="selectedEducationTraining && selectedEducationTraining.length > 0">  
        <h4 class="h4 profile_sub_section-title">Education and Training</h4>
        <!-- Display education and training information -->
        <div>
          <ul>
          <li v-for="(item, index) in selectedEducationTraining" :key="index">
            {{ item.DATA }}
          </li></ul>
        </div>
    </section>

    <section  v-if="selectedMemberships && selectedMemberships.length > 0" >
  
  <h4 class="h4 profile_sub_section-title">Professional Memberships</h4>
  
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

  <section  v-if="selectedHonorsAwards && selectedHonorsAwards.length > 0">
        <h4 class="h4 profile_sub_section-title">Honors and Awards</h4>
           
        <div>
          <ul>
          <li v-for="(item, index) in selectedHonorsAwards" :key="index">
            
            {{ item.DATA }}
          </li>
        </ul>
        </div>
      </section>


<div>
<section  v-if="publicationData.length > 0" >
  <h4 class="h4 profile_sub_section-title">Selected Recent Publications</h4> 

 <div v-for="(obj, index)  in publicationData" :key="obj.PMID"  v-bind:data-pmid='obj.PMID' > 
                        
                     <div><div class='altmetric-embed' data-badge-type='donut'  v-bind:data-pmid='obj.PMID' data-link-target='_blank' data-badge-popover='bottom' ></div></div>                  
                     <b>Publication  {{ index + 1 }}: </b> <br>
                     <b>PMID:  {{ obj.PMID }} </b> <br> 
                     <b><i>  {{ obj.FullJournalName }}</i></b><br>
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

       
</section>

 <section>
       



<div>
 
  <p>
        <!-- <a
          href= {{ pubLink }}
          class="olm-btn olm-btn--outline olm-btn--secondary umb-4"
          >Full Publications list on PubMed</a> -->
        
                         <!-- <a class="nav-link"  @click.prevent="load_Pub_List()"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >                         
                          Publications list on PubMed </a> -->
        
        </p>
     <p>
        <!-- <a class="nav-link"  @click.prevent="load_iCite_List()"                       
                          v-bind:href="''"                       
                          aria-label= 'Support' >                         
                          Publications on NIH iCite </a>
         -->
        </p>
 
</div>
        
    


      </section>
    </div>
   </div>
</template>

<script type='text/javascript' src='https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js'></script> 
<script>
 import axios from "axios";
 import VueElementLoading from "vue-element-loading";



export default {
  components: {
    VueElementLoading,
   
    //   profileSheet
       // contentComponent,
      // tabComponent
     //  profileComponent
   
      // newView
     },
  data() {
    return {
      message: 'Hello, Vue!', 
      showIfBlank: false,  
      ALL_PMIDS:'',
      selectedTab:'tab2',
      showSpinner: true,
      MemberID:'',   
      membername:'',
      Program_Label:'',
      searchLogic:'',
      memberImage: '',
      ProgramID:'',
      NIH_Pubs_step: 0,  
      selectedmembersname:'',
      researcherData:[],       
      researcher: [],    
      DISEASE_THERAPY_AREA: [],
      POSITION_TITLE: [],
      SPECIALITIES: [],
      CANCER_FOCUS: [],
      fundingData:[],
      publicationData:[],
      styleObject: {
          // color: 'white',
          color: 'red',
          'max-height': '350px'
          },
    };
  },
  methods:{
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
    HomeClicked(){
      this.$router.push({path: '/', query: { ProgramID: this.ProgramID }})
      //this.$router.replace('/')
    },
  load_Pub_List(){    
       //  window.open(this.pubLink, "_blank");
        window.open("https://pubmed.ncbi.nlm.nih.gov/?term=" + this.ALL_PMIDS + "&size=200" , "_blank");
        },


         load_iCite_List(){
          window.open( "https://icite.od.nih.gov/analysis?pmids=" +   this.ALL_PMIDS, "_blank");
         },

       
    // setValues(){
    // this.message ="Test Data"
    //   this.membername = this.researcher.PRIMARY_NAME;
    //   this.memberImage = this.researcher.IMAGE;
  
   
    // let positions = this.researcher.POSITION_TITLE.split(",");
    // if (this.researcher.CANCER_FOCUS.length > 0) {
    //   this.CANCER_FOCUS.push({ITEM: 1, DATA: this.researcher.CANCER_FOCUS});
    // }

    // if (this.researcher.Title_Additional_Details.length > 0) {
    //   this.POSITION_TITLE.push({ITEM: 1, DATA: this.researcher.Title_Additional_Details});
    // }

    // for (var i = 0; i < positions.length; i++) {     
    //   this.POSITION_TITLE.push({ITEM: i, DATA: positions[i]});
    // }


    // },
    async loadSelectedResearcher(){ 
      this.showSpinner = true
 let arg = this.MemberID //this.$route.params.id

   console.log(arg)   
 

     // if(arg ===''){
        //redirect to home page         
       //}
         this.memberImage = "http://probablyprogramming.com/wp-content/uploads/2009/03/handtinytrans.gif" // "https://researchers.hcc.musc.edu/images/photos/" + arg+ ".jpeg"
             
          console.log(arg)
          this.researcher = [];
          this.ALL_PMIDS= ""
          this.DISEASE_THERAPY_AREA =[]
          this.POSITION_TITLE =[]
          this.SPECIALITIES =[]
          this.CANCER_FOCUS =[]    
  
          var self = this;
          console.log('https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles/' + arg + '/email')
    await axios.get('https://adminapi20220513111902.azurewebsites.net/api/Researchers_Web_Profiles/' + arg + '/email')
   
    .then(res => {  
  
      let researcher_Data = JSON.parse(res.data);
      self.researcher =  researcher_Data.RESEARCHERDATA[0];

    let researcherData = res.data;
    console.log(researcherData);
    console.log(self.researcher.SPECIALITIES);
    self.membername = self.researcher.PRIMARY_NAME;
  
    self.memberImage = self.researcher.IMAGE;
    self.NIH_Reporter_ID = self.researcher.NIH_REPORTER_ID;
    self.selectedPubs =self.researcher.SELECTED_PMIDS;
    self.ALL_PMIDS = self.researcher.ALL_PMIDS;
    self.Program_Label = "Program";
    self.showLine = true;
    self.pubLink = self.researcher.PUBLIC_PUBS_LINK;
    self.DISEASE_THERAPY_AREA.push({ITEM: 1, DATA: self.researcher.DISEASE_THERAPY_AREA});

    let positions = self.researcher.POSITION_TITLE.split(",");
    if (self.researcher.CANCER_FOCUS.length > 0) {
      self.CANCER_FOCUS.push({ITEM: 1, DATA: self.researcher.CANCER_FOCUS});
    }

    if (self.researcher.Title_Additional_Details.length > 0) {
      self.POSITION_TITLE.push({ITEM: 1, DATA: self.researcher.Title_Additional_Details});
    }

    for (var i = 0; i < positions.length; i++) {     
      self.POSITION_TITLE.push({ITEM: i, DATA: positions[i]});
    }

   self.showSpinner = false;
    if (self.selectedPubs.length > 0) {
      self.pubMedXML(self.selectedPubs, 'researcher');
    }
  })
  .catch(err => {
    console.log(err); 
  });
 // this.showSpinner = false;
      // if(this.selectedPubs.length > 0){
      //     this.pubMedXML(this.selectedPubs, 'researcher');
      //  }
    },
    imageLoadError(event){
      event.target.src = "https://researchers.hcc.musc.edu/images/photos/noimageavailable.jpeg"
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
        tabChange(){
          // eslint-disable-next-line no-undef
          _altmetric_embed_init();
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
this.showSpinner = false;
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
  this.showSpinner = false;
 alert(err)
console.log(err);
});

//this.NIH_Pubs_step = 2
// eslint-disable-next-line no-undef
//_altmetric_embed_init();
// this.$nextTick(() => {
//    _altmetric_embed_init();
//  });
console.log(self.publicationData)
//this.tabChange();
},
  refreshAltmetric() {
    _altmetric_embed_init();
      // Loop through each publication and refresh its Altmetric embed
   //   this.publicationData.forEach(publication => {
    //    this.refreshEmbed("altmetric-" + publication.id, publication.doi);
   //   });
  },
   // refreshEmbed(embedId, doi) {
    //  console.log(doi)
      // Code to refresh the Altmetric embed for a specific DOI
      // You need to implement the logic to refresh the embed based on its ID and DOI
      // This might involve manipulating the DOM or calling an external library/function
      // Example:
     // const embedElement = document.getElementById(embedId);
     //  altmetric_embed(embedElement, { type: 'doi', id: doi });
   // }
  },
  computed: {
   
    selectedResearch_Interest(){  
        let research_interest = []
         if (typeof this.researcher.RESEARCH_INTEREST!== 'undefined') {
            research_interest = this.researcher.RESEARCH_INTEREST.filter(item => item.ISSELECTED); 
           }
        return research_interest

        },
    
       selectedSpecialities(){
        let selected_specialities= []
          if (typeof this.researcher.SPECIALITIES !== 'undefined' ) {  
            selected_specialities = this.researcher.SPECIALITIES.filter(item => item.ISSELECTED);
         } 
         //else {
          // this.researcher.SPECIALITIES =[];
        //  return this.researcher.SPECIALITIES
        // }
        return selected_specialities
        },

        selectedPositions() {
          let selected_positions =[];
          if (typeof this.researcher.POSITIONS !== 'undefined') { 
            selected_positions=  this.researcher.POSITIONS.filter(item => item.ISSELECTED);
        }         
        return selected_positions
      },
      selectedHonorsAwards(){
        let selected_Honors_Awards =[]
          if (typeof this.researcher.HONORSAWARDS !== 'undefined' ) {  
            selected_Honors_Awards= this.researcher.HONORSAWARDS.filter(item => item.ISSELECTED);
        } 
        return selected_Honors_Awards
      }  ,
      selectedTitle(){    
        let selected_Title =[]; 
        if (typeof this.researcher.TITLE !== 'undefined' ) {  
          selected_Title = this.researcher.TITLE.filter(item => item.ISSELECTED);
         }
         return selected_Title
        },

      selectedEducationTraining() {
     let selected_Education_Training =[];
          if (typeof this.researcher.EDUCATION_TRAINING !== 'undefined' ) {  
            selected_Education_Training = this.researcher.EDUCATION_TRAINING.filter(item => item.ISSELECTED);
          }
          return selected_Education_Training
        },

        selectedMemberships(){
          let selected_Memberships=[];
          if (typeof this.researcher.MEMBERSHIPS !== 'undefined' ) {  
            selected_Memberships = this.researcher.MEMBERSHIPS.filter(item => item.ISSELECTED);
        }
        return selected_Memberships
      }
  },

  beforeCreate() {   

    console.log('beforeCreate: The instance is being created, but not yet initialized.');
  },
 
  
  created() { 
   // alert(this.$route.params.id)   
    // if (this.$route.params) {
     //  if (this.$route.params.id) {
   //      this.MemberID= this.$route.params.id
     //    this.loadSelectedResearcher()
   //      }         
      // } else {
          let urlParams = new URLSearchParams(window.location.search)
          if (urlParams.has('ProgramID') === true ){
          this.ProgramID = urlParams.get('ProgramID') 
          } else {
            this.ProgramID = 'ALL' 
          }

          if (urlParams.has('id') || urlParams.has('ID') === true ){
          this.MemberID = urlParams.get('id') 
         // }  else if (this.$route.params.id) {
        //   this.MemberID= this.$route.params.id
        //  }    
         
          this.loadSelectedResearcher(this.MemberID)

       }  else {

        this.$router.replace('/')
       }   

      
  
    console.log('created: The instance has been created with data, computed properties, methods, and watch/event callbacks set up.');
  },
  beforeMount() {
    console.log('beforeMount: The template and the render function are about to be compiled.');
  },
  mounted() {

    // if (localStorage.MemberID) {
    //   this.MemberID = localStorage.MemberID;
    // }
  
    //   alert(this.MemberID)

    // if (this.$route.params.id) {
    //      this.MemberID = 'carpente' // this.$route.params.id
    //      this.loadSelectedResearcher()
    //  }         
   
    setTimeout(() => {
      this.refreshAltmetric();
    }, 1000);

  
   // this.OnNavClicked();
  //  this.$router.replace('/ProfilePage')
    console.log('mounted: The component has been mounted to the DOM.');
  },
  beforeUpdate() {
    console.log('beforeUpdate: Data has changed and the DOM will re-render, but it has not been updated yet.');
  },
  updated() {
    console.log('updated: The component’s DOM has been updated based on the reactive data changes.');
  },
  beforeDestroy() {
    console.log('beforeDestroy: The component is about to be torn down. Cleanup activities can be performed here.');
  },
  destroyed() {
    console.log('destroyed: The component has been destroyed and all event listeners have been removed.');
  }
}
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
    font-weight: bold !important;
}
.custom-background {
 /* Custom background color */
  color: #00447c; /* Custom text color */
  background-color: #67c8cf !important;
  font-weight: bold !important;
}

.custom-background2 {
 /* Custom background color */
  color: #FFFFFF; /* Custom text color */
  background-color: #00447c !important;
 
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
    cursor:pointer;
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
    padding-top: 10px!important;
  }
  .title-highligh .card-title {
    font-size: 35px !important;
  }
  .custom-tab {
  background-color: #f0f0f0;
  color: #333;
  /* Add more styles as needed */
}

  </style>
  <!-- https://tailwindcss.com/docs/font-size -->