 
export default function deploymentMessage(page, urls) {
  if(page){
    page.innerHTML = `
    <div class="p-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-green-600 dark:text-green-500">Page is Under Construction</h1>
        <p class="mb-4 text-xs  tracking-tight font-bold text-gray-900 md:text-md dark:text-white">The Student Union Government (SUG) of the Federal University of Technology, Owerri (FUTO) .</p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400" id="not-found-message"></p>
        
      </div>
        
      <div class="flex mt-2 gap-2 flex-col text-xs text-center">
        <p class="">
          We’re working hard behind the scenes to bring you: Rich, updated content
        </p>
        <p class="">
          Interactive tools and resources and — <span class="text-green-600 dark:text-green-500 hover:underline">a seamless, mobile-friendly experience.</span>
        </p>
      </div>
        
      <ul class="flex gap-2 list-circle text-gray-500 dark:text-gray-400 mt-14 text-[12px] items-center justify-between text-center">
        <li class="flex flex-col">
          Return
          <a href="${urls}index.html">to <span class="text-green-600 dark:text-green-400">Home</span></a>
        </li>
        <li class="flex flex-col">
          Explore
          <a href="${urls}about-us.html" class="text-green-600 dark:text-green-400">About Us</a></li>
        <li class="flex flex-col">
          Get Help 
          <a href="${urls}socials.html" class="text-green-600 dark:text-green-400">Contact Us</a>
        </li>
      </ul>
    </div>`
  }
}