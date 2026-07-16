import Hero from './component/2-hero/Hero'
import Header from './component/1-header/Header'
import Main from './component/3-min/Main'
import Contact from './component/4-contact/Contact'
import Footer from './component/5-footer/Footer'
import { useEffect, useState } from 'react'



function App() {
 useEffect(() => {

window.addEventListener("scroll" , () => {
  if (window.scrollY > 300) {
    setshowScrollBTN(true)
  } else{
    setshowScrollBTN(false)
  }


})

 },[]);
 const [showScrollBTN, setshowScrollBTN] = useState(false)
return(

<div id='up' className='container'>

<Header />

<Hero />
<div className='divider' />
<Main />
<div className='divider' />
<Contact />
<div className='divider' />
<Footer />


  <a style={{opacity: showScrollBTN? 1 : 0, transition: "1s"}} href="#up">
<button className=' icon-keyboard_arrow_up scroll2Top'></button>
</a>

</div>


)




}

export default App
