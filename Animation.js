const firstSection = document.getElementById("first_section");
const secondSection = document.getElementById("second_section");
const thirdSection = document.getElementById("third_section");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
};

const observer = new IntersectionObserver(callBackFunction, options);

observer.observe(firstSection);
observer.observe(secondSection);
observer.observe(thirdSection);

function callBackFunction(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'first_section') {            
                entry.target.classList.add('loaded');
            }
            if (entry.target.id === 'second_section') {            
                entry.target.classList.add('fade-in');
            }
            if (entry.target.id === 'third_section') {          
                entry.target.classList.add('animate');
            }
        } else {
            // Remove animation when element leaves viewport
            if (entry.target.id === 'first_section') {            
                entry.target.classList.remove('loaded');
            }
            if (entry.target.id === 'second_section') {            
                entry.target.classList.remove('fade-in');
            }
            if (entry.target.id === 'third_section') {            
                entry.target.classList.remove('animate');

                // Remove animation from images inside `.images`
                document.querySelectorAll('.third_section .images img').forEach(img => {
                    img.classList.remove('animate');
                });
            }
        }
    });
}
