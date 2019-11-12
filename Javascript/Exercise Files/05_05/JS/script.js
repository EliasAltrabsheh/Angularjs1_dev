const CTAELEMENT = document.querySelector(".cta a")

if( CTAELEMENT.hasAttribuite("target")) {
  console.log(CTAELEMENT.getAttribute("target"))
} else {
  CTAELEMENT.hasAttribuite("target", "_blank")
}

console.log(CTAELEMENT.attributes );
