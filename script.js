var element = document.getElementById('s2')
var x = 0; var y = 0

interact(element)
  .draggable({
    modifiers: [
      interact.modifiers.snap({
        targets: [
          interact.createSnapGrid({ x: 50, y: 05 })
        ],
        range : 1  ,
        relativePoints: [ { x: 20, y: 20 } ]
      }),
      interact.modifiers.restrict({
        restriction: element.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 0 },
        endOnly: true
      })
    ],
    inertia: true
  })
  .on('dragmove', function (event) {
    // x += event.dx
    y += event.dy

      // console.log("Thyu kaik ");
    event.target.style.webkitTransform =
    event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  }  )

  function listener (event) {
    document.body.style.backgroundColor =
    document.body.style.backgroundColor == "black" ? "#ffffff" : "black";

    

  }
  
interact(element).on('dragend', listener)
