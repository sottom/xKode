(function() {
  window.onload = function() {
    var stopInterval = false;

    function replaceXCode() {
      // object that stores text used to replace templates of code
      let replacements = {};

      //   get all x blocks and template tags
      let baseBlocks = Array.from(document.body.querySelectorAll("x"));

      if (baseBlocks.length < 1) {
        stopInterval = true;
      } else {
        let templates = document.body.querySelectorAll("template");
        let xInTemplates = [];
        (function(arr) {
          // check for templates that have replace template in them
          templates.forEach(temp => {
            let xlist = temp.content.querySelectorAll("x");
            xlist.forEach(xNode => {
              arr.push(xNode);
            });
          });
        })(xInTemplates);

        // put all template info in replacement object and remove the templates
        templates.forEach(temp => {
          replacements[temp.getAttribute("name")] = temp.innerHTML;
        });

        baseBlocks.forEach(section => {
          let attr = section.getAttribute("name");
          if (replacements[attr] != undefined) {
            section.outerHTML = replacements[attr];
          }
        });
      }

      // remove interval that runs this function
      if (stopInterval) {
        window.clearInterval(inter);
        // get rid of templates on the page
        let templates = document.body.querySelectorAll("template");
        templates.forEach(temp => {
          temp.parentNode.removeChild(temp);
        });
      }
    }

    var inter = setInterval(() => {
      replaceXCode();
    }, 10);

    replaceXCode();
  };
})();
