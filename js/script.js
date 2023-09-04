// cambio de modo
const toggleIcon = document.getElementById('mode');
toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('fa-moon');
    toggleIcon.classList.toggle('fa-sun');
    document.body.classList.toggle('dark-mode');
})

//cambio de active con scroll o boton
const btnAbout = document.getElementById('btnAbout');

btnAbout.addEventListener('click', () => {
    btnAbout.classList.add('active');
})


const waypoints = [
    {
      id: 'home',
      handler(direction) { console.log('home'); }
    },
    {
      id: 'about',
      handler(direction) { console.log('about'); }
    },
    {
      id: 'skills',
      handler(direction) { console.log('skills'); }
    },
    {
      id: 'portfile',
      handler(direction) { console.log('portfile'); }
    },
    {
      id: 'contact',
      handler(direction) { console.log('contact'); }
    }
  ];
  
  
  waypoints.forEach(({ id, handler }) => (
    new Waypoint({
      element: document.getElementById(id),
      handler,
     
    })
  ));