  



  function sandwich(... items: string[]):void  {
      console.log("sandwish order")

   for (let i = 0;i < items.length; i++) {
     console.log(`- ${items}`)
   }

}
  

console.log("enjoy your sandwish Moazam ali")


sandwich('capsium')
sandwich('beef')
sandwich('garlic chicken')