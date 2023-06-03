// const url = 'https://bayut.p.rapidapi.com/auto-complete?query=abu%20dhabi&hitsPerPage=25&page=0&lang=en';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fa15a7dfc4mshad76c30248e7efap1aa2b4jsn42925732bdbf',
// 		'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// 	}
// };
// async function fetchPropertyData(){
// try {
// 	const response = await fetch(url, options);
//   console.log(response)
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// fetchPropertyData()

const propertiesData =[
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F1.jpg?alt=media&token=d7f17078-670f-49e2-aa7c-fe2eb0097ac5&_gl=1*1b9esgx*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3N'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F2.jpg?alt=media&token=05ba0305-0b4f-4a7c-aebf-91e2a59ac6de&_gl=1*txwrlb*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUxNDcuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F3.jpeg?alt=media&token=4d109cf6-aa13-4863-b909-7df9eb116843&_gl=1*uk73no*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUxNzYuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F5.jpeg?alt=media&token=788d7e23-1067-4b42-800a-f489f974ec30&_gl=1*1s9cpsn*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyMDEuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F6.jpeg?alt=media&token=ccee5a82-6c13-4897-af29-90ad5fb5b1c0&_gl=1*6xhs1r*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyMTkuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F7.jpeg?alt=media&token=57476d56-69c3-4616-969e-28250f8f4c8f&_gl=1*1q39vyy*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyMzcuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F8.webp?alt=media&token=5aa1632c-0a5c-46df-93a0-57320740ae5f&_gl=1*1kb5ogv*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyNTMuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F9.jpeg?alt=media&token=933dc15c-2ab4-44da-bd08-e9dc88a01e5b&_gl=1*1vc38gi*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyNjkuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F10.jpeg?alt=media&token=b82cd8d4-5bf0-4a8c-9edc-2b364f68bf6e&_gl=1*1hvp04d*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyODQuMC4wLjA.'
  },
  {
     name:'Beautifull House',
     price:'22999999',
     area:'255',
     beds:'5',
     bathrooms:'4',
     link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F5.jpeg?alt=media&token=788d7e23-1067-4b42-800a-f489f974ec30&_gl=1*1s9cpsn*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyMDEuMC4wLjA.'
  },
  {
    name:'Beautifull House',
    price:'22999999',
    area:'255',
    beds:'5',
    bathrooms:'4',
    link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F5.jpeg?alt=media&token=788d7e23-1067-4b42-800a-f489f974ec30&_gl=1*1s9cpsn*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyMDEuMC4wLjA.'
 },
 {
  name:'Beautifull House',
  price:'22999999',
  area:'255',
  beds:'5',
  bathrooms:'4',
  link:'https://firebasestorage.googleapis.com/v0/b/rentify-40e6a.appspot.com/o/property%2F9.jpeg?alt=media&token=933dc15c-2ab4-44da-bd08-e9dc88a01e5b&_gl=1*1vc38gi*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3MzIzNi4yMC4xLjE2ODU3NzUyNjkuMC4wLjA.'
},
]

// Show Modal
function showModal() {
    document.querySelector(".overlay").classList.add("show-overlay");
    document.querySelector(".logincont").classList.add("show-loginform");
  }
  
function closeModal() {
    document.querySelector(".overlay").classList.remove("show-overlay");
    document.querySelector(".logincont").classList.remove("show-loginform");
  }
   

  function fetchProperty(){
    propertiesData.map((propertiesData,i) =>{
      document.querySelector('.item-boxes').innerHTML += ` <div class="item-box"><img src=${propertiesData.link} alt="image"> <b>&#8377 ${propertiesData.price}</b><p>${propertiesData.name}</p><hr><i class="uil uil-bed "></i><span> ${propertiesData.beds} Beds </span><i class="uil uil-bath"></i> <span> ${propertiesData.bathrooms} Bathrooms </span><i class="uil uil-estate"></i></i> <span>${propertiesData.area} sq.ft.area</span></div>`
     })
  }
  fetchProperty()

