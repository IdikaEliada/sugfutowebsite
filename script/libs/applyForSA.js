
  
 export function submitApplication (form, status){
  
  form.addEventListener('submit', //async 
  function(e) {
    e.preventDefault(); // stop normal submit

  //status.innerHTML = `<div class="fixed  top-20 left-4 right-4 py-16 text-center flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 font-medium" data-aos="fade-up">Sending....</div>`
  status.innerHTML = `<div class="fixed  top-20 left-4 right-4 py-16 text-center flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 font-medium" data-aos="fade-up">Oops! Application has end. Try again later.<br/>
   Redirecting to home page.....
  </div>`
  
  setTimeout(()=> {
    form.reset();
    window.location = "index.html"
       }, 2000
  )
  
  // try {
  //   const response = await fetch(form.action, {
  //     method: 'POST',
  //     body: new FormData(form),
  //     headers: { 'Accept': 'application/json' }
  //   });
    
  //   if (response.status >= 200 && response.status < 300) {
      
  //     status.innerHTML = `<div class="fixed  top-20 left-4 right-4 py-16 text-center flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 font-medium" data-aos="fade-up">Thanks! Your application was successful you will soon here from us.<br/>
  //     Redirecting to home page 
       
  //     </div>`
      

  //     setTimeout(()=> {
  //       form.reset();
  //       window.location = "index.html"
  //       }, 2000
  //     )

      
  //   } else {
  //     throw new Error('Network error');
  //   }
  // } catch (err) {
    
  //   status.innerHTML = `<div class="fixed  top-20 left-4 right-4 py-16 text-center flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 font-medium" data-aos="fade-up">Oops! Something went wrong. Try again later.</div>`
    
  // }
   });
 }