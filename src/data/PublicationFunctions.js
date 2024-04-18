export default {





}


export class PublicationFunctions {
       constructor (e) {
       
       this.query = e

       }

       searchPubmed(){

        
       }

}
// export default {
//     data: () => {
//       return {
//         data: employeeData,
//         cTemplate: function () {
//             return { template : Vue.component('columnTemplate',{
//                template: `<div class="image">
//                       <img :src="image" :alt="altImage"/>
//                   </div>`,
//                   data: function() {
//                       return {
//                           data: {}
//                       }
//                   },
//                   computed: {
//                       image: function() {
//                           return './' + this.data.EmployeeID + '.png';
//                       },
//                       altImage: function() {
//                           return this.data.EmployeeID;
//                       }
//                   }
//             })}
//         }
//       };
//     }
//   }



//  pubMedFormatXML(pmidList, mode) {
    
//     var pmidArr = pmidList.split(',') // this.new_researchers[0].SELECTED_PMIDS.split(',');
//     var uniq = [ ...new Set(pmidArr) ]     

//     uniq.sort(function(a, b) {
//           return b - a;
//         }); 

//   if (uniq.length > 15){
//      uniq.length = 15
//    }
   

//     let pmid = uniq.join(",")
//     let issn_List ='';
    
//     var self = this;
//   this.articles = [];
 
//       axios.get(
//           "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=" +
//           pmid +
//           "&api_key=d0784f454c4ca9a3cb738d33f97b4ae34808"
//       )
//       .then(response => {
//           const parser = new DOMParser();
//           const xmlDOM = parser.parseFromString(response.data, "text/xml");
//           const getPubmedArticles = xmlDOM.querySelectorAll('PubmedArticle')
//           for (var i = 0; i < getPubmedArticles.length; i++) {
//               let tag = getPubmedArticles[i];
//               //PMID
            
//               let PMID = "";
//               let PMCID = "";
//               let DOI = "";
//               if (tag.querySelector('PMID')) {
//                   PMID = tag.querySelector('PMID').textContent;
//               }

//              // console.log(PMID);


//               //Title
//               let Title = ""
//               if (tag.querySelector('Article').querySelector("Title")) {
//                   Title = tag.querySelector('Article').querySelector("Title").textContent;
//               }

//               //ArticleTitle
//               let ArticleTitle = ""
//               if (tag.querySelector('Article').querySelector("ArticleTitle")) {
//                   ArticleTitle = tag.querySelector('Article').querySelector("ArticleTitle").textContent;
//               }

//               let ISSN = ""
//               if (tag.querySelector('Article').querySelector("ISSN")) {
//                   ISSN = tag.querySelector('Article').querySelector("ISSN").textContent;
//                   issn_List += issn_List + ","
//               }
               





//              // console.log(ArticleTitle);

//               //AuthorList
//               let AuthorList = ""
//               let authorXML = ""
//               if (tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author")) {
//                   AuthorList = tag.querySelector('Article').querySelector('AuthorList').querySelectorAll("Author");
//                   authorXML = tag.querySelector('Article').querySelector('AuthorList').outerHTML
//               }

//               let AuthorString = "";
//               for (let j = 0; j < AuthorList.length; j++) {
//                   if (AuthorList[j].querySelector('LastName')) {
//                       AuthorString += AuthorList[j].querySelector('LastName').textContent
//                   }

//                   if (AuthorList[j].querySelector('Initials')) {
//                       AuthorString += " " + AuthorList[j].querySelector('Initials').textContent
//                   }

//                   AuthorString += ", "
//                   //		AuthorString += AuthorList[j].querySelector('LastName').textContent + " " + AuthorList[j].querySelector("Initials").textContent + ", "

//               }

//               AuthorString = AuthorString.replace(/,\s*$/, "");
//             //  console.log(AuthorString);

//               let GrantList = [];
//               let GrantListData = [];
//               let NCI_GrantList = "";
//               let NON_NCI_GrantList ="";

//               if (tag.querySelector('Article').querySelector('GrantList')) {
//                   GrantList = tag.querySelector('Article').querySelector('GrantList').querySelectorAll("Grant");
//               }

         

//               for (let j = 0; j < GrantList.length; j++) {
//                   let GrantID = "";
//                   let Acronym = "";
//                   let Agency = "";
//                   let Country = "";

//                   if (GrantList[j].querySelector('GrantID')) {
//                       GrantID = GrantList[j].querySelector('GrantID').textContent
//                   }

//                   if (GrantList[j].querySelector('Acronym')) {
//                       Acronym = GrantList[j].querySelector('Acronym').textContent
//                   }

//                   if (GrantList[j].querySelector('Agency')) {
//                       Agency = GrantList[j].querySelector('Agency').textContent
//                   }

//                   if (GrantList[j].querySelector('Country')) {
//                       Country = GrantList[j].querySelector('Country').textContent
//                   }
//                      if(Agency.includes("NIH")){
//                       NCI_GrantList = GrantID + "/" +Acronym + "/" + Agency +"/" + Country +  ", "
//                      } else {
//                       NON_NCI_GrantList = GrantID + "/" +Acronym + "/" + Agency +"/" + Country + ", "

//                      }
                     
//                   //    NCI_GrantList
//                    GrantListData.push({
//                       GrantID: GrantID,
//                       Acronym: Acronym,
//                       Agency: Agency,
//                       Country: Country,
//                       NCI_GrantList: NCI_GrantList,
//                       NON_NCI_GrantList: NON_NCI_GrantList
                      
