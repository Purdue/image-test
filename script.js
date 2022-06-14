window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function(){
        if (this.files && this.files[0]) {
            var img = document.querySelector('.original');
            var output = document.querySelectorAll('.image');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            [...output].forEach((o)=>{
                o.style.backgroundImage = `url(${URL.createObjectURL(this.files[0])})`
            })
        }
    });
  });