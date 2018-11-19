import React, {Component} from 'react'

import '../css/categories.css'

export default class Categories extends Component {

    constructor(props) {
        super(props)
        this.showBooks = this.showBooks.bind(this)
    }

    showBooks(e) {
        let get_current = document.getElementsByClassName(e.target.id)[0];
        [].filter.call(document.getElementsByClassName('cover'), function(element) {
            if(element!== get_current)  {
                element.classList.add('hide')
            }
            else {
                element.classList.remove('hide')
            }
                
        })
        
    }

    render() {
        return(
            <div>
                <div id="wrapper">
                        <h1>My Favorite Books & Audio</h1>


                    <div class="toggles">
                        <button id="showall">Show All</button> 
                        <button onClick={this.showBooks} id="better-liv">Better Living</button>
                        <button onClick={this.showBooks} id="phil">Philosophy</button>
                        <button onClick={this.showBooks} id="peopleskill">People Skills</button>
                        <button onClick={this.showBooks} id="econ">Economics</button>
                        <button onClick={this.showBooks} id="finance">Finance</button>
                        <button onClick={this.showBooks} id="sci">Science</button>
                        <button onClick={this.showBooks} id="pol">Politics</button>
                        <button onClick={this.showBooks} id="biz">Business</button>
                        <button onClick={this.showBooks} id="misc">Misc</button>
                    </div>



                    <div class="covers">
                    
                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51X7dEUFgoL._SX320_BO1,204,203,200_.jpg" 
                            alt="Dale Carnegie"/>
                            </a>
                            </div>
                        </div> 
                        
                            <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736/ref=sr_1_1?ie=UTF8&qid=1515918217&sr=8-1&keywords=the+daily+stoic">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51mZNhKc9iL._SX329_BO1,204,203,200_.jpg" 
                                alt="Ryan Holiday"/>
                            </a>
                            </div>
                        </div>
                        
         
                        <div class="phil cover"/>
                            <div>
                            <a href="https://mises.org/library/foundations-morality">
                            <img class="media-object" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/The%20Foundations%20of%20Morality_Hazlitt_20120224_bookstore.jpg?itok=nSJi2ad4" 
                                alt="Henry Hazlitt"/>
                            </a>
                            </div>
                        </div>
                        
                        
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Antidote-Happiness-People-Positive-Thinking/dp/0865478015/ref=sr_1_1?s=books&ie=UTF8&qid=1515919681&sr=1-1&keywords=the+antidote+happiness+for+people+who+can%27t+stand+positive+thinking">
                            <img class="media-object" src="https://images.gr-assets.com/books/1389478401l/13721709.jpg" 
                                alt="Oliver Burkeman"/>
                            </a>
                            </div>
                        </div>
                        
                        
                       
                        <div class="phil cover">
                            <div>
                            <a href="https://www.amazon.com/Square-One-Foundations-Steve-Patterson-ebook/dp/B01M9JL27L/ref=sr_1_1?ie=UTF8&qid=1515980663&sr=8-1&keywords=square+one+steve+patterson">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/414bcSvR7AL._SX326_BO1,204,203,200_.jpg" 
                                alt="Steve Patterson"/>
                            </a>
                            </div>
                        </div>
                        
                        
                        
                        <div class="econ cover">
                            <div>
                            <a href="https://mises.org/library/making-economic-sense">
                            <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/Making%20Economic%20Sense_Rothbard.jpg?itok=LdvdFE5Y" 
                            alt="Rothbard"/>
                            </a>
                            </div>
                        </div>
                    
                        
                        
                        
                        
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Guide-Good-Life-Ancient-Stoic/dp/0195374614/ref=sr_1_1?s=books&ie=UTF8&qid=1515918746&sr=1-1&keywords=a+guide+to+the+good+life">
                            <img class="media-object" src="https://calazanblog-assets.s3.amazonaws.com/media/editor-uploads/a_guide_to_the_good_life_book_cover.jpg" 
                            alt="William Irvine"/>
                            </a>
                            </div>
                        </div>
                        
                        
                            
                        <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/Good-Profit-Creating-Successful-Companies/dp/1101904135/ref=sr_1_1?s=books&ie=UTF8&qid=1515919796&sr=1-1&keywords=good+profit+charles+koch">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/41ckVxWJzUL.jpg" 
                            alt="Charles Koch"/>
                            </a>
                            </div>
                        </div>
                        
                          
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Solution-Social-Anxiety-Break-Shyness-ebook/dp/B00F5IU5CU/ref=sr_1_2_sspa?s=books&ie=UTF8&qid=1515919521&sr=1-2-spons&keywords=solution+to+social+anxiety&psc=1">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51cLbWtSUHL.jpg" 
                            alt="Aziz Gazipura"/>
                            </a>
                            </div>
                        </div>
                        
                        
                            <div class="pol cover">
                            <div>
                                <a href="https://www.amazon.com/Notes-Democracy-Large-Print-Mencken/dp/1494288648/ref=sr_1_1?s=books&ie=UTF8&qid=1515919184&sr=1-1&keywords=notes+on+democracy">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/61FUt52CBDL._SX218_BO1,204,203,200_QL40_.jpg" 
                            alt="H.L. Mencken"/>
                            </a>
                            </div>
                        </div>

                        
                       
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Waking-Up-Spirituality-Without-Religion/dp/1451636024/ref=sr_1_1?s=books&ie=UTF8&qid=1515920029&sr=1-1&keywords=waking+up+sam+harris">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/5113lJZJQuL._SX326_BO1,204,203,200_.jpg" 
                            alt="Sam Harris"/>
                            </a>
                            </div>
                        </div>
                        
                        
                    
                        <div class="phil cover">
                            <div>
                            <a href="https://www.amazon.com/Out-of-Your-Mind/dp/B0162WIRKY/ref=sr_1_2?ie=UTF8&qid=1517010662&sr=8-2&keywords=out+of+your+mind+by+alan+watts">
                            <img class="media-object" src="https://images.gr-assets.com/books/1388504888l/60545.jpg" id="audio"
                                alt="Alan Watts"/>
                            </a>
                            </div>
                        </div>
                        
                        
                            

                        <div class="finance cover">
                            <div>
                            <a href="https://www.amazon.com/Street-Smarts-Adventures-Road-Markets/dp/0307986071/ref=sr_1_1?s=books&ie=UTF8&qid=1515923486&sr=1-1&keywords=street+smarts+jim+rogers">
                            <img class="media-object" src="http://assets.crownpublishing.com/wp-content/uploads/2013/02/Street-Smarts-by-Jim-Rogers-251x380.jpg" 
                            alt="Jim Rogers"/>
                            </a>
                            </div>
                        </div>
                        
                        
                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/Charisma-Myth-Science-Personal-Magnetism/dp/1591845947/ref=sr_1_1?s=books&ie=UTF8&qid=1515919947&sr=1-1&keywords=The+Charisma+Myth+by+Olivia+Fox+Cabane">
                            <img class="media-object" src="https://images.gr-assets.com/books/1348214063l/11910905.jpg" 
                            alt="Olivia Fox Cabane"/>
                            </a>
                            </div>
                        </div>
                        
                        
                    
                        <div class="finance cover">
                            <div>
                            <a href="https://www.amazon.com/Extraordinary-Popular-Delusions-Madness-Crowds/dp/1463740514/ref=sr_1_1?s=books&ie=UTF8&qid=1515920340&sr=1-1&keywords=extraordinary+popular+delusions+and+the+madness+of+crowds">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51PHPtzjkPL.jpg" 
                            alt="Charles Mackey"/>
                            </a>
                            </div>
                        </div>
                        
                        
                
                        <div class="sci cover">
                            <div>
                                <a href="https://www.amazon.com/Troublesome-Inheritance-Genes-Human-History/dp/0143127160/ref=sr_1_1?s=books&ie=UTF8&qid=1515921233&sr=1-1&keywords=a+troublesome+inheritance+by+nicholas+wade">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/41BYpEQumNL._SX325_BO1,204,203,200_.jpg" 
                            alt="Nicholas Wade"/>
                            </a>
                            </div>
                        </div>
                        
                        

                        <div class="econ cover"> 
                            <div>
                                <a href="https://mises.org/library/failure-new-economics-0">
                                <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/Failure%20of%20the%20New%20Economics_Hazlitt.jpg?itok=m_O9PV2g"
                                alt="Hazlitt"/>
                                </a>
                            </div>
                        </div>
                        
                        
                        
                        <div class="pol cover">
                            <div>
                            <a href="https://www.amazon.com/Righteous-Mind-Divided-Politics-Religion/dp/0307455777/ref=sr_1_1?s=books&ie=UTF8&qid=1515921478&sr=1-1&keywords=jonathan+haidt+the+righteous+mind">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51RY0HDGDTL._SX322_BO1,204,203,200_.jpg" 
                            alt="Jonathan Haidt"/>
                            </a>
                            </div>
                        </div>
                    
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Do-What-You-Are-Personality/dp/031623673X/ref=sr_1_2?s=books&ie=UTF8&qid=1515924039&sr=1-2&keywords=do+what+you+are+paul+tieger">
                            <img class="media-object" src="http://media.hdp.hbgusa.com/coverimages/9780316236751/" 
                            alt="Tieger"/>
                            </a>
                            </div>
                        </div>
                        
                        
                       
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Mindfulness-Plain-English-Revised-Expanded/dp/0861713214/ref=sr_1_3?s=books&ie=UTF8&qid=1517263300&sr=1-3&keywords=mindfulness+in+plain+english">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51mg-EJJZLL.jpg" 
                            alt="Bhante Gunaratana"/>
                            </a>
                            </div>
                        </div>
                        
                        
    
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692/ref=sr_1_1?s=books&ie=UTF8&qid=1515921725&sr=1-1&keywords=cal+newport+deep+work">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/51kzUUHhMTL._SX331_BO1,204,203,200_.jpg" 
                            alt="Cal Newport"/>
                            </a>
                            </div>
                        </div>
                        
                        
                 
                        <div class="misc cover">
                            <div>
                            <a href="https://images-na.ssl-images-amazon.com/images/I/81NOij3cRvL.jpg">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/81NOij3cRvL.jpg" 
                            alt="Arnold Schwarzenegger"/>
                            </a>
                            </div>
                        </div>
                        
                        
  
                        <div class="finance cover">
                            <div>
                            <a href="https://www.amazon.com/Hot-Commodities-Anyone-Invest-Profitably-ebook/dp/B000FC2OO8/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1515983311&sr=1-1&keywords=hot+commodities+jim+rogers">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51l2uz-axKL.jpg"
                            alt="Jim Rogers"/>
                            </a>
                            </div>
                        </div>
                        
                        
   
                        <div class="pol cover">
                            <div>
                            <a href="https://www.amazon.com/Road-Ruin-Global-Elites-Financial/dp/1591848083/ref=sr_1_1?s=books&ie=UTF8&qid=1515984429&sr=1-1&keywords=The+Road+to+Ruin+by+James+Rickards">
                            <img class="thumbnail" src="http://www.juniorstockreview.com/wp-content/uploads/2017/01/Road-to-Ruin-Book-Cover.jpg"
                            alt="Jim Rickards"/>
                            </a>
                            </div>
                        </div>
                        
                        
  
                        <div class="better-liv cover">
                            <div>
                            <a href="https://www.amazon.com/Willpower-Instinct-Self-Control-Works-Matters/dp/1583335080/ref=sr_1_2?s=books&ie=UTF8&qid=1515923129&sr=1-2&keywords=willpower+instinct+by+kelly+mcgonigal">
                            <img class="media-object" src="https://images.gr-assets.com/books/1436737104l/10865206.jpg" 
                            alt="Kelly McGonigal"/>
                            </a>
                            </div>
                        </div>
                    
                        
                        
                        
      
                        <div class="econ cover"> 
                            <div>
                                <a href="https://www.amazon.com/Henry-Hazlitt-Economics-One-Lesson/dp/B004LNZ5H0/ref=sr_1_5?s=books&ie=UTF8&qid=1515985408&sr=1-5&keywords=economics+in+one+lesson+henry+hazlitt">
                            <img class="thumbnail" src="https://images.penguinrandomhouse.com/cover/9780307760623"
                            alt="Henry Hazlitt"/>
                            </a>
                            </div>
                        </div>
                        
                        
   
                        <div class="phil cover">
                            <div>
                            <a href="https://www.amazon.com/Free-Will-Harris-Sam-Paperback/dp/B011SJZJ8O/ref=sr_1_3?s=books&ie=UTF8&qid=1517011043&sr=1-3&keywords=free+will+sam+harris">
                            <img class="media-object" src="https://prodimage.images-bn.com/pimages/9781451683400_p0_v1_s550x406.jpg"
                                alt="Sam Harris"/>
                            </a>
                            </div>
                        </div>
                        
                        
  
                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/Influence-Psychology-Persuasion-Robert-Cialdini/dp/006124189X/ref=sr_1_1?s=books&ie=UTF8&qid=1515922756&sr=1-1&keywords=influence+robert+cialdini">
                            <img class="media-object" src="https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL._SX331_BO1,204,203,200_.jpg" 
                            alt="Robert Cialdini"/>
                            </a>
                            </div>
                        </div>
                        
                        
      
                        <div class="econ cover"> 
                            <div>
                                <a href="https://mises.org/library/socialism-economic-and-sociological-analysis">
                            <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/Socialism_bookstore.jpg?itok=3EamLOgN"
                            alt="Ludwig Von Mises"/>
                            </a>
                            </div>
                        </div>
                        
                        

                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/Power-Body-Language-Ex-FBI-Speed-Reading/dp/B00OH795TO/ref=sr_1_2?ie=UTF8&qid=1515983461&sr=8-2&keywords=the+power+of+body+language+joe+navarro">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/61Q-yTWzoUL.jpg" id="audio"
                            alt="Navarro"/>
                            </a>
                            </div>
                        </div>
                        
                        
    
                        <div class="econ cover">
                            <div>
                                <a href="https://mises.org/library/what-has-government-done-our-money">
                            <img class="thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/What_has_the_government_done_to_our_money.jpg/220px-What_has_the_government_done_to_our_money.jpg"
                                alt="Murray Rothbard"/>
                            </a>
                            </div>
                        </div>
                    
                        
                        

                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/Steal-Show-Interviews-Deal-Closing-Performances/dp/0544800842/ref=sr_1_1?s=books&ie=UTF8&qid=1515984539&sr=1-1&keywords=Steal+the+Show+by+Michael+Port">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51iz7-7XVtL._SX331_BO1,204,203,200_.jpg"
                            alt="Michael Port"/>
                            </a>
                            </div>
                        </div>
                        
                        
    
                        <div class="peopleskill cover">
                            <div>
                            <a href="https://www.amazon.com/Crucial-Conversations-Talking-Stakes-Second/dp/0071771328/ref=sr_1_1?s=books&ie=UTF8&qid=1515984205&sr=1-1&keywords=crucial+conversations">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51iqT0EkDaL.jpg"
                            alt="Kelly Patterson"/>
                            </a>
                            </div>
                        </div>
                        
                        

                        <div class="econ cover">
                            <div>
                                <a href="https://mises.org/library/what-you-should-know-about-inflation-0">
                            <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/What%20You%20Should%20Know%20About%20Inflation_Hazlitt.jpg?itok=-VLGn0aL"
                            alt="Henry Hazlitt"/>
                            </a>
                            </div>
                        </div>
                        
 
                        <div class="sci cover">
                            <div>
                            <a href="https://www.amazon.com/Behave-Biology-Humans-Best-Worst-ebook/dp/B01IAUGC5S/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1515981537&sr=1-1&keywords=behave+robert+sapolsky">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51uRY7NIjML._SX327_BO1,204,203,200_.jpg" 
                            alt="Sapolsky"/>
                            </a>
                            </div>
                        </div>
                        
                        
  
                            <div class="econ cover">
                            <div>
                                <a href="https://mises.org/library/americas-great-depression">
                                <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/America%27s%20Great%20Depression_Rothbard_0.jpg?itok=0C8a6lSy"
                                alt="Murray Rothbard"/>
                                </a>
                            </div>
                            </div>
                    
                    
    
                            <div class="misc cover">
                            <div>
                            <a href="https://www.amazon.com/Short-History-Man-Progress-Decline/dp/1610165918/ref=sr_1_1?s=books&ie=UTF8&qid=1515984984&sr=1-1&keywords=a+short+history+of+man+hoppe">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41oWKA0KKTL.jpg"
                            alt="Hans-Hermann Hoppe"/>
                            </a>
                            </div>
                        </div>
                    
                        
                        
                        
                        <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/CEO-Tightrope-Master-Balancing-Successful/dp/1626341060/ref=sr_1_1?s=books&ie=UTF8&qid=1515986582&sr=1-1&keywords=the+ceo+tightrope+by+joel+trammell">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41iWr%2B5PGpL._SX325_BO1,204,203,200_.jpg"
                            alt="Joel Trammell"/>
                            </a>
                            </div>
                        </div>
                    
                        

                        <div class="finance cover">
                            <div>
                                <a href="https://www.amazon.com/Little-Book-Moves-Updated-Expanded/dp/0470643994/ref=sr_1_2?s=books&ie=UTF8&qid=1515983796&sr=1-2&keywords=the+little+book+of+bull+moves+peter+schiff">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51mw3OJEL-L._AC_UL320_SR228,320_.jpg"
                            alt="Schiff"/>
                            </a>
                            </div>
                        </div>
                        

                        <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/4-Hour-Workweek-Escape-Live-Anywhere/dp/0307465357/ref=sr_1_1?s=books&ie=UTF8&qid=1515985483&sr=1-1&keywords=the+four+hour+work+week">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51v5Pje3AtL._SX331_BO1,204,203,200_.jpg"
                            alt="Tim Ferriss"/>
                            </a>
                            </div>
                        </div>
                        
                        
    
                            <div class="misc cover">
                            <div>
                            <a href="https://www.amazon.com/Summary-Power-Robert-Greene-Ideas-ebook/dp/B0776CLL6V/ref=sr_1_1_sspa?s=books&ie=UTF8&qid=1515986892&sr=1-1-spons&keywords=the+48+laws+of+power&psc=1">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41ILsjEMw-L._SX356_BO1,204,203,200_.jpg"
                            alt="Robert Greene"/>
                            </a>
                            </div>
                        </div>
                        
 
                        <div class="finance cover">
                            <div>
                            <a href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=sr_1_1?s=books&ie=UTF8&qid=1515987281&sr=1-1&keywords=the+intelligent+investor+by+benjamin+graham">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/91%2Bt0Di07FL.jpg"
                            alt="Benjamin Graham"/>
                            </a>
                            </div>
                        </div>
                        
  
                        <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898/ref=sr_1_3?s=books&ie=UTF8&qid=1515983642&sr=1-3&keywords=the+lean+startup+eric+ries">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/517wplLjOXL._SX329_BO1,204,203,200_.jpg"
                            alt="Eric Ries"/>
                            </a>
                            </div>
                        </div>
                            
                    
            
                        <div class="pol cover">
                            <div>
                            <a href="https://www.amazon.com/Politically-Incorrect-Guide-American-History/dp/B000CCE4JE/ref=sr_1_1?ie=UTF8&qid=1517017239&sr=8-1&keywords=politically+incorrect+guide+to+american+history">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51STDZB2TVL._SY344_BO1,204,203,200_.jpg"
                            alt="Tom Woods"/>
                            </a>
                            </div>
                        </div>
                        
                        
                        
           
                        <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/Sell-Human-Surprising-Moving-Others/dp/1594631905/ref=sr_1_3?s=books&ie=UTF8&qid=1515985359&sr=1-3&keywords=to+sell+is+human">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41NH1TwXydL._SX331_BO1,204,203,200_.jpg"
                            alt="Daniel H. Pink"/>
                            </a>
                            </div>
                        </div>
                            
                        
                        

                        <div class="biz cover">
                            <div>
                                <a href="https://www.amazon.com/Born-This-Find-Work-Meant/dp/1101903988/ref=sr_1_1?s=books&ie=UTF8&qid=1515985831&sr=1-1&keywords=born+for+this+chris+guillebeau">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41Y%2Bc2y1mgL._SX329_BO1,204,203,200_.jpg"
                            alt="Guillebeau"/>
                            </a>
                            </div>
                        </div>
                        
                        
               
                            <div class="biz cover">
                            <div>
                            <a href="https://www.amazon.com/100-Startup-Reinvent-Living-Create/dp/0307951529/ref=sr_1_1?s=books&ie=UTF8&qid=1515986114&sr=1-1&keywords=the+%24100+startup+by+chris+guillebeau">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51qxnQ0xbDL._SX322_BO1,204,203,200_.jpg"
                            alt="Guillebeau"/>
                            </a>
                            </div>
                        </div>
                        
                        
                            <div class="econ cover">
                            <div>
                                <a href="https://www.amazon.com/s/ref=nb_sb_ss_i_1_11?url=search-alias%3Dstripbooks&field-keywords=the+law+by+frederic+bastiat&sprefix=the+law+by+%2Cstripbooks%2C186&crid=7ZMH94ILX0L6">
                            <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/The%20Law_Bastiat.jpg?itok=3b4AAO44"
                            alt="Frederic Bastiat"/>
                            </a>
                            </div>
                        </div>
                    
                    
                    
                    
   
                        <div class="sci cover">
                            <div>
                            <a href="https://www.amazon.com/Why-Zebras-Dont-Ulcers-Third/dp/0805073698/ref=sr_1_1?s=books&ie=UTF8&qid=1515986523&sr=1-1&keywords=Why+Zebras+Don%27t+Get+Ulcers+by+Robert+M.+Sapolsky">
                            <img class="thumbnail" src="https://images.gr-assets.com/books/1441955030l/327.jpg"
                            alt="Sapolsky"/>
                            </a>
                            </div>
                        </div>
                        
                        
            
                        <div class="pol cover">
                            <div>
                            <a href="https://www.amazon.com/Three-Languages-Politics-Talking-Political/dp/1944424466/ref=sr_1_1?s=books&ie=UTF8&qid=1515986807&sr=1-1&keywords=The+Three+Languages+of+Politics+by+Arnold+Kling">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/61Cnfg%2BbmVL.__BG0,0,0,0_FMpng_AC_UL320_SR218,320_.jpg"
                            alt="Arnold Kling"/>
                            </a>
                            </div>
                        </div>
                    
                    
                    
                        
              
                        <div class="peopleskill cover">
                            <div>
                                <a href="https://www.amazon.com/Never-Eat-Alone-Expanded-Updated/dp/0385346654/ref=sr_1_1?s=books&ie=UTF8&qid=1515987002&sr=1-1&keywords=never+eat+alone+by+keith+ferrazzi">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41gorlROJxL._SX327_BO1,204,203,200_.jpg"
                            alt="Keith Ferrazzi"/>
                            </a>
                            </div>
                        </div>
                        
                        
                        
 
                            <div class="misc cover">
                            <div>
                            <a href="https://www.amazon.com/Darkness-Visible-Madness-William-Styron/dp/0679736395/ref=sr_1_1?s=books&ie=UTF8&qid=1515987132&sr=1-1&keywords=darkness+visible+william+styron">
                            <img class="thumbnail" src="https://images.penguinrandomhouse.com/cover/9780679643524"
                            alt=""/>
                            </a>
                            </div>
                        </div>
                        
                        
          
                            <div class="misc cover">
                            <div>
                            <a href="https://www.amazon.com/Ignore-Everybody-Other-Keys-Creativity/dp/159184259X/ref=sr_1_1?s=books&ie=UTF8&qid=1515985570&sr=1-1&keywords=Ignore+Everybody+by+Hugh+Macleod">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/41Pbs%2B7XwvL._SX329_BO1,204,203,200_.jpg"
                            alt=""/>
                            </a>
                            </div>
                        </div>
                        
                        
                            <div class="econ cover">
                            <div>
                                <a href="https://mises.org/library/economic-controversies">
                                <img class="thumbnail" src="https://mises.org/sites/default/files/styles/slideshow/public/static-page/img/Economic%20Controversies_20110209_bookstore.jpg?itok=UlB8Dgb_"
                                alt="Murray Rothbard"/>
                                </a>
                            </div>
                            </div>
                        
                        
                        
              
                            <div class="misc cover">
                            <div>
                            <a href="https://www.railstutorial.org/">
                            <img class="thumbnail" src="https://softcover.s3.amazonaws.com/636/ruby_on_rails_tutorial_3rd_edition/images/cover-web.png"
                            alt="Michael Hartl"/>
                            </a>
                            </div>
                        </div>
                        
                    
                        
             
                        <div class="sci cover">
                            <div>
                            <a href="https://www.amazon.com/Spacetime-Physics-Edwin-F-Taylor/dp/0716723271/ref=sr_1_1?s=books&ie=UTF8&qid=1517016672&sr=1-1&keywords=spacetime+physics+taylor+and+wheeler">
                            <img class="thumbnail" src="https://images-na.ssl-images-amazon.com/images/I/51wj4hVfCVL._SX375_BO1,204,203,200_.jpg"
                            alt="Edwin F. Taylor & John Archibald Wheeler" /></a>
                            </div>
                        </div>
                    </div>

                
            </div>
        );
    }
}