//                  })
//               }

//               //abstract
//                let abstractXML = ""
//               // if (tag.querySelector('Article').querySelector('Abstract')) {
//               //     abstractXML = tag.querySelector('Article').querySelector('Abstract').outerHTML
//               //     console.log(abstractXML)
//               // }
//           const abstracts = tag.querySelector('Article').querySelectorAll("AbstractText");
//         // let abstract_text = "";
//            abstracts.forEach(a => {
//           let tmpItem = [];
//           if (a.getAttribute("Label") !== null) {
//             //  abstract_text +=
//             //   "<b>" + a.getAttribute("Label") + "</b>: " + a.textContent;
//             tmpItem.title = "<br><b>" + a.getAttribute("Label") + "</b>";
//             abstractXML += "<br><b>" + a.getAttribute("Label") + ": </b>";
//             tmpItem.body = a.textContent;
//              abstractXML += a.textContent;
//           } else {
//             tmpItem.body = a.textContent;
//             tmpItem.title = "Abstract";
//              abstractXML += "<br><b>Abstract: </b>";
//               abstractXML +=a.textContent
            
//           }
       
//          });


//        //MeshHeadingList
//               let MeshHeadingList = []; 
//               let NCI_MeshTerms = ""             

//               if (tag.querySelector('MeshHeadingList')) {
//                   MeshHeadingList = tag.querySelector('MeshHeadingList').querySelectorAll("MeshHeading");
//               }

           
//            for (let j = 0; j < MeshHeadingList.length; j++) {
//              //  if (KeywordList[j].querySelector('Keyword')) {
//                       NCI_MeshTerms += MeshHeadingList[j].textContent + ";"
//              //     }
//            }



//           //KeywordList 
//             let KeywordList = [];              

//               if (tag.querySelector('KeywordList')) {
//                   KeywordList = tag.querySelector('KeywordList').querySelectorAll("Keyword");
//               }

//            let NCI_KeyWords =""
//            for (let j = 0; j < KeywordList.length; j++) {
//              //  if (KeywordList[j].querySelector('Keyword')) {
//                       NCI_KeyWords += KeywordList[j].textContent + ";"
//              //     }
//            }

//           // console.log("NCI_KeyWords " + NCI_KeyWords)

//           //PublicationType
//             let PublicationTypeList = [];
//             let PublicationType = "";      

//             if (tag.querySelector('Article').querySelector('PublicationTypeList')) {
//                   PublicationTypeList = tag.querySelector('Article').querySelectorAll("PublicationTypeList");
//               }
//                 for (let j = 0; j < PublicationTypeList.length; j++) {
                      

//                   if (PublicationTypeList[j].querySelector('PublicationType')) {
//                       PublicationType += PublicationTypeList[j].querySelector('PublicationType').textContent+", "
//                   }
//                 }
        

//               //ISOAbbreviation
//               let ISOAbbreviation = ""
//               if (ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation")) {
//                   ISOAbbreviation = tag.querySelector('Article').querySelector('Journal').querySelector("ISOAbbreviation").textContent;
//               }

//               //PudDate year and month
//               let PubDateYear = "";
//               if (PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year")) {
//                   PubDateYear = tag.querySelector('Article').querySelector('Journal').querySelector("JournalIssue").querySelector("PubDate").querySelector("Year").textContent;
//               }
         
//               let ArticleIdListData = [];
//               let PubmedData = tag.querySelector('PubmedData');
//               for (let obb of PubmedData.children) {
//                   if (obb.nodeName == "ArticleIdList") {
//                       for (let ArticleId of obb.children) {
//                           if (ArticleId) {
//                               ArticleIdListData.push({
//                                   IdType: ArticleId.getAttribute('IdType'),
//                                   value: ArticleId.textContent
                                
//                               })
//                                 if (ArticleId.getAttribute('IdType') =="pmc"){
//                                     PMCID = ArticleId.textContent
//                                 }
//                                  if (ArticleId.getAttribute('IdType') =="doi"){
//                                     DOI = ArticleId.textContent
//                                 }
//                           }
//                       }
//                       break;
//                   }

//               }

//             let article = {};
//             article["PMID"] = PMID;
//             article["Title"] = ArticleTitle
//             article["FullJournalName"] = Title
//             article["Authors"] = AuthorString
//             article["Abstract"] = abstractXML
//             article["pubYear"] = PubDateYear
//             article["PMCID"] = PMCID
//             article["DOI"] = DOI
//             article["NCI_MeshTerms"] = NCI_MeshTerms
//             article["NCI_KeyWords"] = NCI_KeyWords
//             article["NCI_GrantList"] = NCI_GrantList
//             article["NON_NCI_GrantList"] = NON_NCI_GrantList
//             article["PublicationType"] = PublicationType
//             article["GrantListData"] = GrantListData
//             article["ISSN"] = ISSN

         

//           if (mode==='researcher'){

//               self.publicationData.push(article) 
//              //   self.ALL_Pubs_Scopus(issn_List);
//           } 
          
//           if (mode ==='searchQuery') {
//           self.searchQuery.push(article) 

//           }
             
             
             

             
//           } //for (var i = 0; i < getPubmedArticles.length; i++) 
//       //    let y = this.articles

//         //  var grid = this.$refs.pubGrid.ej2Instances;
//         //      grid.refresh();  article

//       //self.publicationData.push(article) // = res.data; 
//       //    console.log("Processed " + pmid)
       
    
//       })
//       .catch(err => {
//           alert(err)
//       })


// }